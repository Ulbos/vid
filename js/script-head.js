(function () {
    const header = document.querySelector('.header');
   window.onscroll = () => {
       if (window.pageYOffset > 50) {
           header.classList.add('header_active')
       }else {
                    header.classList.remove('header_active');
            }
   };


}());



var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('toggle');
});