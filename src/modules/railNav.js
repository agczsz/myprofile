/**
 * RailNav - Navigation interactions, drawer toggle & email copy
 */

export function initRailNav() {
  const burgerBtn = document.getElementById('burger-btn');
  const menuCloseBtn = document.getElementById('menu-close-btn');
  const menuDrawer = document.getElementById('mobile-menu');
  const menuScrim = document.getElementById('menu-scrim');
  const drawerLinks = document.querySelectorAll('[data-drawer-link]');
  const copyEmailBtns = document.querySelectorAll('[data-copy-email]');
  const toastNotice = document.getElementById('toast-notice');

  function openMenu() {
    menuDrawer?.classList.add('is-open');
    menuScrim?.classList.add('is-open');
    burgerBtn?.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menuDrawer?.classList.remove('is-open');
    menuScrim?.classList.remove('is-open');
    burgerBtn?.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  burgerBtn?.addEventListener('click', () => {
    if (menuDrawer?.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menuCloseBtn?.addEventListener('click', closeMenu);
  menuScrim?.addEventListener('click', closeMenu);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Copy Email Functionality
  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const email = btn.getAttribute('data-email') || 'agczsz@outlook.com';
      try {
        await navigator.clipboard.writeText(email);
        showToast(`已复制邮箱: ${email}`);
      } catch (e) {
        showToast(`请手动联系: ${email}`);
      }
    });
  });

  function showToast(msg) {
    if (!toastNotice) return;
    toastNotice.textContent = msg;
    toastNotice.classList.add('is-show');
    setTimeout(() => {
      toastNotice.classList.remove('is-show');
    }, 2400);
  }
}
