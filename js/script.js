let body = document.querySelector('body');
body.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('arrow')) {
    let div = evt.target.parentElement;
    div.classList.toggle('active');
  }
});
