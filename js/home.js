// Home page specific functionality
import '../js/main.js';

document.addEventListener('DOMContentLoaded', function() {
    // Skill visualization animation
    const skillBars = document.querySelectorAll('.skill-progress');
    
    // Create skill bars if they don't exist
    const skillsContainer = document.querySelector('.skills-grid');
    if (skillsContainer && !document.querySelector('.skill-visualization')) {
        const skillVisualization = document.createElement('div');
        skillVisualization.className = 'skill-visualization';
        
        const skillsData = [
            { name: 'AWS Cloud', level: 90 },
            { name: 'CI/CD Pipelines', level: 85 },
            { name: 'JavaScript/Node.js', level: 80 },
            { name: 'Python', level: 85 },
            { name: 'React/Next.js', level: 75 },
            { name: 'Docker/Kubernetes', level: 70 }
        ];
        
        skillsData.forEach(skill => {
            const skillBar = document.createElement('div');
            skillBar.className = 'skill-bar';
            
            skillBar.innerHTML = `
                <div class="skill-name">
                    <span>${skill.name}</span>
                    <span>${skill.level}%</span>
                </div>
                <div class="skill-level">
                    <div class="skill-progress" data-level="${skill.level}"></div>
                </div>
            `;
            
            skillVisualization.appendChild(skillBar);
        });
        
        skillsContainer.parentNode.insertBefore(skillVisualization, skillsContainer);
    }
    
    // Animate skill bars when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    const level = bar.getAttribute('data-level');
                    bar.style.width = `${level}%`;
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const skillViz = document.querySelector('.skill-visualization');
    if (skillViz) {
        observer.observe(skillViz);
    }
    
    // Hobby carousel functionality (original component)
    const hobbies = [
        {
            icon: '🎨',
            title: 'Doodling & Sketching',
            description: 'Expressing creativity through pencil sketches and digital art'
        },
        {
            icon: '🎵',
            title: 'Carnatic Singing',
            description: 'Practicing and performing traditional Indian classical music'
        },
        {
            icon: '👩‍🍳',
            title: 'Cooking',
            description: 'Experimenting with flavors and creating delicious meals'
        },
        {
            icon: '📝',
            title: 'Journaling',
            description: 'Documenting thoughts, ideas, and experiences through writing'
        }
    ];
    
    // Create hobby carousel if it doesn't exist
    const hobbiesSection = document.querySelector('.hobbies-section .row');
    if (hobbiesSection && !document.querySelector('.hobby-carousel')) {
        const carouselContainer = document.createElement('div');
        carouselContainer.className = 'hobby-carousel-container';
        carouselContainer.innerHTML = `
            <div class="hobby-carousel">
                <div class="carousel-inner"></div>
                <button class="carousel-control prev">❮</button>
                <button class="carousel-control next">❯</button>
                <div class="carousel-indicators"></div>
            </div>
        `;
        
        hobbiesSection.innerHTML = '';
        hobbiesSection.appendChild(carouselContainer);
        
        const carouselInner = carouselContainer.querySelector('.carousel-inner');
        const indicatorsContainer = carouselContainer.querySelector('.carousel-indicators');
        
        // Add hobby items to carousel
        hobbies.forEach((hobby, index) => {
            const hobbyItem = document.createElement('div');
            hobbyItem.className = `hobby-carousel-item ${index === 0 ? 'active' : ''}`;
            hobbyItem.innerHTML = `
                <div class="hobby-icon">${hobby.icon}</div>
                <h3>${hobby.title}</h3>
                <p>${hobby.description}</p>
            `;
            carouselInner.appendChild(hobbyItem);
            
            // Add indicator
            const indicator = document.createElement('button');
            indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
            indicator.setAttribute('data-index', index);
            indicatorsContainer.appendChild(indicator);
        });
        
        // Carousel functionality
        let currentIndex = 0;
        const items = carouselInner.querySelectorAll('.hobby-carousel-item');
        const indicators = indicatorsContainer.querySelectorAll('.indicator');
        const prevBtn = carouselContainer.querySelector('.prev');
        const nextBtn = carouselContainer.querySelector('.next');
        
        function updateCarousel() {
            items.forEach((item, index) => {
                item.classList.remove('active');
                indicators[index].classList.remove('active');
                
                if (index === currentIndex) {
                    item.classList.add('active');
                    indicators[index].classList.add('active');
                }
            });
        }
        
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateCarousel();
        });
        
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        });
        
        // Auto-advance carousel
        setInterval(() => {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        }, 5000);
        
        // Add CSS for carousel
        const style = document.createElement('style');
        style.textContent = `
            .hobby-carousel-container {
                position: relative;
                max-width: 600px;
                margin: 0 auto;
            }
            
            .hobby-carousel {
                position: relative;
                overflow: hidden;
                border-radius: 10px;
                background: white;
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            }
            
            .hobby-carousel-item {
                display: none;
                padding: 2rem;
                text-align: center;
            }
            
            .hobby-carousel-item.active {
                display: block;
                animation: fadeIn 0.5s;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            .carousel-control {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                background: rgba(108, 99, 255, 0.7);
                border: none;
                color: white;
                padding: 0.5rem;
                cursor: pointer;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                z-index: 10;
            }
            
            .carousel-control.prev {
                left: 10px;
            }
            
            .carousel-control.next {
                right: 10px;
            }
            
            .carousel-indicators {
                display: flex;
                justify-content: center;
                padding: 1rem;
                gap: 0.5rem;
            }
            
            .indicator {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                border: none;
                background: #ddd;
                cursor: pointer;
            }
            
            .indicator.active {
                background: var(--primary-color);
            }
        `;
        document.head.appendChild(style);
    }
});