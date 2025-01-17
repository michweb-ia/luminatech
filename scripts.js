document.addEventListener("DOMContentLoaded", () => {
    const ctaButtons = document.querySelectorAll('.cta a');
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert("Vous avez cliqué sur un bouton !");
        });
    });
});
