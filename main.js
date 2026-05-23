const card = document.getElementById('card');

const MAX_TILT = 10;

document.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const dx = (e.clientX - cx) / (window.innerWidth / 2);
  const dy = (e.clientY - cy) / (window.innerHeight / 2);

  const rotateX = -dy * MAX_TILT;
  const rotateY = dx * MAX_TILT;

  card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.015)`;
});

document.addEventListener('mouseleave', () => {
  card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
  card.style.transition = 'transform 0.5s ease';
});

document.addEventListener('mousemove', () => {
  card.style.transition = 'transform 0.1s ease';
});
