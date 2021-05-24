// Scroll up

document.getElementById("butonArriba").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 10));
    }
}


///

butonArriba = document.getElementById("botonArriba");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 800){
        botonArriba.style.transform = "scale(1)";
    }else if(scroll < 800){
        botonArriba.style.transform = "scale(0)";
    }

}