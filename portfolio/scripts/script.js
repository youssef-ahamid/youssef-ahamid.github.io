
var all_elements = [document.getElementById("about"), document.getElementById("projects"), document.getElementById("contact")]  
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


