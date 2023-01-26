// const enterInf = document.querySelector(".enter_main_div");
// const enterInformation = async ()=>{
//     try{
//         let enterUsers = await fetch("https://dummyjson.com/products/1")
//         .then(_=>_.json());
//         enterUsers.products.forEach(element => {
//             console.log(element);
//             enterInf.innerHTML=enterInf.innerHTML+
//             `
//             <h3 class="enter_main_title">${element.title}</h3>
//             <p class="enter_main_text"></p>
//             <div class="enter_main_img_div"><img class="enter_main_img" src="" alt="latana"></div>
//             <p class="enter_main_text"></p>
//             <div class="enter_main_little_div">
//                 <img class="enter_main_little_img" src="" alt="latana">
//                 <img class="enter_main_little_img" src="" alt="latana">
//             </div>
//             <p class="enter_main_text"></p>
//             `
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }
// enterInformation();