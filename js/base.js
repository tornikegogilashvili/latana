const getInfo = async () => {
    
    try {
        const users = await fetch('https://dummyjson.com/products?limit=10&skip=10').then(_=>_.json())
        for(let i=0;i<users.products.length;i++){
            console.log(users.products[i].images[0]);
            // create section and its class---
            let section = document.createElement("section");

            let menu_main_div = document.getElementById("menu_main_div");

            section.classList.add("menu_main_section");

            menu_main_div.appendChild(section);

            let img = document.createElement("img");

            let menu_main_section = document.querySelector(".menu_main_section");

            menu_main_section.appendChild(img);

            img.src=users.products[i].images[0];

        }
        
        
        
    } catch (error) {
        console.log(error);
    }
}
getInfo();
