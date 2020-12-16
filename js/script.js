let body = document.querySelector('body');
body.addEventListener('click', function(evt) {
  let parent = evt.target.parentElement;
  // console.log(evt.target);
  if ((evt.target.nodeName === 'DIV' && parent.nodeName === 'MAIN')) {
    evt.target.classList.toggle('active');
  } else if (evt.target.nodeName === 'H1' && parent.nodeName === 'DIV') {
    parent.classList.toggle('active');
  }
});
