let body = document.querySelector('body');
body.addEventListener('click', function(evt) {
  let parent = evt.target.parentElement;
  // console.log(evt.target);
  if ((evt.target.nodeName === 'IMG' && parent.nodeName === 'DIV')) {
    parent.classList.toggle('active');
  }
});
