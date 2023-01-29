const menu_div = document.querySelector(".menu_div");
const enterInf = document.querySelector(".enter_main_div");

const getInformation = async () => {
    try {
        let users = await fetch('https://dummyjson.com/products?limit=10')
        .then(_=>_.json());
        users.products.forEach(info=>{
            console.log(info)
            console.log(info.id);
            menu_div.innerHTML=menu_div.innerHTML+
            `
            <section class="menu_section">
                <a href="enter.html"><div class="menu_section_div"><img src="${info.images[0]}" alt="latana"></div></a>
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
                        <div class="article_social_div ">
                            <img src="images/Like Icon.png" alt="like icon">
                            <img src="images/Comment Icon.png" alt="comment icon">
                            <img src="images/Share Icon.png" alt="share icon">
                        </div>
                    </div>
                </div>
                
            </section>
            `
            // enterInf.innerHTML=enterInf.innerHTML+
            // `
            // <h3 class="enter_main_title">${info.title}</h3>
            // `
            
        });
        
        
    } catch (error) {
        console.log(error);
    }
    
}

getInformation();




