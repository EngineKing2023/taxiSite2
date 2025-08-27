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
let button4 =document.querySelector(".button4");
let button5 =document.querySelector(".button5");
let button6 =document.querySelector(".button6");


let jezik = document.querySelector(".jeziki");
let icon11 = document.querySelector(".icon11");
let container = document.querySelector(".container");
let container2 = document.querySelector(".container2");
let slideshow = document.querySelector(".slideshow-container");
let foot = document.querySelector(".footer p");

let aboutUs = document.querySelector(".aboutUs");
let isShowAboutUs = true;
let contact = document.querySelector(".contact");
let isShowContact = true;
let engine = document.querySelector(".engine");
let isShowEngine = true;
let unity = document.querySelector(".unity");
let isShowUnity = true;
let websites = document.querySelector(".websites");
let isShowWebsites = true;
let plumber = document.querySelector(".plumber");
let isShowPlumber = true;




function showAboutUs(){
    if(isShowAboutUs){
        jezik.style.display="none";
        container.style.display = "none";
        container2.style.display = "none";
        button1.style.display="none";
        button2.style.display="none";
            button3.style.display="none";
            button4.style.display="none";
            button5.style.display="none";
            button6.style.display="none";
        aboutUs.style.display ="flex";
        aboutUs.style.position = "absolute";
        
        
        isShowAboutUs = false;
    }
}
function closeAboutUs(){
    if(closeAboutUs){
        jezik.style.display="flex";
        aboutUs.style.display ="none";
        container.style.display = "flex";
        container2.style.display = "flex";
        button1.style.display="block";
         button2.style.display="block";
        button3.style.display="block";
        button4.style.display="block";
        button5.style.display="block";
        button6.style.display="block";
        isShowAboutUs = true;
    }
}
function showContact(){
if(isShowContact){
    jezik.style.display="none";
    foot.style.display = "none";
     container.style.backgroundColor = "black";
         container2.style.backgroundColor = "black";
         container2.style.paddingTop = "35vh";
            foot.style.backgroundColor = "black";
            btn.style.display = "none";
            logo.style.display = "none";
            icon11.style.display = "none";
         button1.style.display="none";
        button2.style.display="none";
            button3.style.display="none";
            button4.style.display="none";
            button5.style.display="none";
            button6.style.display="none";
    contact.style.display ="flex";
    contact.style.position = "absolute";
    
    isShowContact = false;
}
    
}
function closeContact(){
    if(closeContact){
        jezik.style.display="flex";
        foot.style.display = "flex";
        contact.style.display ="none";
        container.style.display = "flex";
        container2.style.display = "flex";
        container.style.backgroundColor = "black";
         container2.style.backgroundColor = "black";
         container2.style.paddingTop = "8vh";
            foot.style.backgroundColor = "black";
            btn.style.display = "flex";
            logo.style.display = "flex";
            icon11.style.display = "flex";
        button1.style.display="block";
         button2.style.display="block";
        button3.style.display="block";
        button4.style.display="block";
        button5.style.display="block";
        button6.style.display="block";
        isShowContact = true;
    }
}
function showEngine(){
    if(isShowEngine){
       jezik.style.display="none";
         container2.style.display = "none";
         btn.style.display = "none";
         icon11.style.display = "none";
         button1.style.display="none";
        button2.style.display="none";
            button3.style.display="none";
            button4.style.display="none";
            button5.style.display="none";
            button6.style.display="none";


        engine.style.display ="flex";
        engine.style.position = "absolute";
        isShowEngine = false;
    }
}
function closeEngine(){
    if(closeEngine){
        jezik.style.display="flex";
        container2.style.display = "flex";
        btn.style.display = "flex";
        icon11.style.display = "flex";
        button1.style.display="block";
            button2.style.display="block";
        button3.style.display="block";
        button4.style.display="block";
        button5.style.display="block";
        button6.style.display="block";
        
        engine.style.display ="none";
        isShowEngine = true;
    }}

function showUnity(){
    if(isShowUnity){
        jezik.style.display="none";
        container2.style.display = "none";
         btn.style.display = "none";
         icon11.style.display = "none";
         button1.style.display="none";
        button2.style.display="none";
            button3.style.display="none";
            button4.style.display="none";
            button5.style.display="none";
            button6.style.display="none";


        unity.style.display ="flex";
        unity.style.position = "absolute";
        isShowUnity = false;
    }
}
function closeUnity(){
    if(closeUnity){
            jezik.style.display="flex";
        container2.style.display = "flex";
        btn.style.display = "flex";
        icon11.style.display = "flex";
        button1.style.display="block";
            button2.style.display="block";
        button3.style.display="block";
        button4.style.display="block";
        button5.style.display="block";
        button6.style.display="block";

        unity.style.display ="none";
        isShowUnity = true;
    }
}
function showWebsites(){
    if(isShowWebsites){
        jezik.style.display="none";
         container2.style.display = "none";
         btn.style.display = "none";
         icon11.style.display = "none";
         button1.style.display="none";
        button2.style.display="none";
            button3.style.display="none";
            button4.style.display="none";
            button5.style.display="none";
            button6.style.display="none";
        websites.style.display ="flex";
        websites.style.position = "absolute";
        isShowWebsites = false;
    }
}
function closeWebsites(){
    if(closeWebsites){
        jezik.style.display="flex";
        container2.style.display = "flex";
        btn.style.display = "flex";
        icon11.style.display = "flex";
        button1.style.display="block";
            button2.style.display="block";
        button3.style.display="block";
        button4.style.display="block";
        button5.style.display="block";
        button6.style.display="block";
        websites.style.display ="none";
        isShowWebsites = true;
    }
}

