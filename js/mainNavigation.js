const main_ul_2 = document.getElementById("main_ul_2");
const main_ul_p = document.getElementById("main_ul_p");

function changeMain_ul_p(){
    if(main_ul_2.style.display=="none"){
        main_ul_2.style.display="block";
    }else{
        main_ul_2.style.display="none";
    }
}
main_ul_p.addEventListener("click", changeMain_ul_p);