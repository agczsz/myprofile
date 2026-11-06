/**
 * WorkViewer - Interactive project showcase with sticky preview card & detail modal
 */

export const PROJECTS_DATA = [
  {
    id: '01',
    title: '生息演算 (MD Agent Platform)',
    category: 'AI Agent · Molecular Dynamics · Python',
    year: '2025–2026',
    previewBg: 'radial-gradient(120% 90% at 20% 15%, #00f0ff 0%, #0077ff 45%, #091322 100%)',
    image: '/picture/1-3840x2160px_C_sakura.png',
    summary: '基于大语言模型（LLM）的分子动力学模拟全流程自动化平台。',
    details: `
      <h4>项目背景与核心痛点</h4>
      <p>分子动力学模拟（MD）涉及繁琐的 PDB 结构前处理、缺失残基修复、质子化状态判定、力场参数文件生成以及海量轨迹的后处理分析。传统流程高度依赖专家经验与重复性脚本编写，学习曲线陡峭。</p>
      <h4>核心特性与技术实现</h4>
      <ul>
        <li><strong>自动化 PDB 预测与拓扑构建：</strong>集成 PDBFixer 与 AlphaFold/ESMFold 预测接口，实现蛋白质结构的自动化补全与质子化。</li>
        <li><strong>智能参数生成引擎：</strong>基于 Agent 工作流，自动推导力场（Amber ff14SB, TIP3P）与 cpptraj 动力学分析脚本。</li>
        <li><strong>高通量轨迹数据管道：</strong>整合 RMSD、RMSF、回转半径（Rg）、氢键网络与自由能曲面（WHAM）的批量并行提取与自动化报表导出。</li>
      </ul>
    `
  },
  {
    id: '02',
    title: '自动化流媒体与追番管线',
    category: 'Media Pipeline · Notion API · Cloudflare AI',
    year: '2024–2025',
    previewBg: 'radial-gradient(120% 90% at 20% 15%, #ff2a6d 0%, #ff6e27 45%, #1f0710 100%)',
    image: '/picture/2-3840x2160px_C_katan.png',
    summary: '全流程自建的追番自动化与多端媒体追踪系统，打通动漫元数据与双向进度同步。',
    details: `
      <h4>技术栈与架构</h4>
      <p>Bangumi API, Crunchyroll WEB-DL, Notion API, Trakt, Cloudflare Workers AI。</p>
      <h4>核心功能</h4>
      <ul>
        <li><strong>自动获取与入库：</strong>基于 RSS 与自动化下载器实时抓取高质量动漫源文件。</li>
        <li><strong>元数据智能整理：</strong>调用 Cloudflare Workers AI 提取剧集信息并精确对齐 Bangumi / TMDB 数据库。</li>
        <li><strong>跨平台进度同步：</strong>在 Apple TV、iPad 与手机播放端实现与 Notion 数据库、Trakt 的双向进度自动同步。</li>
      </ul>
    `
  },
  {
    id: '03',
    title: '蛋白质变异分析与可视化管线',
    category: 'Computational Biology · R · DataViz',
    year: '2024',
    previewBg: 'radial-gradient(120% 90% at 20% 15%, #b055ff 0%, #7928ca 45%, #10081d 100%)',
    image: '/picture/3-3840x2160px_C_suisen.png',
    summary: '针对 PZAse 等重要药物靶点野生型与突变型的多维度动力学数据自动化可视化工具。',
    details: `
      <h4>核心能力</h4>
      <ul>
        <li><strong>多维度动力学对比：</strong>自动化计算野生型与多点突变型的 RMSD、RMSF 动态演化差值。</li>
        <li><strong>网络中心度（Network Centrality）分析：</strong>基于残基互作网络图论算法，量化关键变构热点残基。</li>
        <li><strong>出版级图表自动化生成：</strong>使用 R 语言与 ggplot2 自动化输出 2×2 标准网格图，直观展现突变对局部柔性与变构通道的扰动效应。</li>
      </ul>
    `
  },
  {
    id: '04',
    title: 'Gabija GajA 四聚体变构动力学研究',
    category: 'Academic Paper · JMGM (Under Review) · Amber24',
    year: '2024–2025',
    previewBg: 'radial-gradient(120% 90% at 20% 15%, #ffc837 0%, #ff6e27 45%, #091322 100%)',
    image: '/picture/2-3840x2160px_C_katan.png',
    summary: '已投稿至 Journal of Molecular Graphics and Modelling。揭示噬菌体防御系统中 GajA 的 ATP 驱动非对称变构机制。',
    details: `
      <h4>论文贡献与研究亮点</h4>
      <p><strong>论文题目：</strong>"Atomistic insights into ATP driven inhibition and asymmetric conformational transition of GajA homotetramer in the Gabija antiphage defense system"</p>
      <ul>
        <li>揭示了 ATP 结合如何诱导 GajA 同源四聚体产生非对称协同运动。</li>
        <li>阐明了防御系统中水解活性受到浓度依赖性抑制的原子级别动力学全过程。</li>
        <li>参与相关发明专利申请 1 项。</li>
      </ul>
    `
  },
  {
    id: '05',
    title: 'Homelab & 私有云基础设施',
    category: 'Virtualization · Linux · Proxmox VE · Docker',
    year: '2023–2026',
    previewBg: 'radial-gradient(120% 90% at 20% 15%, #05f1af 0%, #38bdf8 45%, #081a17 100%)',
    image: '/picture/4-3840x2160px_C_sophia.png',
    summary: '高可用私有家庭实验室与跨地域轻量云网络，支撑生信计算、开发环境与数字资产。',
    details: `
      <h4>基础设施布局</h4>
      <ul>
        <li><strong>虚拟化底层：</strong>Proxmox VE (PVE) 宿主机集群，混合部署 KVM 与轻量级 LXC 容器。</li>
        <li><strong>Linux 生态：</strong>Debian, Rocky Linux, AlmaLinux 跨地域 VPS 运维与自动化监控告警。</li>
        <li><strong>内网穿透与安全网关：</strong>自建 RustDesk 远程调度服务器，结合 Cloudflare Zero Trust 与 Tunnel 实现无公网 IP 安全访问。</li>
      </ul>
    `
  },
  {
    id: '06',
    title: 'Hi-Fi 音频工程与数字信号链',
    category: 'Digital Acoustics · DAC · AutoEq / PEQ',
    year: 'Continuous',
    previewBg: 'radial-gradient(120% 90% at 20% 15%, #38bdf8 0%, #b055ff 45%, #10081d 100%)',
    image: '/picture/3-3840x2160px_C_suisen.png',
    summary: '精准数字音频调校、Shanling UA2 DAC 系统配合自定义 PEQ 均衡曲线，优化 ACG 人声结像。',
    details: `
      <h4>调音哲学与工程实践</h4>
      <ul>
        <li><strong>数字音频信号链：</strong>基于位完美（Bit-Perfect）与异步 USB 传输架构，消除抖动（Jitter）。</li>
        <li><strong>自定义参量均衡（PEQ）：</strong>针对多单元动铁与动圈耳塞进行频响补偿，打造极致纯净的 ACG 女声与弦乐解析。</li>
        <li><strong>HQPlayer 调制器优化：</strong>探索高倍率 DSD 与多项式滤波器的空间结像还原。</li>
      </ul>
    `
  }
];

