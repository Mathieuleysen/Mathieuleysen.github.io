function main() {
    //var mainpage
    var fotoslider = document.getElementById("vakjeFotos");
    var infoslider = document.getElementById("vakjeInfo");
    var logoFotoKader = document.getElementById("vakje3");
    var logoInfoKader = document.getElementById("vakje4");
    var ondersteboven = document.getElementById("upsideDown");
    var bovensteonder = document.getElementById("downsideup");
    // nav
    var skillsnav = document.getElementById("skillsnavhtml");
    var opdrachtennav = document.getElementById("opdrachtennavhtml");
    //skills
    var skillslider1 = document.getElementById("skillschuif1");
    var skillslider2= document.getElementById("skillschuif2");
    var skillslider3 = document.getElementById("skillschuif3");
    var skillslider4 = document.getElementById("skillschuif4");
    
    //code Mainpage
    logoFotoKader.onclick = function(){
        
        fotoslider.style.left = "0";
        fotoslider.style.transition = "all 1s ease";
        bovensteonder.style.height = "300px";
        bovensteonder.style.width = "400px";
        bovensteonder.style.transition = "height 1s ease";
    }
    
    fotoslider.onclick = function(){
        fotoslider.style.left = "100%";
        fotoslider.style.transition = "all 1s ease";
        bovensteonder.style.height = "0px";
        bovensteonder.style.transition = "height 1s ease";
    }
    
    logoInfoKader.onclick = function(){
        infoslider.style.top = "0";
        infoslider.style.transition = "all 1s ease";
        ondersteboven.style.height = "300px";
        ondersteboven.style.width = "400px";
        ondersteboven.style.transition = "width 1s ease";
                
    }
    
    infoslider.onclick = function(){
        
        infoslider.style.top = "100%";
        infoslider.style.transition = "all 1s ease";
        ondersteboven.style.width = "0px";
        ondersteboven.style.transition = "width 1s ease";
    }
    
    window.onscroll = function (){
       var skillsoffset = document.getElementById("S1").offsetTop;
       var bodytop = document.body.scrollTop;
       
       if (bodytop >= (skillsoffset - 200)){
           skillslider1.className = "skill1";
           skillslider2.className = "skill2";
           skillslider3.className = "skill3";
           skillslider4.className = "skill4";
       } else if (skillsoffset - 200 >= bodytop){
           skillslider1.className = "skillleeg";
           skillslider2.className = "skillleeg";
           skillslider3.className = "skillleeg";
           skillslider4.className = "skillleeg";
       }
        
        if (bodytop >= skillsoffset - 20){
        document.getElementsByClassName("nav")[0].style.width = "100%";
        } else {
         document.getElementsByClassName("nav")[0].style.width = "50%";   
        }
            
        if (bodytop != 0){
            
            navkleurwit();
        } else {
            
            navkleurzwart();
        }
        
        
       function navkleurwit (){
           var navlinks = document.getElementsByClassName("navlettercolor");
           document.getElementsByClassName("nav")[0].style.backgroundColor = "rgba(30,30,30,1)";
           document.getElementById("fotonav").src = "img/ML-White.png";
           for(var i =0;i < navlinks.length;i++){
               navlinks[i].style.color = "white";
               
           }
       }
       function navkleurzwart (){
           var navlinks = document.getElementsByClassName("navlettercolor");
           document.getElementsByClassName("nav")[0].style.backgroundColor = "rgba(30,30,30,0)";
           document.getElementById("fotonav").src = "img/ML-Black.png";
           for(var i =0;i < navlinks.length;i++){
               navlinks[i].style.color = "black";
               
           }
       }

       $('.parallax-window').parallax({imageSrc: 'img/IMG_3249_blur.jpg'});
   }
    
    
    //////// nav (3/4 zelf gemaakt)///////
    skillsnav.onclick= function(){
        test('S1'); 
        return false;
    }
    opdrachtennav.onclick= function(){
        test('S2'); 
        return false;
    }
    
    function scrollTo(to, duration) {
    if (document.body.scrollTop == to) return;
    var diff = to - document.body.scrollTop;
    var scrollStep = Math.PI / (duration / 10);
    var count = 0, currPos;
    start = document.body.scrollTop;
    scrollInterval = setInterval(function(){
        if (document.body.scrollTop != to) {
            count = count + 1;
            currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
            document.body.scrollTop = currPos;
        }
        else { clearInterval(scrollInterval); }
    },10);
}

    function test(elID){
    var dest = document.getElementById(elID);
    scrollTo(dest.offsetTop, 500);
}
    ///////////////////////////////////
}

window.onload = function() {
       main();
}
