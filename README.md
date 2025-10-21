# Piriyajeishree Murali Naidu - Personal Portfolio Website

## Author
**Piriyajeishree Murali Naidu**  
Master of Science in Computer Science, Northeastern University

## Course
CS5610 - Web Development

## Deployment link
My site is live at https://piriyajeishree410.github.io/my-portfolio/

## Project Objective
Create a professional, responsive portfolio website showcasing my expertise as a DevOps Cloud Engineer while maintaining a personal touch. The site demonstrates technical skills, project experience, and personal interests through a clean, accessible design inspired by modern portfolio aesthetics.

## Screenshot
![Portfolio Website Screenshot](https://github.com/piriyajeishree410/my-portfolio/blob/main/images/Screenshot%20(202).png)

## Google Slides:
[Slides URL](https://docs.google.com/presentation/d/12NBSzUxM6Vz7atRAOQl87rGqvU5zJZut9bdrJkDf1Uc/edit?slide=id.p#slide=id.p)

## Features

### 🎯 Core Functionality
- **Three Distinct Pages:** Home, About Me, and Projects
- **Responsive Design:** Optimized for desktop, tablet, and mobile
- **Professional Presentation:** Clean layout showcasing DevOps and front-end skills
- **Interactive Elements:** Dynamic content with smooth animations

### 🎨 Design Features
- **Modern Aesthetic:** Inspired by Tamara Sredojevic's portfolio with pastel colors
- **Dark Mode Cards:** Enhanced contrast for skills and experience sections
- **Background Images:** Custom hero sections with overlay effects
- **Typography:** Inter font family for optimal readability

### ⚡ Technical Features
- **ES6 Modules:** Modular JavaScript architecture
- **Bootstrap 5 Grid System:** Responsive layout foundation
- **Vanilla JavaScript:** Custom interactive components
- **Accessibility Focused:** WCAG 2.1 AA compliant

### 🌟 Original Components
1. **Skill Visualization System** - Animated progress bars for technical skills
2. **Hobby Carousel** - Auto-rotating personal interests display
3. **Project Filtering** - Dynamic category-based project organization
4. **Flip Cards** - Interactive fun facts on About Me page
5. **Mouse-Trail** - Added a playful mouse trail effect that follows the cursor for an interactive touch.

## Project Structure
```
portfolio-website/
├── index.html
├── aboutme.html
├── projects.html
├── package.json
├── LICENSE
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── home.js
│   ├── about-me.js
│   └── projects.js
└── images/
    ├── profile-placeholder.jpg
    ├── hero-background.jpg
    ├── projects-background.jpg
    ├── about-me-background.jpg
    ├── pet-adoption-placeholder.jpg
    ├── sign-language-placeholder.jpg
    ├── cicd-placeholder.jpg
    ├── reading-placeholder.jpg
    ├── cooking-placeholder.jpg
    ├── travel-placeholder.jpg
    └── music-placeholder.jpg
```

## Technical Requirements Met

### ES6 Modules Implementation
```html
<script type="module" src="js/home.js"></script>
<script type="module" src="js/about-me.js"></script>
<script type="module" src="js/projects.js"></script>
```

```json
{
  "type": "module",
  "scripts": {
    "dev": "live-server --port=3000"
  }
}
```

### Original JavaScript Components
- **Skill Progress Animation** (15+ lines): Animated skill bars with Intersection Observer
- **Hobby Carousel** (40+ lines): Auto-rotating carousel with touch support
- **Project Filtering System** (25+ lines): Dynamic category-based filtering
- **Flip Card Interactions** (20+ lines): Touch and hover animations
- **Mouse-Trail**(25+ lines): Mouse trail effect that follows the cursor for an interactive touch

### Code Quality Standards
- **Prettier Formatted:** Consistent code styling throughout
- **W3C Compliant:** Validated HTML with no errors
- **ESLint Configured:** Custom .eslintrc.js with no errors
- **Semantic HTML:** Proper use of standard elements
- **Organized CSS:** BEM methodology without !important

### Accessibility & SEO
- **Meta Information:** Author, description, favicon
- **Image Alt Text:** Descriptive alt attributes for all images
- **Keyboard Navigation:** Full tab navigation support
- **Color Contrast:** WCAG 2.1 AA compliant ratios

## Installation & Setup

### Prerequisites
- Modern web browser with ES6 support

### Local Development
1. Download the project files
2. Open `index.html` in your web browser

## Pages Overview

### Homepage (`index.html`)
- Professional introduction with hero section
- Skills visualization with animated progress bars
- Work experience timeline
- Personal interests carousel
- Contact information

### Projects Page (`projects.html`)
- Filterable project gallery (Web Dev, AI/ML, DevOps)
- Interactive project cards with modal details
- Technology stack highlights
- Quantitative results presentation

### About Me Page (`about-me.html`) - AI Generated Page
- Core values presentation
- Interactive flip cards for fun facts
- Hobbies showcase gallery
- Personal favorites section
- Closing philosophy statement

#### Prompt given to generate the page was:
I have created a portfolio site showcasing my technical skills. I wanted to create another page that will be linked to my homepage with your help. My site has an index page that includes sections like hero, skills, experience, and hobbies. The navigation bar at the top has a reference to go to my projects page. The projects page has a list of my projects, which can also be filtered. With the wireframe given to you, can you help me create a new page with the same styling? Provide a few ideas that can be integrated.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Generative AI Usage

### Models and Versions
- **OpenAI GPT-4** (Latest version as of December 2024)

### Implementation Areas
#### 1. Design Enhancement
**Prompt:** "Help me improve the color scheme for better contrast."

**Usage:** Refined color palette.

#### 4. Content Organization for the last AI-generated page
**Prompt:** "Structure the About Me page with core values, flip cards for fun facts, and a hobbies gallery."

**Usage:** Created engaging content layouts with interactive elements.
