// Don't remove this order, footer copyright function should be ontop, otherwise it won't work, because of the addEventListener availability!.
// * ================================
//  * FOOTER COPYRIGHT FUNCTION
//  * ================================

// Function to insert the copyright paragraph
function insertCopyright() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();
  
  // Create the paragraph element
  const copyrightParagraph = document.createElement('p');
  
  // Set the inner text with the current year
  copyrightParagraph.innerText = `Copyright © ${currentYear}. SummitPeak. All rights reserved.`;

  // Find the footer container (adjust the ID if needed)
  const footerContainer = document.getElementById('footer-copyright');

  // Insert the paragraph into the footer container
  if (footerContainer) {
    footerContainer.appendChild(copyrightParagraph);
  } else {
    console.error('Footer container not found!');
  }
}

window.addEventListener('DOMContentLoaded', function() {
  console.log("DOM content loaded, inserting copyright...");
  insertCopyright();  // Call the function to insert copyright
});


// * ================================
//  * HEADER
//  * ================================

// Function to initialize mobile menu functionality
function initMobileMenu() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const closeMenuButton = document.getElementById('close-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!mobileMenuButton || !closeMenuButton || !mobileMenu) {
    console.error('Mobile menu elements are missing!');
    return;
  }

  // Open mobile menu
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.replace('-translate-y-full', 'translate-y-0');
    document.body.style.overflow = 'hidden'; // Disable background scrolling
  });

  // Close mobile menu
  closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.replace('translate-y-0', '-translate-y-full');
    document.body.style.overflow = 'auto'; // Enable background scrolling
  });
}

// Wait for DOM content to be loaded before attaching event listeners
window.addEventListener('DOMContentLoaded', function() {
  console.log('DOM content loaded, initializing mobile menu...');
  initMobileMenu();
});


// * ================================
//  * HOME PAGE SECTION SIX & SERVICES PAGE SECTION THREE
//  * ================================

const projects = {
  peakdrive: {
    name: "PeakDrive",
    description: "A revolutionary cloud storage solution that optimizes file management and collaboration for businesses of all sizes. Features advanced security protocols and seamless integration capabilities.",
    desktopImage: "https://via.placeholder.com/600x400?text=PeakDrive+Desktop",
  },
  smarthealthconnect: {
    name: "SmartHealth Connect",
    description: "SmartHealth Connect is a cutting-edge digital platform that unifies patient records, telemedicine services, and healthcare providers into one seamless ecosystem. It enables real-time communication, improved patient care, and streamlined administrative processes, making healthcare more accessible and efficient.",
    desktopImage: "https://via.placeholder.com/600x400?text=SmartHealth+Connect+Desktop",
  },
  edupulse: {
    name: "EduPulse",
    description: "An innovative education management platform that connects students, teachers, and administrators. Featuring real-time analytics and personalized learning paths.",
    desktopImage: "https://via.placeholder.com/600x400?text=EduPulse+Desktop",
  },
  retailsync: {
    name: "RetailSync",
    description: "A comprehensive retail management solution that synchronizes inventory, sales, and customer data across multiple channels in real-time.",
    desktopImage: "https://via.placeholder.com/600x400?text=RetailSync+Desktop",
  },
  finguard: {
    name: "FinGuard",
    description: "Advanced financial security platform providing real-time fraud detection and prevention for financial institutions and their customers.",
    desktopImage: "https://via.placeholder.com/600x400?text=FinGuard+Desktop",
  }
};

const projectButtons = document.querySelectorAll('.project-btn');
const projectTitle = document.getElementById('project-title');
const projectDescription = document.getElementById('project-description');
const desktopImage = document.getElementById('desktop-image');

projectButtons.forEach(button => {
  button.addEventListener('click', () => {
    const projectId = button.getAttribute('data-project');
    const project = projects[projectId];

    projectButtons.forEach(btn => btn.classList.remove('active', 'bg-teal-50', 'text-teal-600', 'font-medium'));
    button.classList.add('active', 'bg-teal-50', 'text-teal-600', 'font-medium');

    projectTitle.textContent = project.name;
    projectDescription.textContent = project.description;
    desktopImage.src = project.desktopImage;
    desktopImage.alt = `${project.name} desktop view`;
  });
});

const slider = document.getElementById('testimonialSlider');
const slides = document.querySelectorAll('.testimonial-slide');
let currentSlide = 0;

function scrollToSlide(index) {
  const slideWidth = slides[0].offsetWidth;
  const scrollPosition = index * slideWidth;
  slider.scrollTo({
    left: scrollPosition,
    behavior: 'smooth'
  });
  currentSlide = index;
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    scrollToSlide(currentSlide + 1);
  } else {
    scrollToSlide(0);
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    scrollToSlide(currentSlide - 1);
  } else {
    scrollToSlide(slides.length - 1);
  }
}

// Handle touch events for mobile swipe
let touchStartX = 0;
let touchEndX = 0;

slider.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
}, false);

slider.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, false);

function handleSwipe() {
  if (touchEndX < touchStartX) {
    nextSlide();
  }
  if (touchEndX > touchStartX) {
    prevSlide();
  }
}

// Optional: Auto-advance slides every 7 seconds
setInterval(nextSlide, 7000);
