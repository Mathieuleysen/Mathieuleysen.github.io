function main() {
    var open = document.getElementById("open");
    var voor = document.getElementsByClassName("voor")[0];
    var song1 = document.getElementById("song1");
    var elp = document.getElementsByClassName("titel")[0];
    
    open.onclick = function(){
        if (open.innerHTML === "Open kaartje"){
            voor.style.width ="60vw";
            voor.style.transition = "1s all ease";
            open.innerHTML = "Sluit kaartje";
            open.style.marginTop = "132px";
            elp.innerHTML = "";
            song1.play();
            voor.style.backgroundImage = "url('10-Fun-And-Creative-Ways-to-Bake-Your-Own-Birthday-Cake.jpg')";
            voor.style.backgroundSize = "cover";
            
        } else {
            voor.style.width ="30vw";
            voor.style.transition = "1s all ease";
            open.innerHTML = "Open kaartje";
            open.style.marginTop = "0px";
            elp.innerHTML = "Gelukkige verjaardag!!";
            song1.pause();
            voor.style.backgroundImage = "";
        }
    }
    
    
}


window.onload = function() {
       main();
}
