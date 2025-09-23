// About Me page specific functionality
import '../js/main.js';

document.addEventListener('DOMContentLoaded', function() {
    // Flip card functionality for touch devices
    const flipCards = document.querySelectorAll('.flip-card');
    
    flipCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.classList.toggle('flipped');
        });
    });
    
    // Add CSS class for touch device support
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .flip-card.flipped .flip-card-inner {
                transform: rotateY(180deg);
            }
        }
    `;
    document.head.appendChild(style);
});