export function initWorkViewer() {
  const workItems = document.querySelectorAll('.work-item');
  const visualCard = document.getElementById('work-sticky-card');
  const visualImg = document.getElementById('work-visual-img');
  const visualTag = document.getElementById('work-visual-tag');
  const visualYear = document.getElementById('work-visual-year');
  const visualTitle = document.getElementById('work-visual-title');

  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalDialog = document.getElementById('modal-dialog');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTag = document.getElementById('modal-tag');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  function updateVisual(idx) {
    const data = PROJECTS_DATA[idx];
    if (!data) return;

    if (visualTag) visualTag.textContent = data.category;
    if (visualYear) visualYear.textContent = data.year;
    if (visualTitle) visualTitle.textContent = data.title;
    if (visualImg) visualImg.style.backgroundImage = `url('${data.image}')`;
    if (visualCard) visualCard.style.background = data.previewBg;

    workItems.forEach((item, i) => {
      if (i === idx) {
        item.classList.add('is-active');
      } else {
        item.classList.remove('is-active');
      }
    });
  }

  function openProjectModal(idx) {
    const data = PROJECTS_DATA[idx];
    if (!data) return;

    if (modalTag) modalTag.textContent = `${data.id} / ${data.category}`;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalBody) modalBody.innerHTML = `<p class="lead">${data.summary}</p>${data.details}`;

    modalBackdrop?.classList.add('is-open');
    modalDialog?.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalBackdrop?.classList.remove('is-open');
    modalDialog?.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  workItems.forEach((item, idx) => {
    item.addEventListener('mouseenter', () => updateVisual(idx));
    item.addEventListener('click', () => openProjectModal(idx));
  });

  modalCloseBtn?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', closeModal);

  // Initial display on project 0
  updateVisual(0);
}
