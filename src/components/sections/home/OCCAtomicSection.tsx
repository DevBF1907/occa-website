"use client";

import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import dataset from '@/data/occa-dataset.json';

const COLORS = ['#c94d2b', '#8a3a1e', '#f4f2ee', '#a0a0a0', '#d9734a', '#666'];
const LABELS = ['Núcleo', 'Estruturas', 'Membros', 'Ecossistema', 'Frentes', 'Iniciativas'];
const ORBITS = [
  { rad: 0, thk: 2.6, sz: 0.78 },
  { rad: 12, thk: 1.2, sz: 0.42 },
  { rad: 17, thk: 4.2, sz: 0.24 },
  { rad: 23, thk: 1.4, sz: 0.40 },
  { rad: 29, thk: 1.2, sz: 0.62 },
  { rad: 35, thk: 2.2, sz: 0.48 },
];

interface Props { fullScreen?: boolean }

export const OCCAtomicSection = ({ fullScreen }: Props) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const legRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const W = root.clientWidth;
    const H = root.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 200);

    const z = fullScreen ? (W / H < 0.7 ? 130 : 100) : (W / H < 0.8 ? 120 : 90);
    camera.position.set(0, 0, z);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x080808, 1);
    root.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);
    const geo = new THREE.SphereGeometry(1, 10, 7);
    const data = dataset as any;
    const groups: { mesh: THREE.InstancedMesh; mat: THREE.MeshBasicMaterial; entries: any[]; hex: string }[] = [];

    for (let gi = 0; gi < data.camadas.length; gi++) {
      const orb = ORBITS[gi];
      const items = data.elementos.filter((e: any) => e.orbital === gi);
      if (!items.length) continue;

      const hex = COLORS[gi];
      const color = new THREE.Color(hex);
      const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1, toneMapped: false });
      const mesh = new THREE.InstancedMesh(geo, mat, items.length);
      mesh.instanceMatrix.setUsage(THREE.StaticDrawUsage);
      group.add(mesh);

      const hm = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false });
      const halo = new THREE.InstancedMesh(geo, hm, items.length);
      halo.instanceMatrix.setUsage(THREE.StaticDrawUsage);
      group.add(halo);

      const rand = ((s: number) => { let x = s; return () => { x = (x * 9301 + 49297) % 233280; return x / 233280; }; })(gi * 997 + 13);
      const q = new THREE.Quaternion();
      const entries: any[] = [];

      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const phi = Math.acos(1 - 2 * ((i + 0.5) / items.length));
        const theta = Math.PI * (1 + Math.sqrt(5)) * i + rand() * 0.6;
        let x, y, z;
        if (gi === 0) {
          const rr = 3.6 + rand() * 5;
          x = rr * Math.sin(phi) * Math.cos(theta);
          y = rr * Math.sin(phi) * Math.sin(theta);
          z = rr * Math.cos(phi);
        } else {
          const rr = orb.rad + (rand() - 0.5) * orb.thk;
          x = rr * Math.sin(phi) * Math.cos(theta);
          y = rr * Math.sin(phi) * Math.sin(theta) * 0.85;
          z = rr * Math.cos(phi);
        }
        const deg = item.degree || item.size || 1;
        const sz = orb.sz * (0.7 + Math.min(deg / 8, 1.6));
        const pos = new THREE.Vector3(x, y, z);
        entries.push({ id: item.id, item, orbital: gi, pos, sz });
        const m = new THREE.Matrix4();
        m.compose(pos, q, new THREE.Vector3(sz, sz, sz));
        mesh.setMatrixAt(i, m);
        m.compose(pos, q, new THREE.Vector3(sz * 3, sz * 3, sz * 3));
        halo.setMatrixAt(i, m);
      }
      mesh.instanceMatrix.needsUpdate = true;
      halo.instanceMatrix.needsUpdate = true;
      groups.push({ mesh, mat, entries, hex });
    }

    // lines
    const allEntries = groups.flatMap(g => g.entries);
    const posMap: Record<string, THREE.Vector3> = {};
    allEntries.forEach(e => posMap[e.id] = e.pos);
    const lp: number[] = [];
    data.conexoes.forEach((cx: any) => {
      const a = posMap[cx.de], b = posMap[cx.para];
      if (!a || !b) return;
      lp.push(a.x, a.y, a.z, b.x, b.y, b.z);
    });
    const lg = new THREE.BufferGeometry();
    lg.setAttribute('position', new THREE.Float32BufferAttribute(lp, 3));
    const lines = new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: 0xf4f2ee, transparent: true, opacity: 0.08, toneMapped: false }));
    group.add(lines);

    // raycaster + pick
    const raycaster = new THREE.Raycaster();
    function pickFrom(clientX: number, clientY: number) {
      const rect = renderer.domElement.getBoundingClientRect();
      const nx = ((clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -((clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera({ x: nx, y: ny }, camera);
      let best: any = null;
      let bestDist = Infinity;
      for (let gi = 0; gi < groups.length; gi++) {
        const hits = raycaster.intersectObject(groups[gi].mesh, false);
        if (hits.length && hits[0].distance < bestDist) {
          bestDist = hits[0].distance;
          best = groups[gi].entries[hits[0].instanceId!];
        }
      }
      return best;
    }

    // UI refs
    const tooltip = document.createElement('div');
    tooltip.style.cssText = `
      position:absolute;pointer-events:none;z-index:6;
      background:rgba(8,8,8,0.9);border:1px solid rgba(244,242,238,0.12);border-left-width:2px;
      padding:5px 10px 6px;font:10px DM Mono,monospace;letter-spacing:.06em;color:#f4f2ee;
      white-space:nowrap;backdrop-filter:blur(4px);
      opacity:0;transition:opacity .14s;
      max-width:240px;overflow:hidden;text-overflow:ellipsis;
    `;
    root.appendChild(tooltip);

    const sheetEl = document.createElement('div');
    sheetEl.style.cssText = `
      position:fixed;left:50%;bottom:76px;transform:translateX(-50%) translateY(12px);
      z-index:10;display:none;max-width:min(480px,calc(100vw-32px));
      padding:16px 18px;background:rgba(8,8,8,0.92);
      border:1px solid rgba(244,242,238,0.1);
      backdrop-filter:blur(12px);border-radius:10px;
      transition:opacity .24s ease;opacity:0;
      max-height:60vh;overflow-y:auto;color:#f4f2ee;
      font-family:'DM Mono',monospace;
    `;
    sheetEl.innerHTML = `
      <div class="sh-close" style="position:absolute;top:12px;right:12px;width:26px;height:26px;background:transparent;border:1px solid rgba(244,242,238,0.14);color:#666;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;border-radius:4px">×</div>
      <div class="sh-eyebrow" style="font-size:9px;letter-spacing:.28em;text-transform:uppercase;color:#666;margin-bottom:6px">
        <span class="sh-dot" style="width:10px;height:10px;border-radius:50%;display:inline-block;margin-right:6px;box-shadow:0 0 10px currentColor;vertical-align:middle"></span>
        <span class="sh-camada"></span>
      </div>
      <h3 class="sh-title" style="font-family:'Instrument Serif',serif;font-weight:400;font-size:28px;line-height:1.1;margin:0 0 10px;color:#f4f2ee"></h3>
      <p class="sh-desc" style="font-family:'Instrument Serif',serif;font-weight:400;font-size:14px;line-height:1.55;color:#a0a0a0;margin:0 0 12px"></p>
      <div class="sh-tags" style="display:flex;flex-wrap:wrap;gap:4px;margin-top:8px"></div>
      <div class="sh-meta" style="display:flex;flex-wrap:wrap;gap:12px 20px;padding-top:12px;border-top:1px solid rgba(244,242,238,0.08);font-size:10px"></div>
    `;
    document.body.appendChild(sheetEl);

    const shClose = sheetEl.querySelector('.sh-close') as HTMLElement;
    const shDot = sheetEl.querySelector('.sh-dot') as HTMLElement;
    const shCamada = sheetEl.querySelector('.sh-camada') as HTMLElement;
    const shTitle = sheetEl.querySelector('.sh-title') as HTMLElement;
    const shDesc = sheetEl.querySelector('.sh-desc') as HTMLElement;
    const shTags = sheetEl.querySelector('.sh-tags') as HTMLElement;
    const shMeta = sheetEl.querySelector('.sh-meta') as HTMLElement;

    function showSheet(entry: any) {
      const it = entry.item;
      shTitle.textContent = it.label || '';
      shDesc.textContent = it.descricao || '—';
      shDesc.style.display = it.descricao ? '' : 'none';
      shCamada.textContent = `Orbital ${String(entry.orbital).padStart(2, '0')} · ${LABELS[entry.orbital]}`;
      shDot.style.background = COLORS[entry.orbital];
      shDot.style.color = COLORS[entry.orbital];
      shTags.innerHTML = '';
      (it.tags || []).slice(0, 8).forEach((t: string) => {
        const s = document.createElement('span');
        s.style.cssText = 'font-size:8.5px;letter-spacing:.14em;text-transform:uppercase;color:#666;border:1px solid rgba(244,242,238,0.12);padding:3px 7px';
        s.textContent = t;
        shTags.appendChild(s);
      });
      const conn = data.conexoes.filter((c: any) => c.de === it.id || c.para === it.id).length;
      const meta: string[] = [];
      meta.push(`<div>Conexões<strong>${conn}</strong></div>`);
      if (it.degree != null) meta.push(`<div>Centralidade<strong>${it.degree}</strong></div>`);
      if (it.website) meta.push(`<div>Site<strong><a href="${it.website}" target="_blank" rel="noreferrer" style="color:#c94d2b;text-decoration:none;border-bottom:1px solid currentColor;">visitar ↗</a></strong></div>`);
      shMeta.innerHTML = meta.join('');
      sheetEl.style.display = 'block';
      requestAnimationFrame(() => { sheetEl.style.opacity = '1'; });
    }

    function hideSheet() {
      sheetEl.style.opacity = '0';
      setTimeout(() => { sheetEl.style.display = 'none'; }, 260);
    }

    shClose.onclick = hideSheet;

    // emphasis
    let emph = -1;
    function setEmphasis(i: number) {
      emph = i;
      const active = emph >= 0;
      for (let gi = 0; gi < groups.length; gi++) {
        groups[gi].mat.opacity = (active && emph !== gi) ? 0.2 : 0.9;
      }
      lines.material.opacity = active ? 0.04 : 0.08;
    }

    // parallax
    let prlxTX = 0, prlxTY = 0;
    let prlxCX = 0, prlxCY = 0;
    let targetRY: number | null = null;
    let targetRX: number | null = null;

    function focusEntry(entry: any) {
      targetRY = -Math.atan2(entry.pos.x, entry.pos.z);
      targetRX = Math.atan2(entry.pos.y, Math.sqrt(entry.pos.x * entry.pos.x + entry.pos.z * entry.pos.z));
    }

    function unfocus() {
      targetRY = null; targetRX = null;
    }

    function setParallax(clientX: number, clientY: number) {
      const rect = root.getBoundingClientRect();
      prlxTX = ((clientX - rect.left) / rect.width) * 2 - 1;
      prlxTY = ((clientY - rect.top) / rect.height) * 2 - 1;
    }

    // interaction
    let downAt: { x: number; y: number; t: number } | null = null;
    let hoverId: string | null = null;

    function onPointerDown(e: PointerEvent) {
      downAt = { x: e.clientX, y: e.clientY, t: performance.now() };
    }

    function onPointerUp(e: PointerEvent) {
      if (!downAt) return;
      const dx = e.clientX - downAt.x;
      const dy = e.clientY - downAt.y;
      const dt = performance.now() - downAt.t;
      downAt = null;
      if (dt > 350 || Math.abs(dx) > 6 || Math.abs(dy) > 6) return;
      const hit = pickFrom(e.clientX, e.clientY);
      if (hit) { focusEntry(hit); showSheet(hit); }
      else { unfocus(); hideSheet(); }
    }

    function onPointerMove(e: PointerEvent) {
      if (targetRY === null) setParallax(e.clientX, e.clientY);

      const hit = pickFrom(e.clientX, e.clientY);
      if (hit) {
        renderer.domElement.style.cursor = 'pointer';
        if (hoverId !== hit.id) {
          hoverId = hit.id;
          tooltip.textContent = hit.item.label;
          tooltip.style.borderLeftColor = COLORS[hit.orbital];
        }
        const rect = root.getBoundingClientRect();
        tooltip.style.left = (e.clientX - rect.left) + 'px';
        tooltip.style.top = (e.clientY - rect.top) + 'px';
        tooltip.style.opacity = '1';
      } else {
        renderer.domElement.style.cursor = '';
        hoverId = null;
        tooltip.style.opacity = '0';
      }
    }

    function onPointerLeave() {
      prlxTX = 0; prlxTY = 0;
      tooltip.style.opacity = '0';
      hoverId = null;
      renderer.domElement.style.cursor = '';
    }

    const canvas = renderer.domElement;
    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerleave', onPointerLeave);

    // legend
    const leg = legRef.current;
    if (leg) {
      let locked = -1;
      data.camadas.forEach((_: any, i: number) => {
        const count = data.elementos.filter((e: any) => e.orbital === i).length;
        const el = document.createElement('div');
        el.style.cssText = 'display:flex;align-items:center;gap:6px;padding:4px 10px;font:9.5px/1 DM Mono,monospace;letter-spacing:0.18em;text-transform:uppercase;color:#555;cursor:pointer;transition:color .15s;border-right:1px solid rgba(244,242,238,0.05);white-space:nowrap;flex-shrink:0';
        if (i === data.camadas.length - 1) el.style.borderRight = '0';
        el.innerHTML = `<span style="width:7px;height:7px;border-radius:50%;background:${COLORS[i]};box-shadow:0 0 6px ${COLORS[i]};flex-shrink:0;display:inline-block"></span>${LABELS[i]}<span style="color:#444;font-size:8px;opacity:.6;margin-left:2px">${count}</span>`;
        el.onmouseenter = () => { if (locked < 0) setEmphasis(i); };
        el.onmouseleave = () => { if (locked < 0) setEmphasis(-1); };
        el.onclick = () => {
          locked = locked === i ? -1 : i;
          leg.querySelectorAll('div').forEach(e => e.style.color = '#555');
          if (locked >= 0) { el.style.color = '#f4f2ee'; setEmphasis(i); }
          else { setEmphasis(-1); unfocus(); }
        };
        leg.appendChild(el);
      });
    }

    // animation
    let frameId = 0;
    function tick() {
      prlxCX += (prlxTX - prlxCX) * 0.07;
      prlxCY += (prlxTY - prlxCY) * 0.07;

      if (targetRY !== null) {
        let dy = targetRY - group.rotation.y;
        dy = ((dy + Math.PI) % (Math.PI * 2)) - Math.PI;
        group.rotation.y += dy * 0.05;
        group.rotation.x += (targetRX! - group.rotation.x) * 0.05;
        if (Math.abs(dy) < 0.003 && Math.abs(targetRX! - group.rotation.x) < 0.003) {
          targetRY = null; targetRX = null;
        }
      } else {
        const speed = 0.008;
        const easeY = Math.sign(prlxCX) * Math.pow(Math.min(Math.abs(prlxCX), 1), 1.8);
        const easeX = Math.sign(prlxCY) * Math.pow(Math.min(Math.abs(prlxCY), 1), 1.8);
        group.rotation.y += easeY * speed + prlxCX * 0.002;
        group.rotation.x += -easeX * speed * 0.4 + prlxCY * 0.001;
        group.rotation.x = Math.max(-0.6, Math.min(0.6, group.rotation.x));
      }
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(tick);
    }
    frameId = requestAnimationFrame(tick);

    function onResize() {
      const w = root.clientWidth, h = root.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.position.z = fullScreen ? (w / h < 0.7 ? 130 : 100) : (w / h < 0.8 ? 120 : 90);
      camera.updateProjectionMatrix();
    }
    addEventListener('resize', onResize);
    addEventListener('keydown', (e) => { if (e.key === 'Escape') { hideSheet(); unfocus(); } });

    return () => {
      cancelAnimationFrame(frameId);
      removeEventListener('resize', onResize);
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerleave', onPointerLeave);
      renderer.dispose();
      tooltip.remove();
      sheetEl.remove();
    };
  }, [fullScreen]);

  return (
    <section style={{
      position: 'relative', width: '100%',
      height: fullScreen ? '100vh' : '720px',
      minHeight: fullScreen ? '100vh' : '640px',
      background: '#080808', overflow: 'hidden',
    }}>
      <div ref={rootRef} style={{ position: 'absolute', inset: 0 }} />
      <div ref={legRef} style={{
        position: 'absolute', bottom: 22, left: '50%', transform: 'translateX(-50%)', zIndex: 5,
        display: 'flex', padding: '6px 8px',
        background: 'rgba(8,8,8,0.55)', border: '1px solid rgba(244,242,238,0.06)',
        backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
        maxWidth: 'calc(100vw - 32px)', overflowX: 'auto',
      }} />
    </section>
  );
};
