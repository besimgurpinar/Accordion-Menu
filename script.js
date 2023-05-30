const accordionItems = document.querySelectorAll('.accordion-item');

function toggleAccordion() {
  const item = this.closest('.accordion-item');
  const content = item.querySelector('.accordion-content');
  const isOpen = item.classList.contains('active');

  accordionItems.forEach(item => {
    item.classList.remove('active');
    item.querySelector('.accordion-content').style.display = 'none';
  });

  if (!isOpen) {
    item.classList.add('active');
    content.style.display = 'block';
  }
}

accordionItems.forEach(item => {
  const toggle = item.querySelector('.accordion-toggle');
  toggle.addEventListener('click', toggleAccordion);
});