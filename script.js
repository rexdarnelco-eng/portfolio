document.addEventListener('DOMContentLoaded', () => {

    // ===== Scroll Reveal (Modern) =====
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    // Apply to all reveal elements
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });


    // ===== Page Navigation =====
    window.showPage = function(pageId) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

        // Show selected page
        const targetPage = document.getElementById(pageId);
        if (targetPage) targetPage.classList.add('active');

        // Reset nav colors
        document.querySelectorAll('.nav-content a').forEach(link => {
            link.style.color = 'var(--text-dim)';
        });

        // Highlight active nav
        const activeLink = Array.from(document.querySelectorAll('.nav-content a'))
            .find(a => a.getAttribute('onclick')?.includes(pageId));

        if (activeLink) activeLink.style.color = 'var(--accent-blue)';

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Reset animations
        document.querySelectorAll('.reveal').forEach(el => {
    el.classList.remove('active');
    observer.unobserve(el);   // reset
    observer.observe(el);     // observe again cleanly
});
    };

});