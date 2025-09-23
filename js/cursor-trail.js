// Simple floating emoji cursor trail
document.addEventListener('DOMContentLoaded', function() {
    const emojis = ['💻', '☁️', '⚡', '🎨', '🎵', '📝'];
    let emojiElements = [];
    
    document.addEventListener('mousemove', function(e) {
        // Create new emoji every 10 mouse moves
        if (emojiElements.length < 15 && Math.random() > 0.9) {
            createEmoji(e.clientX, e.clientY);
        }
    });
    
    function createEmoji(x, y) {
        const emoji = document.createElement('div');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = 'fixed';
        emoji.style.left = x + 'px';
        emoji.style.top = y + 'px';
        emoji.style.fontSize = '20px';
        emoji.style.pointerEvents = 'none';
        emoji.style.zIndex = '9999';
        emoji.style.opacity = '0.7';
        emoji.style.transition = 'all 1s ease-out';
        
        document.body.appendChild(emoji);
        emojiElements.push(emoji);
        
        // Animate and remove
        setTimeout(() => {
            emoji.style.transform = 'translateY(-30px) scale(0.5)';
            emoji.style.opacity = '0';
        }, 100);
        
        setTimeout(() => {
            document.body.removeChild(emoji);
            emojiElements = emojiElements.filter(e => e !== emoji);
        }, 1100);
    }
});