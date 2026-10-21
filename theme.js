function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  // Add some sparkles when switching!
  createSparkles();
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
}

function createSparkles() {
  const ball = document.querySelector('.pokeball');
  for (let i = 0; i < 8; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';

    // Random position around the ball
    const angle = Math.random() * Math.PI * 2;
    const dist = 20 + Math.random() * 20;
    const x = Math.cos(angle) * dist;
    const y = Math.sin(angle) * dist;

    sparkle.style.left = `calc(50% + ${x}px)`;
    sparkle.style.top = `calc(50% + ${y}px)`;
    sparkle.style.animationDelay = `${Math.random() * 0.5}s`;

    document.querySelector('.theme-toggle').appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1500);
  }
}
