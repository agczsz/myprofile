/**
 * Main Application Coordinator - Damin Luo Portfolio
 */

// Styles
import './styles/tokens.css';
import './styles/base.css';
import './styles/rail.css';
import './styles/effects.css';
import './styles/sections.css';
import './styles/modal.css';

// Modules
import { initScrollEngine } from './modules/scrollEngine.js';
import { initRailNav } from './modules/railNav.js';
import { initTextScrub } from './modules/textScrub.js';
import { initWorkViewer } from './modules/workViewer.js';
import { initAudio } from './modules/audioFx.js';

document.addEventListener('DOMContentLoaded', () => {
  initScrollEngine();
  initRailNav();
  initTextScrub();
  initWorkViewer();
  initAudio();

  // Story modal trigger ("My story ↗")
  const storyTriggers = document.querySelectorAll('[data-open-story]');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalDialog = document.getElementById('modal-dialog');
  const modalTag = document.getElementById('modal-tag');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  storyTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      if (modalTag) modalTag.textContent = 'ABOUT ME / 个人故事与心路历程';
      if (modalTitle) modalTitle.textContent = 'Damin Luo';
      if (modalBody) {
        modalBody.innerHTML = `
          <p class="lead">某医科大学 2024 级临床医学本科在读，立志从事临床全科医学。在深耕基础医学（生物化学、病理生理学、临床诊断）的同时，深度跨界计算生物学与现代软件工程。</p>
          <h4>为什么同时深耕临床与代码？</h4>
          <p>在微观生物学世界中，蛋白质与核酸的每一次构象异构与突变都遵循严谨的物理与化学定律；而在宏观临床诊疗中，每一个患者的病症又是高度复杂而富有温度的现实。我坚信，未来的医学将深度融合计算驱动与数据智能——通过分子动力学模拟（MD）探索变构抑制机制，通过自研 AI Agent 工作流与系统自动化工程赋能科研效率。</p>
          <h4>核心追求</h4>
          <ul>
            <li><strong>精准微观洞察：</strong>解析 GajA 等抗噬菌体与免疫防御系统的非对称变构与自由能景观。</li>
            <li><strong>工程化自动化：</strong>用代码消灭重复性生信与计算体力活，构建可复现、高效率的研究管道。</li>
            <li><strong>数字花园与美学：</strong>兼顾严谨科学与数字生活趣味，探求逻辑之美与艺术共鸣。</li>
          </ul>
        `;
      }
      modalBackdrop?.classList.add('is-open');
      modalDialog?.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
  });
});
