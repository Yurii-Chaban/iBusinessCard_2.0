$(document).ready(function() {
  function addPrevClass (e) {
    var target = e.target;
    if(target.getAttribute('src')) {
      var li = target.parentNode.parentNode;
      var prevLi = li.previousElementSibling;
      var nextLi = li.nextElementSibling;
      if(prevLi && nextLi) {
        prevLi.className = 'prev';
        nextLi.className = 'next';
      }
      
      target.addEventListener('mouseout', function() { 
        prevLi.removeAttribute('class');
        nextLi.removeAttribute('class');
      }, false);
    }
  }
  if (window.addEventListener) {
    document.getElementById("dock").addEventListener('mouseover', addPrevClass, false);
  }
});