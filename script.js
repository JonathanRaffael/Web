// Inisialisasi AOS
const aos = AOS.init({
    duration: 1200, // durasi animasi 1.2 detik
    once: true // animasi hanya diputar sekali
  });
  
  // Smooth scroll untuk anchor links
  const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
  
  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({ top: targetElement.offsetTop, behavior: 'smooth' });
    });
  });