let body = document.querySelector('body');
body.addEventListener('click', function(evt) {
  let parent = evt.target.parentElement;
  console.log(parent);
  if (evt.target.nodeName === 'DIV' && parent.nodeName === 'MAIN') {
    evt.target.classList.toggle('active');
  }
});
