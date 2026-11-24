/* ===================================================================
   HAKIGAMES - LÓGICA DE INTERACTIVIDAD (Vanilla JS)
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menú móvil
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');

  if (mobileBtn && mainNav) {
    mobileBtn.addEventListener('click', () => {
      mainNav.classList.toggle('mobile-active');
      mobileBtn.textContent = mainNav.classList.contains('mobile-active') ? '✕' : '☰';
    });
  }

  // 2. Filtros de Categoría en Tienda (tienda.html)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const gameCards = document.querySelectorAll('.game-card[data-category]');

  if (filterBtns.length > 0 && gameCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-filter');

        gameCards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          if (category === 'all' || cardCat === category) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 3. Acordeón de FAQ (contacto.html)
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const parentItem = btn.closest('.faq-item');
      if (parentItem) {
        parentItem.classList.toggle('open');
      }
    });
  });

  // 4. Modal Interactivo de Recarga Rápida, Ofertas y Pases
  const modalOverlay = document.getElementById('rechargeModal');
  const modalCloseBtn = document.getElementById('closeModalBtn');
  const modalGameTitle = document.getElementById('modalGameTitle');
  const rechargeBtns = document.querySelectorAll('.btn-recharge');
  const bundleBtns = document.querySelectorAll('.btn-bundle');
  const passBtns = document.querySelectorAll('.btn-pass');
  const pkgOptions = document.querySelectorAll('.package-option');
  const modalTotal = document.getElementById('modalTotal');
  const confirmOrderBtn = document.getElementById('confirmOrderBtn');
  const playerIdInput = document.getElementById('playerIdInput');

  if (modalOverlay) {
    // A) Abrir modal para Recargas estándar
    rechargeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const card = btn.closest('.game-card');
        const title = card ? card.querySelector('.game-title').textContent : 'Juego';
        
        if (modalGameTitle) {
          modalGameTitle.textContent = `Recarga para ${title}`;
        }
        if (modalTotal) {
          modalTotal.textContent = '$0.99 USD';
        }
        pkgOptions.forEach((opt, idx) => {
          opt.style.display = 'block';
          if (idx === 0) opt.classList.add('selected');
          else opt.classList.remove('selected');
        });
        modalOverlay.classList.add('active');
      });
    });

    // B) Abrir modal para Ofertas Especiales + Skin de Regalo
    bundleBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const card = btn.closest('.bundle-card');
        const title = card ? card.querySelector('.game-title').textContent : 'Oferta';
        const price = card ? card.getAttribute('data-price') || '14.99' : '14.99';
        const skin = card ? card.getAttribute('data-skin') || 'Skin Exclusiva' : 'Skin Exclusiva';

        if (modalGameTitle) {
          modalGameTitle.textContent = `🎁 Oferta + Skin: ${title}`;
        }
        if (modalTotal) {
          modalTotal.textContent = `$${price} USD`;
        }

        // Marcar la opción seleccionada con la oferta
        pkgOptions.forEach((opt, idx) => {
          if (idx === 0) {
            opt.classList.add('selected');
            const amtSpan = opt.querySelector('.pkg-amount');
            const priceSpan = opt.querySelector('.pkg-price');
            if (amtSpan) amtSpan.textContent = `Bundle Completo + ${skin}`;
            if (priceSpan) priceSpan.textContent = `$${price} USD`;
            opt.style.display = 'block';
          } else {
            opt.style.display = 'none';
          }
        });

        modalOverlay.classList.add('active');
      });
    });

    // C) Abrir modal para Pases de Batalla
    passBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const card = btn.closest('.pass-card');
        const title = card ? card.querySelector('.game-title').textContent : 'Pase de Batalla';
        const price = card ? card.getAttribute('data-price') || '9.99' : '9.99';
        const season = card ? card.getAttribute('data-season') || 'Temporada Activa' : 'Temporada Activa';

        if (modalGameTitle) {
          modalGameTitle.textContent = `⚔️ Activar: ${title} (${season})`;
        }
        if (modalTotal) {
          modalTotal.textContent = `$${price} USD`;
        }

        pkgOptions.forEach((opt, idx) => {
          if (idx === 0) {
            opt.classList.add('selected');
            const amtSpan = opt.querySelector('.pkg-amount');
            const priceSpan = opt.querySelector('.pkg-price');
            if (amtSpan) amtSpan.textContent = `Pase de Batalla Premium (${season})`;
            if (priceSpan) priceSpan.textContent = `$${price} USD`;
            opt.style.display = 'block';
          } else {
            opt.style.display = 'none';
          }
        });

        modalOverlay.classList.add('active');
      });
    });

    // Cerrar modal
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
      });
    }

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });

    // Selección de paquetes estándar
    pkgOptions.forEach(option => {
      option.addEventListener('click', () => {
        pkgOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');

        const price = option.getAttribute('data-price');
        if (modalTotal && price) {
          modalTotal.textContent = `$${price} USD`;
        }
      });
    });

    // Simular confirmación
    if (confirmOrderBtn) {
      confirmOrderBtn.addEventListener('click', () => {
        const idVal = playerIdInput ? playerIdInput.value.trim() : '';
        if (!idVal) {
          alert('⚠️ Por favor ingresa tu ID de jugador o Usuario para acreditar la recarga.');
          return;
        }

        confirmOrderBtn.textContent = '⏳ Procesando orden...';
        confirmOrderBtn.disabled = true;

        setTimeout(() => {
          alert(`🎉 ¡Éxito! Tu orden para el ID [${idVal}] ha sido procesada de forma segura. La acreditación o pase se activará en tu cuenta en menos de 60 segundos.`);
          confirmOrderBtn.textContent = '⚡ Confirmar y Pagar';
          confirmOrderBtn.disabled = false;
          modalOverlay.classList.remove('active');
          if (playerIdInput) playerIdInput.value = '';
        }, 1200);
      });
    }
  }

  // 5. Envío simulado de formulario de contacto
  const supportForm = document.getElementById('supportForm');
  if (supportForm) {
    supportForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('📩 ¡Mensaje recibido! Nuestro equipo de soporte gamer te responderá al correo en menos de 15 minutos.');
      supportForm.reset();
    });
  }

  // 6. Modal Lightbox para ampliar fotos del equipo (nosotros.html)
  const avatarModal = document.getElementById('avatarModal');
  const avatarModalImg = document.getElementById('avatarModalImg');
  const avatarModalName = document.getElementById('avatarModalName');
  const avatarModalRole = document.getElementById('avatarModalRole');
  const closeAvatarModal = document.getElementById('closeAvatarModal');
  const teamCards = document.querySelectorAll('.team-card');

  if (avatarModal && avatarModalImg) {
    teamCards.forEach(card => {
      const avatarImg = card.querySelector('.team-avatar img');
      if (avatarImg) {
        const avatarWrap = card.querySelector('.team-avatar');
        avatarWrap.title = 'Haz clic para ver la foto en grande';

        avatarWrap.addEventListener('click', () => {
          const name = card.querySelector('h4') ? card.querySelector('h4').textContent : '';
          const role = card.querySelector('.team-role') ? card.querySelector('.team-role').textContent : '';
          
          avatarModalImg.src = avatarImg.src;
          if (avatarModalName) avatarModalName.textContent = name;
          if (avatarModalRole) avatarModalRole.textContent = role;
          avatarModal.classList.add('active');
        });
      }
    });

    if (closeAvatarModal) {
      closeAvatarModal.addEventListener('click', () => {
        avatarModal.classList.remove('active');
      });
    }

    avatarModal.addEventListener('click', (e) => {
      if (e.target === avatarModal) {
        avatarModal.classList.remove('active');
      }
    });

    // Cerrar también con tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && avatarModal.classList.contains('active')) {
        avatarModal.classList.remove('active');
      }
    });
  }
});
