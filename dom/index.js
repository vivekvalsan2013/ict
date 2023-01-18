let pic=document.getElementById("pic");
pic.addEventListener("mouseenter",pics)
pic.addEventListener("mouseleave",picss)

function pics(){
    pic.removeAttribute("src","./Alappuzha_cover.jpg")
    pic.setAttribute("src","./—Pngtree—men's business suit shirt certificate_6957292.png")
}
function picss(){
    pic.removeAttribute("src","./—Pngtree—men's business suit shirt certificate_6957292.png")
    pic.setAttribute("src","./Alappuzha_cover.jpg")
}