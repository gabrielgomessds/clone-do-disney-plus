window.onscroll = function(){
    var top = window.pageXOffset || document.documentElement.scrollTop
    var barra = document.querySelector(".barra");

    if(top > 400){
        barra.style.opacity = '1';
       
    }else{
        barra.style.opacity = '0';

    }
}