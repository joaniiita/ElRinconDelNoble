/* Expande/colapsa cada tarjeta como en tu referencia */
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.toggle');
    if (!btn) return;

    const card = btn.closest('.dish-card');
    const desc = card.querySelector('.dish-desc');

    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpen));
    card.classList.toggle('is-open', !isOpen);


    document.addEventListener("DOMContentLoaded", () => {
        const dishCards = document.querySelectorAll('.dish-card');

        const dishObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('dish-visible');
                    }, index * 100);

                    dishObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        dishCards.forEach(card => {
            card.classList.add('dish-hidden');
            dishObserver.observe(card);
        });
    });
});

