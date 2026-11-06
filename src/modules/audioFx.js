/**
 * AudioFx - Tactile Web Audio synthetic feedback (Toggleable)
 */

let audioCtx = null;
let isAudioEnabled = false;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playTick(freq = 560, duration = 0.03) {
  if (!isAudioEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.5, ctx.currentTime + duration);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // Audio context not allowed or failed
  }
}

export function initAudio() {
  const sfxBtn = document.getElementById('rail-sfx-btn');

  sfxBtn?.addEventListener('click', () => {
    isAudioEnabled = !isAudioEnabled;
    if (isAudioEnabled) {
      sfxBtn.classList.add('is-active');
      getAudioContext();
      playTick(880, 0.05);
    } else {
      sfxBtn.classList.remove('is-active');
    }
  });

  // Attach hover sounds to interactive elements
  const interactiveElements = document.querySelectorAll('.rail-item, .work-item, .burger, .line-link');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (isAudioEnabled) playTick(620, 0.02);
    });
  });
}
