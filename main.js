let stars = document.getElementById("stars");
let moon2 = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4= document.getElementById("mountains4");
let river5 = document.getElementById("river5");
let boat6 = document.getElementById("boat6");
let mountains7 = document.getElementById("mountains7");
let developer = document.querySelector(".developer");


window.onscroll = function(){
    let value = scrollY;
    stars.style.left =  value +"px" ;
    moon2.style.top =  value *5 +"px" ;
    mountains3.style.top =  value * 2 +"px" ;
    mountains4.style.top =  value * 1.5 +"px" ;
    river5.style.top =  value  +"px" ;
    boat6.style.top =  value  +"px" ;
    boat6.style.left =  value *3  +"px" ;
    developer.style.fontSize =  value  +"px" ;
    if( scrollY >= 100){
        developer.style.fontSize =  100 +"px" ;
        developer.style.position =  "fixed" ;
        if(scrollY >= 525 ){
        developer.style.display =  "none" ;    
        }else{
            developer.style.display =  "block" ;
        }
    }
    if(scrollY >= 107){
        this.document.querySelector(".main").style.background = "linear-gradient(#376281,#10001f)";
    }else{
         this.document.querySelector(".main").style.background = "linear-gradient(#200016,#10001f)";
    }

    

}
