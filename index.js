let toggole_btn = document.getElementById("toggol-btn");
let left_var = document.querySelector(".left-sidenav");
toggole_btn.onclick = () =>{
   left_var.classList.toggle("active");
}