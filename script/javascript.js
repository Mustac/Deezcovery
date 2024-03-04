var navButton = document.getElementById("nav-expand-button");
var navLinks = document.getElementsByClassName("nav-links")[0];

navButton.addEventListener("click", () =>{
   if(navLinks.classList.contains("nav-links-hiden")){
    navLinks.classList.remove("nav-links-hiden");
   }
   else{
    navLinks.classList.add("nav-links-hiden");
   }
});