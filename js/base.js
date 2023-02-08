const menu_div = document.querySelector(".menu_div");
const index_html_main = document.querySelector(".index_html_main");


const getInformation = async (skip) => {
    try {
        let users = await fetch(`https://dummyjson.com/products?limit=9&skip=${skip}`)
        .then(_=>_.json())
        users.products.forEach(info=>{
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
                index_html_main.innerHTML="";
                if(e.id<10){
                index_html_main.innerHTML=index_html_main.innerHTML+ 
                `
                <nav id="secondNavigation" class="secondNavigation" style="display:none"></nav>
                
                <div class="menu_main_div" id="menu_main_div">
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
                
                <h2 class="base_h2">related news</h2>
                <div class="news_div ">
                    <article class="article_latestnews">
                        <div class="article_latestnews_div">
                            <img src="images/Group 4.png" alt="latana news">
                        </div>
                        <section class= "article_latestnews_section relative">
                                <p class="article_latestnews_p"><a href="#">lorem ipsum</a> </p>
                            <h2 class="article_latestnews_h2">Lorem ipsum dolor sit amet</h2>
                            <p class="article_latestnews_p_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique id neque, risus diam, nunc. Sit cras sed amet imperdiet quam est tortor. Nisl tortor, urna auctor neque morbi.</p>
                            <div class="streightline">
                                <div class= "article_latestnews_div_person">
                                    <img src="images/profile_photo.jpg" alt="profile picture">
                                    <div class="article_latestnews_div_name">
                                        <p class="article_latestnews_name">George Thomas</p>
                                        <p class="article_latestnews_date">22.01.1996</p>
                                    </div>
                                </div>
                                <div class="article_social_div">
                                    <img src="images/Like Icon.png" alt="like icon">
                                    <img src="images/Comment Icon.png" alt="comment icon">
                                    <img src="images/Share Icon.png" alt="share icon">
                                </div>
                            </div>
                        </section>
                        
                    </article>
                    <article class="article_latestnews">
                        <div class="article_latestnews_div">
                            <img src="images/Group 4 (1).png" alt="latana news">
                        </div>
                        <section class= "article_latestnews_section relative">
                                <p class="article_latestnews_p"><a href="#">lorem ipsum</a> </p>
                            <h2 class="article_latestnews_h2">Lorem ipsum dolor sit amet</h2>
                            <p class="article_latestnews_p_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique id neque, risus diam, nunc. Sit cras sed amet imperdiet quam est tortor. Nisl tortor, urna auctor neque morbi.</p>
                            <div class="streightline">
                                <div class= "article_latestnews_div_person">
                                <img src="images/profile_photo.jpg" alt="profile picture">
                                <div class="article_latestnews_div_name">
                                    <p class="article_latestnews_name">George Thomas</p>
                                    <p class="article_latestnews_date">22.01.1996</p>
                                </div>
                            </div>
                            <div class="article_social_div">
                                <img src="images/Like Icon.png" alt="like icon">
                                <img src="images/Comment Icon.png" alt="comment icon">
                                <img src="images/Share Icon.png" alt="share icon">
                            </div></div>
                            
                        </section>
                        
                    </article>
                    <article class="article_latestnews">
                        <div class="article_latestnews_div">
                            <img src="images/Group 4 (2).png" alt="latana news">
                        </div>
                        <section class= "article_latestnews_section relative">
                                <p class="article_latestnews_p"><a href="#">lorem ipsum</a> </p>
                            <h2 class="article_latestnews_h2">Lorem ipsum dolor sit amet</h2>
                            <p class="article_latestnews_p_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique id neque, risus diam, nunc. Sit cras sed amet imperdiet quam est tortor. Nisl tortor, urna auctor neque morbi.</p>
                            <div class="streightline">
                                <div class= "article_latestnews_div_person">
                                <img src="images/profile_photo.jpg" alt="profile picture">
                                <div class="article_latestnews_div_name">
                                    <p class="article_latestnews_name">George Thomas</p>
                                    <p class="article_latestnews_date">22.01.1996</p>
                                </div>
                            </div>
                            <div class="article_social_div">
                                <img src="images/Like Icon.png" alt="like icon">
                                <img src="images/Comment Icon.png" alt="comment icon">
                                <img src="images/Share Icon.png" alt="share icon">
                            </div></div>
                            
                        </section>
                        
                    </article>
                `}
                if(e.id>9&&e.id<19){
                    index_html_main.innerHTML=index_html_main.innerHTML+ 
                    `
                    <nav id="secondNavigation" class="secondNavigation" style="display:none"></nav>
                    
                    <div class="menu_main_div" id="menu_main_div">
                    <div class="enter_main_div" id="enter_main_div">
                        <h3 class="enter_main_title">${users.products[e.id-10].title}</h3>
                            
                        <p class="enter_main_text">${users.products[e.id-10].description}</p>
                           <div class= "article_latestnews_div_person">
                                <img src="images/profile_photo.jpg" alt="profile picture">
                                <div class="article_latestnews_div_name">
                                    <p class="article_latestnews_name">George Thomas</p>
                                    <p class="article_latestnews_date">22.01.1996</p>
                                </div>
                            </div>
                        <div class="enter_main_img_div"><img class="enter_main_img" src="${users.products[e.id-10].images[0]}" alt="latana"></div>
                        <p class="enter_main_text">${users.products[e.id-10].description}</p>
                        <div class="enter_main_little_div">
                            <img class="enter_main_little_img" src="${users.products[e.id-10].images[1]}" alt="latana">
                            <img class="enter_main_little_img" src="${users.products[e.id-10].images[2]}" alt="latana">
                        </div>
                        <p class="enter_main_text">${users.products[e.id-10].description}</p>
                    </div>
                    
                    <h2 class="base_h2">related news</h2>
                    <div class="news_div ">
                        <article class="article_latestnews">
                            <div class="article_latestnews_div">
                                <img src="images/Group 4.png" alt="latana news">
                            </div>
                            <section class= "article_latestnews_section relative">
                                    <p class="article_latestnews_p"><a href="#">lorem ipsum</a> </p>
                                <h2 class="article_latestnews_h2">Lorem ipsum dolor sit amet</h2>
                                <p class="article_latestnews_p_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique id neque, risus diam, nunc. Sit cras sed amet imperdiet quam est tortor. Nisl tortor, urna auctor neque morbi.</p>
                                <div class="streightline">
                                    <div class= "article_latestnews_div_person">
                                        <img src="images/profile_photo.jpg" alt="profile picture">
                                        <div class="article_latestnews_div_name">
                                            <p class="article_latestnews_name">George Thomas</p>
                                            <p class="article_latestnews_date">22.01.1996</p>
                                        </div>
                                    </div>
                                    <div class="article_social_div">
                                        <img src="images/Like Icon.png" alt="like icon">
                                        <img src="images/Comment Icon.png" alt="comment icon">
                                        <img src="images/Share Icon.png" alt="share icon">
                                    </div>
                                </div>
                            </section>
                            
                        </article>
                        <article class="article_latestnews">
                            <div class="article_latestnews_div">
                                <img src="images/Group 4 (1).png" alt="latana news">
                            </div>
                            <section class= "article_latestnews_section relative">
                                    <p class="article_latestnews_p"><a href="#">lorem ipsum</a> </p>
                                <h2 class="article_latestnews_h2">Lorem ipsum dolor sit amet</h2>
                                <p class="article_latestnews_p_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique id neque, risus diam, nunc. Sit cras sed amet imperdiet quam est tortor. Nisl tortor, urna auctor neque morbi.</p>
                                <div class="streightline">
                                    <div class= "article_latestnews_div_person">
                                    <img src="images/profile_photo.jpg" alt="profile picture">
                                    <div class="article_latestnews_div_name">
                                        <p class="article_latestnews_name">George Thomas</p>
                                        <p class="article_latestnews_date">22.01.1996</p>
                                    </div>
                                </div>
                                <div class="article_social_div">
                                    <img src="images/Like Icon.png" alt="like icon">
                                    <img src="images/Comment Icon.png" alt="comment icon">
                                    <img src="images/Share Icon.png" alt="share icon">
                                </div></div>
                                
                            </section>
                            
                        </article>
                        <article class="article_latestnews">
                            <div class="article_latestnews_div">
                                <img src="images/Group 4 (2).png" alt="latana news">
                            </div>
                            <section class= "article_latestnews_section relative">
                                    <p class="article_latestnews_p"><a href="#">lorem ipsum</a> </p>
                                <h2 class="article_latestnews_h2">Lorem ipsum dolor sit amet</h2>
                                <p class="article_latestnews_p_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique id neque, risus diam, nunc. Sit cras sed amet imperdiet quam est tortor. Nisl tortor, urna auctor neque morbi.</p>
                                <div class="streightline">
                                    <div class= "article_latestnews_div_person">
                                    <img src="images/profile_photo.jpg" alt="profile picture">
                                    <div class="article_latestnews_div_name">
                                        <p class="article_latestnews_name">George Thomas</p>
                                        <p class="article_latestnews_date">22.01.1996</p>
                                    </div>
                                </div>
                                <div class="article_social_div">
                                    <img src="images/Like Icon.png" alt="like icon">
                                    <img src="images/Comment Icon.png" alt="comment icon">
                                    <img src="images/Share Icon.png" alt="share icon">
                                </div></div>
                                
                            </section>
                            
                        </article>
                    `}
                    if(e.id>19&&e.id<29){
                        index_html_main.innerHTML=index_html_main.innerHTML+ 
                        `
                        <nav id="secondNavigation" class="secondNavigation" style="display:none"></nav>
                        
                        <div class="menu_main_div" id="menu_main_div">
                        <div class="enter_main_div" id="enter_main_div">
                            <h3 class="enter_main_title">${users.products[e.id-19].title}</h3>
                                
                            <p class="enter_main_text">${users.products[e.id-19].description}</p>
                               <div class= "article_latestnews_div_person">
                                    <img src="images/profile_photo.jpg" alt="profile picture">
                                    <div class="article_latestnews_div_name">
                                        <p class="article_latestnews_name">George Thomas</p>
                                        <p class="article_latestnews_date">22.01.1996</p>
                                    </div>
                                </div>
                            <div class="enter_main_img_div"><img class="enter_main_img" src="${users.products[e.id-19].images[0]}" alt="latana"></div>
                            <p class="enter_main_text">${users.products[e.id-19].description}</p>
                            <div class="enter_main_little_div">
                                <img class="enter_main_little_img" src="${users.products[e.id-19].images[1]}" alt="latana">
                                <img class="enter_main_little_img" src="${users.products[e.id-19].images[2]}" alt="latana">
                            </div>
                            <p class="enter_main_text">${users.products[e.id-19].description}</p>
                        </div>
                        
                        <h2 class="base_h2">related news</h2>
                        <div class="news_div ">
                            <article class="article_latestnews">
                                <div class="article_latestnews_div">
                                    <img src="images/Group 4.png" alt="latana news">
                                </div>
                                <section class= "article_latestnews_section relative">
                                        <p class="article_latestnews_p"><a href="#">lorem ipsum</a> </p>
                                    <h2 class="article_latestnews_h2">Lorem ipsum dolor sit amet</h2>
                                    <p class="article_latestnews_p_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique id neque, risus diam, nunc. Sit cras sed amet imperdiet quam est tortor. Nisl tortor, urna auctor neque morbi.</p>
                                    <div class="streightline">
                                        <div class= "article_latestnews_div_person">
                                            <img src="images/profile_photo.jpg" alt="profile picture">
                                            <div class="article_latestnews_div_name">
                                                <p class="article_latestnews_name">George Thomas</p>
                                                <p class="article_latestnews_date">22.01.1996</p>
                                            </div>
                                        </div>
                                        <div class="article_social_div">
                                            <img src="images/Like Icon.png" alt="like icon">
                                            <img src="images/Comment Icon.png" alt="comment icon">
                                            <img src="images/Share Icon.png" alt="share icon">
                                        </div>
                                    </div>
                                </section>
                                
                            </article>
                            <article class="article_latestnews">
                                <div class="article_latestnews_div">
                                    <img src="images/Group 4 (1).png" alt="latana news">
                                </div>
                                <section class= "article_latestnews_section relative">
                                        <p class="article_latestnews_p"><a href="#">lorem ipsum</a> </p>
                                    <h2 class="article_latestnews_h2">Lorem ipsum dolor sit amet</h2>
                                    <p class="article_latestnews_p_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique id neque, risus diam, nunc. Sit cras sed amet imperdiet quam est tortor. Nisl tortor, urna auctor neque morbi.</p>
                                    <div class="streightline">
                                        <div class= "article_latestnews_div_person">
                                        <img src="images/profile_photo.jpg" alt="profile picture">
                                        <div class="article_latestnews_div_name">
                                            <p class="article_latestnews_name">George Thomas</p>
                                            <p class="article_latestnews_date">22.01.1996</p>
                                        </div>
                                    </div>
                                    <div class="article_social_div">
                                        <img src="images/Like Icon.png" alt="like icon">
                                        <img src="images/Comment Icon.png" alt="comment icon">
                                        <img src="images/Share Icon.png" alt="share icon">
                                    </div></div>
                                    
                                </section>
                                
                            </article>
                            <article class="article_latestnews">
                                <div class="article_latestnews_div">
                                    <img src="images/Group 4 (2).png" alt="latana news">
                                </div>
                                <section class= "article_latestnews_section relative">
                                        <p class="article_latestnews_p"><a href="#">lorem ipsum</a> </p>
                                    <h2 class="article_latestnews_h2">Lorem ipsum dolor sit amet</h2>
                                    <p class="article_latestnews_p_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique id neque, risus diam, nunc. Sit cras sed amet imperdiet quam est tortor. Nisl tortor, urna auctor neque morbi.</p>
                                    <div class="streightline">
                                        <div class= "article_latestnews_div_person">
                                        <img src="images/profile_photo.jpg" alt="profile picture">
                                        <div class="article_latestnews_div_name">
                                            <p class="article_latestnews_name">George Thomas</p>
                                            <p class="article_latestnews_date">22.01.1996</p>
                                        </div>
                                    </div>
                                    <div class="article_social_div">
                                        <img src="images/Like Icon.png" alt="like icon">
                                        <img src="images/Comment Icon.png" alt="comment icon">
                                        <img src="images/Share Icon.png" alt="share icon">
                                    </div></div>
                                    
                                </section>
                                
                            </article>
                        `}
            })
        });
    
        
    } catch (error) {
        console.log(error);
    }
    let x =1;
    let y =2;
    let z =3;
    let btnP = document.getElementById("btnP");
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    let btnN = document.getElementById("btnN");
    function condition(){
        btn1.innerHTML=(`<a id="btn-${x}">${x}</a>`);
        btn2.innerHTML=(`<a id="btn-${y}">${y}</a>`);
        btn3.innerHTML=(`<a id="btn-${z}">${z}</a>`);
    }
    btnN.addEventListener("click", function(){
        x++;
        y++;
        z++;
        condition();
    })
    btnP.addEventListener("click", function(){
        x--;
        y--;
        z--;
        condition();
    })
}

getInformation(0);

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");



btn1.addEventListener("click",()=>{
    menu_div.innerHTML = ""
    getInformation(0)
    
    
    
})

btn2.addEventListener("click",()=>{
    menu_div.innerHTML = ""
    getInformation(9)
    
    
    
})

btn3.addEventListener("click",()=>{
    menu_div.innerHTML = ""
    getInformation(18)
    
    
    
})
btn3.addEventListener("click",()=>{
    menu_div.innerHTML = ""
    getInformation(27)
    
    
    
})


