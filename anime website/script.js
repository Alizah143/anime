const body = document.querySelector("body");
const forward = document.querySelector("i");
const colors = ["olivedrab", " greenyellow", " darkorange", "purple"," whitesmoke"];

forward.addEventListener("click", function(){
    const Indexcolors = parseInt(Math.random()*colors.length)
    body.style.backgroundColor= colors[Indexcolors]
});


let text = document.querySelector("h2");
let next = document.querySelector("button");
let anime = ["Death Note","Spy x Family"]

next.addEventListener("click",function(){
    text.innerHTML=anime[0]
    text.innerHTML=anime[1]
})
function changeImage(x,image){
    if(x==1){
        image.src = 'download-removebg-preview.png';
    }
    if(x == 2){
        image.src = 'Anya__-removebg-preview.png'
    }
}