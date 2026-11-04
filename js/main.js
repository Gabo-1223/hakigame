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

  // 4. Modal Interactivo de Recarga Rápida
  const modalOverlay = document.getElementById('rechargeModal');
  const modalCloseBtn = document.getElementById('closeModalBtn');
  const modalGameTitle = document.getElementById('modalGameTitle');
  const rechargeBtns = document.querySelectorAll('.btn-recharge');
  const pkgOptions = document.querySelectorAll('.package-option');
  const modalTotal = document.getElementById('modalTotal');
  const confirmOrderBtn = document.getElementById('confirmOrderBtn');
  const playerIdInput = document.getElementById('playerIdInput');

  if (modalOverlay) {
    // Abrir modal con datos del juego seleccionado
    rechargeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const card = btn.closest('.game-card');
        const title = card ? card.querySelector('.game-title').textContent : 'Juego';
        
        if (modalGameTitle) {
          modalGameTitle.textContent = `Recarga para ${title}`;
        }
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

    // Selección de paquetes
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

        confirmOrderBtn.textContent = '⏳ Procesando recarga...';
        confirmOrderBtn.disabled = true;

        setTimeout(() => {
          alert(`🎉 ¡Éxito! Tu orden para el ID [${idVal}] ha sido procesada de forma segura. Recibirás tu recarga en menos de 60 segundos.`);
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
});
