const toggleButton = document.querySelector('.dark-light');
const colors = document.querySelectorAll('.color');
document.getElementById('scrollableDiv').addEventListener('scroll', function() {
document.getElementById('contentDiv').style.transform = 'rotateX(180deg) translateY(-' + this.scrollTop + 'px)';
});

colors.forEach(color => {
  color.addEventListener('click', e => {
    colors.forEach(c => c.classList.remove('selected'));
    const theme = color.getAttribute('data-color');
    document.body.setAttribute('data-theme', theme);
    color.classList.add('selected');
  });
});

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});