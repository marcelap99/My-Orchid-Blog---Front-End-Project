
//grab elements needed
let sideBar = document.getElementById("mySidebar");
//toggle to animate and open / close
document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "activateAnimation" );
    sideBar.classList.toggle("openNav");

  });
