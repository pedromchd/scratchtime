let main = document.querySelector('main');
main.addEventListener('click', function(evt) {
  let parent = evt.target.parentElement;
  // console.log(evt.target);
  if ((evt.target.nodeName === 'IMG' && parent.nodeName === 'DIV')) {
    parent.classList.toggle('active');
  }
});
