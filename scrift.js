const btnNo = document.getElementById('btnNo');

btnNo.addEventListener('mouseover', function () {
  const i = Math.floor(Math.random() * window.innerWidth - 100);
  const j = Math.floor(Math.random() * window.innerHeight - 40);
  btnNo.style.position = 'absolute';
  btnNo.style.left = i + 'px';
  btnNo.style.top = j + 'px';
});
