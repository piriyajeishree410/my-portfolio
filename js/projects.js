// Projects page specific functionality
import '../js/main.js';

document.addEventListener('DOMContentLoaded', function() {
    // Project filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Add animation styles for filtering
    const style = document.createElement('style');
    style.textContent = `
        .project-card {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);
    
    // Project detail modal functionality
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            const tech = this.querySelector('.project-tech').textContent;
            const description = this.querySelector('.project-description').textContent;
            
            // Create modal
            const modal = document.createElement('div');
            modal.className = 'project-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <h2>${title}</h2>
                    <p class="modal-tech">${tech}</p>
                    <p>${description}</p>
                    <div class="modal-features">
                        ${this.querySelector('.project-features').innerHTML}
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Style the modal
            const modalStyle = document.createElement('style');
            modalStyle.textContent = `
                .project-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }
                
                .modal-content {
                    background: white;
                    padding: 2rem;
                    border-radius: 10px;
                    max-width: 600px;
                    width: 90%;
                    position: relative;
                }
                
                .close-modal {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    font-size: 1.5rem;
                    cursor: pointer;
                }
            `;
            document.head.appendChild(modalStyle);
            
            // Close modal functionality
            const closeModal = modal.querySelector('.close-modal');
            closeModal.addEventListener('click', () => {
                document.body.removeChild(modal);
                document.head.removeChild(modalStyle);
            });
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    document.body.removeChild(modal);
                    document.head.removeChild(modalStyle);
                }
            });
        });
    });
});