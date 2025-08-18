let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 400); // Change image every 2 seconds
}

let theSong = document.getElementById("song");
let logo = document.querySelector(".logo");
logo.onclick= function(){
    
    if(theSong.paused){
        
        theSong.play();
        logo.src = "images/POUS.png"
    }
    else{
        theSong.pause();
        logo.src= "images/PLY.png";

    }}





let myDocument = document.documentElement;
let btn =document.querySelector(".btn");
let button1 =document.querySelector(".button1");
let button2 =document.querySelector(".button2");
let button3 =document.querySelector(".button3");








let aboutUs = document.querySelector(".aboutUs");
let isShowAboutUs = true;






function showAboutUs(){
    if(isShowAboutUs){
        container.style.display = "none";
        container2.style.display = "none";
        button1.style.display="none";
        aboutUs.style.display ="flex";
        aboutUs.style.position = "absolute";
        
        
        isShowAboutUs = false;
    }
}
function closeAboutUs(){
    if(closeAboutUs){
        aboutUs.style.display ="none";
        container.style.display = "flex";
        container2.style.display = "flex";
        button1.style.display="block";
        isShowAboutUs = true;
    }
}










let container = document.querySelector(".container");
let container2 = document.querySelector(".container2");
let slideshow = document.querySelector(".slideshow-container");
let foot = document.querySelector(".footer p");







btn.addEventListener("click",()=>{
    if(btn.textContent == "Vstopi" ){

        if(myDocument.requestFullscreen){
            myDocument.requestFullscreen();
        }
       else if(myDocument.msRequestFullscreen){
            myDocument.msRequestFullscreen();
        }
        else if(myDocument.mozRequestFullscreen){
            myDocument.mozRequestFullscreen();
        }
        
        else if(myDocument.webkitRequestFullscreen){
            myDocument.webkitRequestFullscreen();
        }



         btn.textContent = "Izhod";
         container.style.backgroundColor = "black";
         container2.style.backgroundColor = "black";
         container2.style.paddingTop = "5vh";
            foot.style.backgroundColor = "black";
        
        
        
        button1.style.display="block";
    }

    else{
            if(document.exitFullscreen){
                document.exitFullscreen();
            }
            else if(document.msexitFullscreen){
                document.msexitFullscreen();
            }
            else if(document.mozexitFullscreen){
                document.mozexitFullscreen();
            }
            else if(document.webkitexitFullscreen){
                document.webkitexitFullscreen();
            }




            btn.textContent = "Vstopi";
        container.style.backgroundColor = "#052bff";
        container2.style.backgroundColor = "#eeff00";
        container2.style.paddingTop = "20vh";
        foot.style.backgroundColor = "#052bff";
        
            button1.style.display="none";
        }})