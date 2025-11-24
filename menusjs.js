
    /* Expande/colapsa cada tarjeta como en tu referencia */
    document.addEventListener('click', (e) => {
    const btn = e.target.closest('.toggle');
    if (!btn) return;

    const card = btn.closest('.dish-card');
    const desc = card.querySelector('.dish-desc');

    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpen));
    card.classList.toggle('is-open', !isOpen);
});

