function main() {
    var cpuhover = document.getElementById("cpuhtml");
    var gpuhover = document.getElementById("gpuhtml");
    var psuhover = document.getElementById("psuhtml");
    var hiddentext = document.getElementsByClassName("hiddentext");
    var titel = document.getElementsByTagName("h1");
    var zetpcaan = document.getElementById("zetpcaan");
    var boot = document.getElementsByClassName("boot")[0];
    
    for (var i = 0; i < titel.length;i++){
        
    }
    
    cpuhover.onmouseover = function (){
        cpuhover.style.height ="100px";
        cpuhover.style.width = "300px";
        cpuhover.style.marginLeft = "300px";
        cpuhover.style.lineHeight = "100px";
        cpuhover.style.transition = "all 1s ease";
        hiddentext[0].style.opacity = 1;
        hiddentext[0].style.marginTop = "-90px";
        hiddentext[0].style.marginLeft = "20px";
        titel[0].style.marginLeft= "200px";
        
        
    }
    cpuhover.onmouseout = function (){
        cpuhover.style.height ="80px";
        cpuhover.style.width = "80px";
        cpuhover.style.marginLeft = "390px";
        cpuhover.style.lineHeight = "80px";
        cpuhover.style.transition = "all 0.5s ease";
        hiddentext[0].style.opacity = 0;
        titel[0].style.marginLeft= "0px";
    }    
    gpuhover.onmouseover = function (){
        gpuhover.style.height ="200px";
        gpuhover.style.width = "300px";
        gpuhover.style.marginLeft = "300px";
        gpuhover.style.transition = "all 1s ease";
        hiddentext[1].style.opacity = 1;
    }
    gpuhover.onmouseout = function (){
        gpuhover.style.height ="80px";
        gpuhover.style.width = "120px";
        gpuhover.style.marginLeft = "390px";
        gpuhover.style.transition = "all 0.5s ease";
        hiddentext[1].style.opacity = 0;
    }
    psuhover.onmouseover = function (){
        psuhover.style.lineHeight = "40px";
        hiddentext[2].style.opacity = 1;
        psuhover.style.fontSize = "1em";
        titel[2].style.fontSize = "3em";
        psuhover.style.marginLeft = "200px";
        psuhover.style.width = "300px";
        psuhover.style.height = "300px";
        psuhover.style.transition = "all 1s ease";
    }
    psuhover.onmouseout = function (){
        psuhover.style.lineHeight = "80px";
        hiddentext[2].style.opacity = 0;
        titel[2].style.fontSize = "2em";
        psuhover.style.fontSize = "1em";
        psuhover.style.marginLeft = "280px";
        psuhover.style.width = "80px";
        psuhover.style.height = "80px";
        psuhover.style.transition = "all 0.5s ease";
        
        
    }
    zetpcaan.onclick = function(){
        boot.play();
    }
}

window.onload = function() {
       main();
}
