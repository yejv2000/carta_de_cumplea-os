const envelope = document.getElementById('envelope');
const heartsContainer = document.getElementById('hearts');
let opened = false;
const mensajeInicial = document.getElementById('mensaje-inicial');

envelope.addEventListener('click', () => {
  if (opened) return;
  envelope.classList.add('open');
  opened = true;
  if (mensajeInicial) mensajeInicial.classList.add('hide');
  // Lanzar corazones
  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      createHeart();
    }, i * 120);
  }
  // Desaparecer el sobre después de la animación
  setTimeout(() => {
    envelope.classList.add('hide');
  }, 900);
});

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  const colors = ['#e75480', '#ffb6c1', '#ff69b4', '#ff1493', '#db7093'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  heart.style.left = `${Math.random() * 120 - 60}px`;
  heart.style.animationDelay = `${Math.random() * 0.3}s`;
  heart.innerHTML = `
    <svg viewBox="0 0 32 32">
      <path d="M16 29s-13-8.35-13-16.5A7.5 7.5 0 0 1 16 5a7.5 7.5 0 0 1 13 7.5C29 20.65 16 29 16 29z" fill="${color}"/>
    </svg>
  `;
  heartsContainer.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 1600);

}