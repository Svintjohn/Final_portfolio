document.addEventListener('DOMContentLoaded', () => {

  // 0. DOST-STYLE INTRO ANIMATION HANDLER
  const introOverlay = document.getElementById('intro-overlay');
  if (introOverlay) {
    // The CSS revealIntro animation runs for 2.8s. 
    // We add the 'intro-hidden' class to fade it out right as the animation finishes.
    setTimeout(() => {
      introOverlay.classList.add('intro-hidden');
      // Completely remove the element from the DOM after the fade-out transition (1s)
      setTimeout(() => {
        introOverlay.remove();
      }, 1000); 
    }, 2800);
  }
  
  // 1. DYNAMIC SPOTLIGHT BACKGROUND 
  const spotlight = document.getElementById('spotlight');
  
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    // Updates the radial gradient center to follow the mouse
    spotlight.style.background = `radial-gradient(600px circle at ${x}px ${y}px, var(--accent-glow), transparent 80%)`;
  });

  // 2. INTERSECTION OBSERVER FOR NAVIGATION ACTIVE STATE
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  const navObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3 // Triggers when 30% of the section is visible
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        
        const id = entry.target.getAttribute('id');
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }, navObserverOptions);

  sections.forEach(section => navObserver.observe(section));

  // 3. SKILL BAR ANIMATION OBSERVER
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => skillObserver.observe(bar));

  // 4. EMAILJS INTEGRATION
  if (window.emailjs) {
    emailjs.init("2t4XGdhJvRDl_u6j7"); // Your Public Key

    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); 
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        const name = nameInput.value.replace(/['"]/g, '').trim(); 
        const email = emailInput.value.replace(/['"]/g, '').trim(); 
        const message = messageInput.value.replace(/['"]/g, '').trim();

        if (!name || !email || !message) { 
          alert('System Error: Please define all variables before execution.');
          return;
        }

        const btn = document.querySelector('.submit-btn');
        const originalText = btn.textContent;
        btn.textContent = 'executing...';

        emailjs.sendForm('service_1kw4ov9', 'template_6qxaej9', this)
          .then(() => {
            alert("Query executed successfully. Message delivered to inbox."); 
            this.reset();
            btn.textContent = originalText;
          })
          .catch((error) => {
            console.error('EmailJS Error:', error); 
            alert('Fatal Error: Execution failed. Please use native email client.');
            btn.textContent = originalText;
          });
      });
    }
  }
});