/**
 * Add class to Header on Scroll
 */
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  if (!header) return;
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

console.log('dddd');



/**
 * Smooth scroll to anchor links on the page
 */
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.js-anchor').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);

            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                document.body.classList.remove('menu-opened');
            }
        });
    });
});

/**
 * Download PDF
 */
document.querySelectorAll('.js-download-pdf').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const pdfUrl = this.getAttribute('data-pdf-url');
    if (pdfUrl) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = '';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  });
});

/**
 * Accordion Functionality
 */
const accordionHeaders = document.querySelectorAll('.js-accordion-btn');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const open = header.classList.contains('active');

    document.querySelectorAll('.js-accordion-content').forEach(c => {
      c.style.height = 0;
      c.previousElementSibling.classList.remove('active');
    });

    if (!open) {
      header.classList.add('active');
      content.style.height = content.scrollHeight + 'px';
    }
  });
});

/**
 * Modal Functionality
 */
document.querySelectorAll('.js-modal-open').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const modalPdf = this.getAttribute('data-url-pdf'),
          modalImg = this.getAttribute('data-img-url'),
          modal = document.querySelector('.js-modal');
    if (modal) {
      modal.classList.add('active');
      modal.querySelector('.js-modal-img').src = modalImg;
      modal.querySelector('.js-download-pdf').dataset.dataPdfUrl = modalPdf;
      document.body.classList.add('modal-open');
    }
  });
});

document.querySelectorAll('.js-modal-close').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const modal = this.closest('.modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
    }
  });
});

// Close modal when clicking outside modal content
document.querySelectorAll('.js-modal').forEach(modal => {
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
    }
  });
});