function showPlumber(){
    if(isShowPlumber){
            jezik.style.display="none";
         container2.style.display = "none";
         btn.style.display = "none";
         icon11.style.display = "none";
         button1.style.display="none";
        button2.style.display="none";
            button3.style.display="none";
            button4.style.display="none";
            button5.style.display="none";
            button6.style.display="none";

        plumber.style.display ="flex";
        plumber.style.position = "absolute";
    }
}
function closePlumber(){
    if(closePlumber){
            jezik.style.display="flex";
        container2.style.display = "flex";
        btn.style.display = "flex";
        icon11.style.display = "flex";
        button1.style.display="block";
            button2.style.display="block";
        button3.style.display="block";
        button4.style.display="block";
        button5.style.display="block";
        button6.style.display="block";

        plumber.style.display ="none";
        isShowPlumber = true;
    }
}













btn.addEventListener("click",()=>{
    if(btn.textContent == "Vstopi" || btn.textContent == "Entra" || btn.textContent == "Enter"||btn.textContent == "Nazaj" || btn.textContent == "Esci" || btn.textContent == "Eingeben" || btn.textContent == "Zurück" || btn.textContent == "Exit"){

if( btn.textContent=="Vstopi")
    {

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



         btn.textContent = "Nazaj";
         container.style.backgroundColor = "black";
         container2.style.backgroundColor = "black";
         container2.style.paddingTop = "8vh";
            foot.style.backgroundColor = "black";
        
        
        
        button1.style.display="block";
        button2.style.display="block";
        button3.style.display="block";
        button4.style.display="block";
        button5.style.display="block";
        button6.style.display="block";
       



}

else if(btn.textContent == "Nazaj" ){
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
            button2.style.display="none";
            button3.style.display="none";
            button4.style.display="none";
            button5.style.display="none";
            button6.style.display="none";
        }

else{}
        
     if(btn.textContent =="Entra")
    {

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



         btn.textContent = "Esci";
         container.style.backgroundColor = "black";
         container2.style.backgroundColor = "black";
         container2.style.paddingTop = "8vh";
            foot.style.backgroundColor = "black";
        
        
        
        button1.style.display="block";
        button2.style.display="block";
        button3.style.display="block";
        button4.style.display="block";
        button5.style.display="block";
        button6.style.display="block";
       



}

else if(btn.textContent == "Esci" ){
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


            btn.textContent = "Entra";
        container.style.backgroundColor = "#052bff";
        container2.style.backgroundColor = "#eeff00";
        container2.style.paddingTop = "20vh";
        foot.style.backgroundColor = "#052bff";
        
            button1.style.display="none";
            button2.style.display="none";
            button3.style.display="none";
            button4.style.display="none";
            button5.style.display="none";
            button6.style.display="none";
        }
else{}


        if(btn.textContent == "Eingeben"){
      

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



         btn.textContent = "Zurück";
         container.style.backgroundColor = "black";
         container2.style.backgroundColor = "black";
         container2.style.paddingTop = "8vh";
            foot.style.backgroundColor = "black";
        
        
        
        button1.style.display="block";
        button2.style.display="block";
        button3.style.display="block";
        button4.style.display="block";
        button5.style.display="block";
        button6.style.display="block";
       



}

else if(btn.textContent == "Zurück" ){
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


            btn.textContent = "Eingeben";
        container.style.backgroundColor = "#052bff";
        container2.style.backgroundColor = "#eeff00";
        container2.style.paddingTop = "20vh";
        foot.style.backgroundColor = "#052bff";
        
            button1.style.display="none";
            button2.style.display="none";
            button3.style.display="none";
            button4.style.display="none";
            button5.style.display="none";
            button6.style.display="none";
        }

else{}

if( btn.textContent=="Enter")
    {

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



         btn.textContent = "Exit";
         container.style.backgroundColor = "black";
         container2.style.backgroundColor = "black";
         container2.style.paddingTop = "8vh";
            foot.style.backgroundColor = "black";
        
        
        
        button1.style.display="block";
        button2.style.display="block";
        button3.style.display="block";
        button4.style.display="block";
        button5.style.display="block";
        button6.style.display="block";
       



}

else if(btn.textContent == "Exit" ){
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


            btn.textContent = "Enter";
        container.style.backgroundColor = "#052bff";
        container2.style.backgroundColor = "#eeff00";
        container2.style.paddingTop = "20vh";
        foot.style.backgroundColor = "#052bff";
        
            button1.style.display="none";
            button2.style.display="none";
            button3.style.display="none";
            button4.style.display="none";
            button5.style.display="none";
            button6.style.display="none";
        }

else{}



        }

    })