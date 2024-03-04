var navButton = document.getElementById("nav-expand-button");
var navLinks = document.getElementsByClassName("nav-links")[0];
var btnImageNavBar = document.getElementById("nav-expand-button");

navButton.addEventListener("click", () =>{
   if(navLinks.classList.contains("nav-links-hiden")){
       navLinks.classList.remove("nav-links-hiden");
       btnImageNavBar.classList.add("nav-button-active");
    }
    else{
        btnImageNavBar.classList.remove("nav-button-active");
    navLinks.classList.add("nav-links-hiden");
   }
});