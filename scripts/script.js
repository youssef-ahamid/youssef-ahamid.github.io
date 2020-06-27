
$(document).ready(function(){
    $(window).scroll(function() { // check if scroll event happened
    var currentPos = $(window).scrollTop();
   if (currentPos > 200) { // check if user scrolled more than 50 from top of the browser window
        $("nav").css("background-color", "#1a1a1a"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
    } else {
        $("nav").css("background-color", "transparent"); // if not, change it back to transparent
      }
    });
  });

  var sidenavTrigger =  document.getElementById("open-menu");

  sidenavTrigger.addEventListener('click', () => {
    var sidenav = document.getElementById("sidenav");
    if(sidenav.style.display == '' || sidenav.style.display == 'none'){
      sidenav.style.display ='initial';
      sidenavTrigger.src = "exit.png";
    } else{
      sidenav.style.display = 'none';
      sidenavTrigger.src = "menu-icon.png";
    }
  });

  var social = document.getElementById("social");
  var socialTitle = document.getElementById("socialTitle");

  social.addEventListener('mouseenter', () => {
    socialTitle.innerHTML = "Socially Awkward";
  })
  social.addEventListener('mouseleave', () => {
    socialTitle.innerHTML = "Social";
  })
console.log("Want to see how everything on this website was made? Check out my github!")

