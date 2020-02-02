var hamburger = document.getElementById('nav-burger');
var linx = document.getElementById('main-nav-links');

hamburger.addEventListener('click', function(e){
  if (linx.classList.contains('show')) {
    linx.classList.remove('show');
  } else {
    linx.classList.add('show');
  }
})
function myFunction() {

}
