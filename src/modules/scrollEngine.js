/**
 * ScrollEngine - Coordinates 4-image sequential crossfade & section tracking
 *
 * Image Sequence:
 * Stage 1: picture/1-3840x2160px_C_sakura.png (Cyan / Electric Teal) -> Intro & Mission
 * Stage 2: picture/2-3840x2160px_C_katan.png (Crimson / Orange / Gold) -> About
 * Stage 3: picture/3-3840x2160px_C_suisen.png (Cyber Violet / Obsidian) -> Work
 * Stage 4: picture/4-3840x2160px_C_sophia.png (Emerald / Sky Blue / Rose Gold) -> Role & Contact
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

    // 2. Determine active stage (0..3) across the page flow
    // 0: Intro & Mission, 1: About, 2: Work, 3: Role & Contact
    let activeStage = 0;
    if (scrollRatio >= 0.72) {
      activeStage = 3;
    } else if (scrollRatio >= 0.45) {
      activeStage = 2;
    } else if (scrollRatio >= 0.22) {
      activeStage = 1;
    } else {
      activeStage = 0;
    }

    // Apply Stage Theme Transition if changed
    if (activeStage !== currentStageIdx) {
      currentStageIdx = activeStage;
      applyStageTheme(activeStage);
    }

    // 3. Dual-Layer Text Reveal in About Section (Olivi style clip-path scrub)
    const aboutSection = document.getElementById('about');
    if (aboutSection && dualLayerOverlays.length > 0) {
      const rect = aboutSection.getBoundingClientRect();
      const viewH = window.innerHeight;
      // Start revealing when entering viewport, finish when centered
      const enterProgress = (viewH - rect.top) / (viewH + rect.height * 0.5);
      const clamped = Math.min(1, Math.max(0, enterProgress));
      const rightInset = Math.max(0, (1 - clamped) * 100);

      dualLayerOverlays.forEach(overlay => {
        overlay.style.clipPath = `inset(0 ${rightInset}% 0 0)`;
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
