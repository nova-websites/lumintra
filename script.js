// script.js

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });



// Dynamically change colors if needed via JavaScript
const dynamicText = document.getElementById('dynamic-text');

// section 2

// script.js

// Select the scroll-box and the parent section
const scrollBox = document.querySelector('.scroll-box');
const section2 = document.getElementById('section2');

// Add an event listener for the scroll event
window.addEventListener('scroll', () => {
  // Get the bounding rectangle of the section relative to the viewport
  const rect = section2.getBoundingClientRect();

  // Calculate the position of the section
  const sectionInView = rect.top <= window.innerHeight && rect.bottom >= 0;

  if (sectionInView) {
    // If the section is in view, calculate the box's position
    const scrollPercentage = (window.innerHeight - rect.top) / window.innerHeight;

    // Clamp the scroll percentage between 0 and 1
    const clampedPercentage = Math.min(Math.max(scrollPercentage, 0), 1);

    // Calculate the vertical position of the box
    const boxOffset = (1 - clampedPercentage) * 50; // Adjust this multiplier for smoothness

    // Apply the transform to make the box slide
    scrollBox.style.transform = `translateY(${boxOffset}vh)`;
    scrollBox.style.opacity = 1; // Ensure the box is visible when scrolling
  } else {
    // Hide the box when it's outside the viewport
    scrollBox.style.opacity = 0;
  }
});

// section 2 ends

// section 3

// script.js

const carousel = document.querySelector('.carousel');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

// Define current scroll position
let scrollPosition = 0;

// Define the width of one carousel item (including margins)
const carouselItemWidth = document.querySelector('.carousel-item').offsetWidth;

// Event listener for right button
rightBtn.addEventListener('click', () => {
  // Move carousel to the right
  scrollPosition -= carouselItemWidth;
  carousel.style.transform = `translateX(${scrollPosition}px)`;

  // Limit to prevent overscrolling
  if (Math.abs(scrollPosition) >= carousel.scrollWidth - carousel.offsetWidth) {
    scrollPosition = -(carousel.scrollWidth - carousel.offsetWidth);
  }
});

// Event listener for left button
leftBtn.addEventListener('click', () => {
  // Move carousel to the left
  scrollPosition += carouselItemWidth;
  carousel.style.transform = `translateX(${scrollPosition}px)`;

  // Limit to prevent overscrolling
  if (scrollPosition > 0) {
    scrollPosition = 0;
  }
});



// section 3 ends

// section 6
// Section 6 Scroll Lock and Subsection Scrolling Logic
const section6 = document.querySelector('#section6');
const rightColumn = document.querySelector('.right-column');
const subsections = document.querySelectorAll('.right-column .subsection');

let currentSubsectionIndex = 0;
let isLocked = false;

window.addEventListener('wheel', (event) => {
  if (isSectionInView(section6)) {
    event.preventDefault();

    if (!isLocked) {
      // Lock scrolling while inside Section 6
      isLocked = true;
      if (event.deltaY > 0) {
        // Scroll down
        if (currentSubsectionIndex < subsections.length - 1) {
          currentSubsectionIndex++;
          scrollToSubsection(currentSubsectionIndex);
        } else {
          // Unlock and allow scrolling down to the next section
          isLocked = false;
        }
      } else {
        // Scroll up
        if (currentSubsectionIndex > 0) {
          currentSubsectionIndex--;
          scrollToSubsection(currentSubsectionIndex);
        } else {
          // Unlock and allow scrolling up to the previous section
          isLocked = false;
        }
      }
    }
  }
});

function scrollToSubsection(index) {
  subsections[index].scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
  setTimeout(() => {
    isLocked = false; // Re-enable scrolling after animation
  }, 800); // Match smooth scroll duration
}

function isSectionInView(section) {
  const rect = section.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

// nev bar
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show"); // Toggle visibility
});



