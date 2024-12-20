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

window.addEventListener('DOMContentLoaded', function () {
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
window.addEventListener('DOMContentLoaded', function () {
  console.log('DOM content loaded, initializing mobile menu...');
  initMobileMenu();
});


// * ================================
//  * HOME PAGE SECTION SIX & SERVICES PAGE SECTION THREE
//  * ================================

const projects = {
  education: {
    name: "Education",
    description: "Empower Educators and Learners with Innovative eLearning Solutions. Unlock personalized learning experiences and streamlined operations for your institution. At SummitPeak, our expert team helps develop customized eLearning applications, integrating cutting-edge technology and pedagogical expertise to create engaging, effective, and easy-to-use solutions.",
    desktopImage: "https://via.placeholder.com/600x400?text=Education+Desktop",
  },
  healthCare: {
    name: "Health Care",
    description: "Experience the Future of Healthcare with Our Innovative Solutions. Elevate patient care, simplify administrative tasks, and transform your healthcare organization into a model of efficiency and excellence.",
    desktopImage: "https://via.placeholder.com/600x400?text=Health+Care+Desktop",
  },
  bfsi: {
    name: "BFSI",
    description: "Future-Proof Your Banking Institution with Advanced Solutions. Provide customers with seamless, secure transactions and empower your teams to drive growth, innovation, and excellence in the ever-changing world of finance.",
    desktopImage: "https://via.placeholder.com/600x400?text=BFSI+Desktop",
  },
  hosting: {
    name: "Hosting",
    description: "Let Us Handle Hosting, So You Can Focus on Growth. Our team of experts takes care of your hosting requirements, freeing you to focus on your core business.",
    desktopImage: "https://via.placeholder.com/600x400?text=Hosting+Desktop",
  },
  media: {
    name: "Media",
    description: "Transform the Entertainment Landscape with Innovative Solutions. We design and develop media and entertainment applications that exceed customer expectations and set you apart from the competition",
    desktopImage: "https://via.placeholder.com/600x400?text=Media+Desktop",
  },
  startUp: {
    name: "StartUp",
    description: "Achieve App Excellence through Agile Development and Market Focus. Our teams prioritize continuous delivery of value, ensuring your app stays relevant, meets user needs, and drives business results.",
    desktopImage: "https://via.placeholder.com/600x400?text=StartUp+Desktop",
  },
  ecommerce: {
    name: "E-commerce",
    description: "Create Digital Shopping Experiences that Drive Business Success. Our solutions enable you to optimize operations, develop revenue-boosting strategies, and provide your customers with unparalleled service.",
    desktopImage: "https://via.placeholder.com/600x400?text=E-commerce+Desktop",
  }
};

// Elements
const projectButtons = document.querySelectorAll('.project-btn');
const projectTitle = document.getElementById('project-title');
const projectDescription = document.getElementById('project-description');
const desktopImage = document.getElementById('desktop-image');

// Update project content
const updateProjectDetails = (projectId) => {
  console.log('projectID', projectId)
  const project = projects[projectId];
  if (project) {
    // Update active button styling
    projectButtons.forEach(btn => btn.classList.remove('active', 'bg-teal-50', 'text-teal-600', 'font-medium'));
    document.querySelector(`[data-project="${projectId}"]`).classList.add('active', 'bg-teal-50', 'text-teal-600', 'font-medium');

    // Update text content
    projectTitle.textContent = project.name;
    projectDescription.textContent = project.description;

    // Update image src and alt
    desktopImage.setAttribute('src', project.desktopImage);
    desktopImage.setAttribute('alt', `${project.name} desktop view`);
    console.log(`Image src updated to: ${project.desktopImage}`);

  } else {
    console.error(`Project ID "${projectId}" not found.`);
  }
};

// Event listeners
projectButtons.forEach(button => {
  button.addEventListener('click', () => {
    const projectId = button.getAttribute('data-project');
    updateProjectDetails(projectId);
  });
});

// Initialize with default project
document.addEventListener('DOMContentLoaded', () => {
  updateProjectDetails('education');
});



// * ================================
//  * HOME PAGE SECTION SEVEN & SERVICES PAGE SECTION FOUR
//  * ================================



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
// setInterval(nextSlide, 7000);
