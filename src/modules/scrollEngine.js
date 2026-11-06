/**
 * ScrollEngine - Coordinates 4-image sequential crossfade & section tracking
 *
 * Image Sequence:
 * Stage 1: picture/1-3840x2160px_C_sakura.webp (Cyan / Electric Teal) -> Intro & Mission
 * Stage 2: picture/2-3840x2160px_C_katan.webp (Crimson / Orange / Gold) -> About
 * Stage 3: picture/3-3840x2160px_C_suisen.webp (Cyber Violet / Obsidian) -> Work
 * Stage 4: picture/4-3840x2160px_C_sophia.webp (Emerald / Sky Blue / Rose Gold) -> Role & Contact
 */

const STAGES = [
  {
    name: 'sakura',
    accent: '#00f0ff',
    accent2: '#0077ff',
    glow: 'rgba(0, 240, 255, 0.35)',
    bg: '#091322'
  },
  {
    name: 'katan',
    accent: '#ff2a6d',
    accent2: '#ff6e27',
    glow: 'rgba(255, 42, 109, 0.35)',
    bg: '#1f0710'
  },
  {
    name: 'suisen',
    accent: '#b055ff',
    accent2: '#7928ca',
    glow: 'rgba(176, 85, 255, 0.35)',
    bg: '#10081d'
  },
  {
    name: 'sophia',
    accent: '#05f1af',
    accent2: '#38bdf8',
    glow: 'rgba(5, 241, 175, 0.35)',
    bg: '#081a17'
  }
];

export function initScrollEngine() {
  const stageLayers = [
    document.querySelector('.stage-layer-1'),
    document.querySelector('.stage-layer-2'),
    document.querySelector('.stage-layer-3'),
    document.querySelector('.stage-layer-4')
  ];

  const topProgress = document.getElementById('top-progress');
  const dualLayerOverlays = document.querySelectorAll('.dual-layer-overlay');
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const railItems = Array.from(document.querySelectorAll('[data-track-link]'));

  let currentStageIdx = -1;

  function onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollRatio = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;

    // 1. Update Top Progress Bar
    if (topProgress) {
      topProgress.style.transform = `scaleX(${scrollRatio})`;
    }

    // 2. Determine active stage (0..3) from section anchors.
    //    One artwork per section so the background never switches
    //    in the middle of a section: the stage only flips when the
    //    next section's top crosses the viewport midline.
    //    0: Intro & Mission (sakura), 1: About (katan),
    //    2: Work (suisen), 3: Role & Contact (sophia)
    const STAGE_BY_SECTION = { about: 1, work: 2, role: 3, contact: 3 };
    let activeStage = 0;
    for (let i = sections.length - 1; i >= 0; i--) {
      if (sections[i].getBoundingClientRect().top <= window.innerHeight * 0.5) {
        activeStage = STAGE_BY_SECTION[sections[i].id] ?? 0;
        break;
      }
    }

    // Apply Stage Theme Transition if changed
    if (activeStage !== currentStageIdx) {
      currentStageIdx = activeStage;
      applyStageTheme(activeStage);
    }

    // 3. Dual-Layer Text Reveal in About Section
    //    (Olivi style: each line wipes left->right, cascading line by line downward)
    //    Each line is tied to its OWN viewport position: it starts wiping as
    //    soon as it enters at the bottom and finishes once it reaches reading
    //    position — so the cascade begins early but never ends early.
    const dualLines = document.querySelectorAll('.dual-layer-line');
    if (dualLines.length > 0 && dualLayerOverlays.length > 0) {
      const viewH = window.innerHeight;
      dualLines.forEach((line, i) => {
        const overlay = dualLayerOverlays[i];
        if (!overlay) return;
        const top = line.getBoundingClientRect().top;
        // wipe spans from entering at 90% viewport to settling at 62%
        const local = Math.min(1, Math.max(0, (viewH * 0.9 - top) / (viewH * 0.28)));
        overlay.style.clipPath = `inset(0 ${(1 - local) * 100}% 0 0)`;
      });
    }

    // 4. Update Active Rail Item
    let activeSectionId = 'intro';
    for (let i = sections.length - 1; i >= 0; i--) {
      const s = sections[i];
      const rect = s.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.45) {
        activeSectionId = s.id;
        break;
      }
    }

    railItems.forEach(item => {
      const target = item.getAttribute('data-track-link');
      if (target === activeSectionId) {
        item.classList.add('is-active');
      } else {
        item.classList.remove('is-active');
      }
    });
  }

  function applyStageTheme(idx) {
    const stage = STAGES[idx];
    if (!stage) return;

    const root = document.documentElement;
    root.style.setProperty('--active-accent', stage.accent);
    root.style.setProperty('--active-accent-2', stage.accent2);
    root.style.setProperty('--active-glow', stage.glow);
    root.style.setProperty('--active-stage-bg', stage.bg);

    // Crossfade background layers
    stageLayers.forEach((layer, i) => {
      if (!layer) return;
      if (i === idx) {
        layer.classList.add('is-active');
      } else {
        layer.classList.remove('is-active');
      }
    });
  }

  // Initial trigger
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
