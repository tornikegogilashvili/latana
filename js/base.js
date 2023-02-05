const menu_div = document.querySelector(".menu_div");
let data =[];
const getInformation = async () => {
    try {
        let users = await fetch('https://dummyjson.com/products?limit=9')
        .then(_=>_.json())
        users.products.forEach(info=>{
            // console.log(info)
            // const id = info.id;
            // console.log(id)
            menu_div.innerHTML=menu_div.innerHTML+
            `
            <section class="menu_section" id="${info.id}">
                
                <div class="menu_section_div"><img src="${info.images[0]}" alt="latana"></div>
                <div class="menu_section_div_2">
                    <p class="menu_section_category">${info.category}</p>
                    <h3 class="menu_section_title">${info.title}</h3>
                    <p class="menu_section_text">${info.description}</p>
                    <p></p>
                    <div class="streightline">
                        <div class= "article_latestnews_div_person">
                            <img src="images/profile_photo.jpg" alt="profile picture">
                            <div class="article_latestnews_div_name">
                                <p class="article_latestnews_name">George Thomas</p>
                                <p class="article_latestnews_date">22.01.1996</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
              
            </section>
            `
            
        
        })   
            const section = document.querySelectorAll(".menu_section");

        section.forEach(e=>{
            e.addEventListener("click",()=>{
                console.log(e.id);
                menu_div.innerHTML="";

                menu_div.innerHTML=menu_div.innerHTML+ 
                `
                <div class="enter_main_div" id="enter_main_div">
                    <h3 class="enter_main_title">${users.products[e.id-1].title}</h3>
                        
                    <p class="enter_main_text">${users.products[e.id-1].description}</p>
                       <div class= "article_latestnews_div_person">
                            <img src="images/profile_photo.jpg" alt="profile picture">
                            <div class="article_latestnews_div_name">
                                <p class="article_latestnews_name">George Thomas</p>
                                <p class="article_latestnews_date">22.01.1996</p>
                            </div>
                        </div>
                    <div class="enter_main_img_div"><img class="enter_main_img" src="${users.products[e.id-1].images[0]}" alt="latana"></div>
                    <p class="enter_main_text">${users.products[e.id-1].description}</p>
                    <div class="enter_main_little_div">
                        <img class="enter_main_little_img" src="${users.products[e.id-1].images[1]}" alt="latana">
                        <img class="enter_main_little_img" src="${users.products[e.id-1].images[2]}" alt="latana">
                    </div>
                    <p class="enter_main_text">${users.products[e.id-1].description}</p>
                </div>
                `
            }) 
        });
    
        
    } catch (error) {
        console.log(error);
    }
    
}

getInformation();



