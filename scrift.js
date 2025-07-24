const btnNo = document.getElementById('btnNo');

btnNo.addEventListener('click', function () {
  const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
  const randomY = Math.floor(Math.random() * (window.innerHeight - 60));
  btnNo.style.position = 'absolute';
  btnNo.style.left = `${randomX}px`;
  btnNo.style.top = `${randomY}px`;
});
