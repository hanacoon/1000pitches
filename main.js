window.onload=function(){
  let mainNav = document.getElementById('js-menu');
  let navBarToggle = document.getElementById('js-navbar-toggle');

  navBarToggle.addEventListener('click', function () {
      console.log("hi")
      mainNav.classList.toggle('active');
  });
}
