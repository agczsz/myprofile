/**
 * TextScrub - Olivi.top word-by-word kinetic scroll reveal
 */

export function initTextScrub() {
  const scrubContainers = document.querySelectorAll('.scrub-words');

  scrubContainers.forEach(container => {
    const rawText = container.getAttribute('data-scrub-text') || container.textContent.trim();
    container.innerHTML = '';

    // Segment into words/phrases for Chinese & English.
    // Punctuation is merged into the preceding phrase span so a line
    // never starts with ，。、 (Olivi-style natural CJK wrapping).
    const segments = rawText.split(/(，|。|、|；|：|！|？|\s+)/);

    segments.forEach(seg => {
      if (!seg) return;
      if (/^\s+$/.test(seg)) {
        container.appendChild(document.createTextNode(' '));
        return;
      }
      const isPunct = /^[，。、；：！？]/.test(seg);
      const prev = container.lastElementChild;
      if (isPunct && prev && prev.classList.contains('scrub-word')) {
        prev.textContent += seg;
        return;
      }
      const span = document.createElement('span');
      span.className = 'scrub-word';
      span.textContent = seg;
      container.appendChild(span);
    });

    const words = Array.from(container.querySelectorAll('.scrub-word'));

    function updateWords() {
      const rect = container.getBoundingClientRect();
      const viewH = window.innerHeight;

      // Start reveal when entering view, full reveal by top 30%
      const progress = (viewH * 0.85 - rect.top) / (viewH * 0.65);
      const clamped = Math.min(1, Math.max(0, progress));
      const activeCount = Math.floor(clamped * words.length);

      words.forEach((w, idx) => {
        if (idx <= activeCount) {
          w.classList.add('is-revealed');
        } else {
          w.classList.remove('is-revealed');
        }
      });
    }

    window.addEventListener('scroll', updateWords, { passive: true });
    updateWords();
  });
}
