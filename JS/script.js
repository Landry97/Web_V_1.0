var mouseTarget = document.getElementById('mouseTarget')
var info1 = document.getElementById('project-info1')
var info2 = document.getElementById('project-info2')
var info3 = document.getElementById('project-info3')
var info4 = document.getElementById('project-info4')
var info5 = document.getElementById('project-info5')
var main = document.getElementsByTagName("main")
var header = document.getElementsByTagName("header")
var border = document.getElementsByTagName("figure")

mouseTarget.addEventListener('mouseenter', function(){
 border.style.border = "1px solid black";
 info1.style.opacity = "1";
 info2.style.opacity = "1";
 info3.style.opacity = "1";
 info4.style.opacity = "1";
 info5.style.opacity = "1";
 body.style.background = "red";
 body.style.color = "black";
 main.style.background = "red";
 header.style.backgroundColor = "red";
 document.documentElement = "red";
})

mouseTarget.addEventListener('mouseleave', function(){
 border.style.border = "";
 info1.style.opacity = "";
 info2.style.opacity = "";
 info3.style.opacity = "";
 info4.style.opacity = "";
 info5.style.opacity = "";
 body.style.background = "";
 body.style.color = "";
 main.style.background = "";
 header.style.backgroundColor = "";
 document.documentElement = "";
})
function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById('menu-toggle').style.display = 'flex';
  } else {
    document.getElementById('menu-toggle').style.display = 'none';
  }
}

var x = window.matchMedia("(max-width: 950px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes 

// MENU____ CLICK -> SHOW________________________________________________________________
const menu = document.getElementById('menu-toggle');
const menupoint = document.getElementById('menupointid');
const navUL = document.getElementById('nav-ul');
const navMenu = document.getElementById('navMenu');
const address = document.getElementById('address');
const body = document.getElementById('bodyid');

menu.addEventListener('click', () => {
      navMenu.classList.toggle('show');
      navUL.classList.toggle('show');
      address.classList.toggle('show');
      body.classList.toggle('show');
      menu.classList.toggle('show');
      menupoint.classList.toggle('show');
}); 


//TO TOP BUTTON (working buttom flex right corner start 15pixel)_________________________
//[Get the button:]
mybutton = document.getElementById("myBtn");
// [When the user scrolls down 20px from the top of the document, show the button]
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
     if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
       mybutton.style.display = "flex";} 
       else {
       mybutton.style.display = "none";}
   };
// [When the user clicks on the button, scroll to the top of the document]
function topFunction() {
 document.body.scrollTop = 0; // For Safari
 document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
