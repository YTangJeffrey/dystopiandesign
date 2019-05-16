function erase(){
    var Element =document.getElementById("hidden");
    
    var randoma = Math.floor(Math.random()*3);
    Element.style.left = 300+randoma*100 + 'px';
    Element.style.top = Math.floor(Math.random()*1000)+'px';
    document.getElementById("pineapple").style.transform = "rotate(180deg)";
    
  
}

function randomize(){
    var Element =document.getElementById("hidden2");
    
    var randoma = Math.floor(Math.random()*5);
    Element.style.left = randoma*100 + 'px';
    Element.style.top = Math.floor(Math.random()*1000)+'px';
    document.getElementById("OnBlack").style.transform = "rotate(180deg)";
    
  
}
function randomize4(){
    var Element =document.getElementById("hidden4");
    
    var randoma = Math.floor(Math.random()*1000);
    Element.style.left = randoma + 'px';
    Element.style.top = Math.floor(Math.random()*2000)+'px';
    document.getElementById("face").style.transform = "rotate(180deg)";
    
  
}

function randomize3(){
    var Element =document.getElementById("hidden3");
    
    var randoma = Math.floor(Math.random()*1000);
    Element.style.left = randoma + 'px';
    Element.style.top = Math.floor(Math.random()*2000)+'px';
    document.getElementById("carrot").style.transform = "rotate(180deg)";
    
  
}

function enter(){
    document.getElementById("screen").style.opacity= 0;
    
    setTimeout(function GTH(){
        document.getElementById("screen").style.display = "none";},1000);
        
}
function randomize5(){
    var Element =document.getElementById("hidden5");
    
    var randoma = Math.floor(Math.random()*0);
    Element.style.left = randoma + 'px';
    Element.style.top = Math.floor(Math.random()*2000)+'px';
    document.getElementById("face").style.transform = "rotate(180deg)";
    
  
}
function clickleft(){
    document.getElementById("right").style.display = "grid";
    document.getElementById("right").style.opacity= 0;
    document.getElementById("left").style.opacity= 0;
    setTimeout(function GTH(){
        document.getElementById("right").style.opacity= 1;
        document.getElementById("left").style.display="none";
    },1000);
}

function clickright(){
    document.getElementById("left").style.display = "grid";
    document.getElementById("left").style.opacity= 0;
    document.getElementById("right").style.opacity= 0;
    setTimeout(function GTH(){
        document.getElementById("left").style.opacity= 1;
        document.getElementById("right").style.display="none";
    },1000);
    
}






