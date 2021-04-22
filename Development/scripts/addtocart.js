// window.onload = function(){
//
//
//     const imageurl = document.getElementById("img-main").src;
//
//     const product_name = document.getElementById("img-main").alt
//
//     const product_style = document.getElementsByClassName("style protect")[0].innerHTML
//
//
//     console.log(product_style);
//
//     var css = `#atc-kr3ker {
//             height: 140px;
//             width: 400px;
//             background: #5D5DA2;
//             position: absolute;
//             right: 20px;
//             bottom: 20px;
//             border-radius: 5px;
//             overflow: hidden;
//
//         }
//
//         #atc-upperbar{
//             height: 30px;
//             background: #24244E;
//             width: 100%;
//             text-align: center;
//             color: white;
//             line-height: 30px;
//             position: absolute;
//         }
//
//         #atc-image{
//             height: 80px;
//             border-radius: 4px;
//             position: absolute;
//             top: 45px;
//             left: 15px;
//         }
//
//         #atc-info{
//             height: 50px;
//             width: 250px;
//             position: absolute;
//             top: 45px;
//             left: 120px;
//         }
//
//         #atc-product-name{
//             color: white;
//             font-size: 14px
//         }
//
//     `
//
//
//     head = document.head || document.getElementsByTagName('head')[0],
//     style = document.createElement('style');
//
//     head.appendChild(style);
//
//     style.type = 'text/css';
//     if (style.styleSheet){
//     // This is required for IE8 and below.
//     style.styleSheet.cssText = css;
//     } else {
//     style.appendChild(document.createTextNode(css));
//     }
//
//     //Main Div
//     var node = document.createElement("div");
//     node.setAttribute("id", "atc-kr3ker");
//
//     //Upper Bar
//     var upperBar = document.createElement("div");
//     upperBar.setAttribute("id", "atc-upperbar");
//
//     //Img
//     var imagesection = document.createElement("img");
//     imagesection.setAttribute("src", imageurl);
//     imagesection.setAttribute("id", "atc-image");
//
//     //Text
//     var upperBarText = document.createTextNode("Adding to Cart");
//
//     //
//     var atcInfo = document.createElement("div");
//     atcInfo.setAttribute("id", "atc-info");
//
//
//     //Product Name
//     var productText = document.createElement("p");
//     var productTextInside = document.createTextNode(product_name);
//     productText.appendChild(productTextInside)
//     productText.setAttribute("id", "atc-product-name")
//     atcInfo.appendChild(productText)
//
//     var productStyle = document.createElement("p");
//     var productStyleInside = document.createTextNode(product_style);
//     productStyle.appendChild(productStyleInside)
//     productStyle.setAttribute("id", "atc-product-name")
//     atcInfo.appendChild(productStyle)
//
//
//     node.appendChild(atcInfo);
//     upperBar.appendChild(imagesection)
//     upperBar.appendChild(upperBarText);
//     node.appendChild(upperBar);
//
//     document.getElementsByTagName("body")[0].appendChild(node);
//
//
//
//     chrome.storage.local.get({ profile: {}, auth:{}, task: {}, atc:{}}, (results) => {
//
//         const atc = results.atc
//         const task = results.task
//
//         console.log(atc)
//
//         if(atc){
//             const request = new Request(`https://www.supremenewyork.com/shop/${atc.product}/add.js`)
//
//             const formData = new FormData();
//             const fileField = document.querySelector('input[type="file"]');
//
//             formData.append('utf8', '✓');
//             formData.append('style', atc.style);
//             formData.append('size', atc.size);
//             formData.append('commit', "add to basket");
//
//             if(task.quantity != 1){
//                 formData.append('qty', task.quantity);
//             }
//
//
//             /*const formData = {
//                 utf8: "✓",
//                 style: 29035,
//                 size: 64308,
//                 commit: "add to basket"
//             }*/
//
//             fetch(request, {method: 'POST', body: formData})
//             .then(response => {
//                 if(response.status){
//                     const url = `https://www.supremenewyork.com/checkout`
//                     window.location.assign(url)
//                 }
//             })
//         }
//
//         /*
//         const size = results.task.size
//
//         const delay = results.task.c_delay
//
//         const sizeSelector = Array.from(document.getElementById("size"))
//
//         const sizeSelectorElement = document.getElementById("size")
//
//         let checkoutButton = document.querySelectorAll(`[type="submit"]`)[0];
//
//         sizeSelector.map(s =>{
//             if(s.text.toLowerCase().includes(size)){
//                 if(sizeSelectorElement.getAttribute("AlreadyFilled") != "true"){
//                     let event = document.createEvent("HTMLEvents");
//                     sizeSelectorElement.focus()
//                     event.initEvent('change', true, false);
//                     sizeSelectorElement.value = s.value;
//                     sizeSelectorElement.blur()
//                     sizeSelectorElement.dispatchEvent(event);
//                     sizeSelectorElement.setAttribute("AlreadyFilled", "true")
//
//                     if(checkoutButton){
//                         setTimeout(function(){
//                             checkoutButton.click()
//                         }, 200)
//
//                         const url = `https://www.supremenewyork.com/checkout`
//
//                         setTimeout(function(){
//                             window.location.assign(url)
//                         }, 1000)
//                     }
//                 }
//             }
//         })
//         */
//     })
// }
