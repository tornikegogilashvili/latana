let navbar = ["home", "menu", "blog", "our story"];
let navlink = ["index.html", "menu.html", "blog.html", "ourstory.html"];
let navText = "<ul>";
for(let i=0; i<navbar.length;i++){
    navText+="<li><a href="+navlink[i]+">"+navbar[i]+"</a></li>";  
}
navText+="</ul>";
console.log(navText);
document.getElementById("navigation").innerHTML=navText;