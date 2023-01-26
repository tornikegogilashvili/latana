let navbar = ["home", "menu", "blog", "our story"];
let navlink = ["index.html", "menu.html", "blog.html", "ourstory.html"];
let navText = "<ul>";
for(let i=0; i<navbar.length;i++){
    navText+="<li><a href="+navlink[i]+">"+navbar[i]+"</a></li>";  
}
navText+="</ul>";
console.log(navText);
document.getElementById("navigation").innerHTML=navText;


let secondNavigation = document.getElementById("secondNavigation");
let navigation = document.getElementById("navigation");
let header = document.getElementById("header");
let bar = document.getElementById("fa-bars-icon");
secondNavigation.innerHTML=navText;

function changeBar() {
    if(secondNavigation.style.display=="none"){
        secondNavigation.style.display="flex";
    }else{
        secondNavigation.style.display="none";
    }
}
bar.addEventListener("click", changeBar)
