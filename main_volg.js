function main() {    
    //var MB
    var MBvak1 = document.getElementById("MB1");
    var MBvak2 = document.getElementById("MB2");
    var MBvak3 = document.getElementById("MB3");
    var MBvak4 = document.getElementById("MB4");
    var MBvak5 = document.getElementById("MB5");
    var MBvak6 = document.getElementById("MB6");
    var MBvak7 = document.getElementById("MB7");
    var MBvak8 = document.getElementById("MB8");
    var MBvak9 = document.getElementById("MB9");
    var MBvak10 = document.getElementById("MB10");
    var MBover1 = document.getElementById("MBovercss1");
    var MBover2 = document.getElementById("MBovercss2");
    var MBover3 = document.getElementById("MBovercss3");
    var MBover4 = document.getElementById("MBovercss4");
    var MBover5 = document.getElementById("MBovercss5");
    
    //code MB
    
    MBover1.onmouseover = function(){
        MBvak1.style.opacity = "1";
        MBvak1.style.transition = "all 0.5s ease";
        MBvak2.style.opacity = "1";
        MBvak2.style.transition = "all 0.5s ease";
    }
    
    MBover1.onmouseout = function(){
        MBvak1.style.opacity = "0";
        MBvak1.style.transition = "all 0.5s ease";
        MBvak2.style.opacity = "0";
        MBvak2.style.transition = "all 0.5s ease";
    }
    
    MBover2.onmouseover = function(){
        MBvak3.style.opacity = "1";
        MBvak3.style.transition = "all 0.5s ease";
        MBvak4.style.opacity = "1";
        MBvak4.style.transition = "all 0.5s ease";
            
        }
        
    MBover2.onmouseout = function(){
        MBvak3.style.opacity = "0";
        MBvak3.style.transition = "all 0.5s ease";
        MBvak4.style.opacity = "0";
        MBvak4.style.transition = "all 0.5s ease";
    } 
    
    MBover3.onmouseover = function(){
        MBvak5.style.opacity = "1";
        MBvak5.style.transition = "all 0.5s ease";
        MBvak6.style.opacity = "1";
        MBvak6.style.transition = "all 0.5s ease";
    }
    
    MBover3.onmouseout = function(){
        MBvak5.style.opacity = "0";
        MBvak5.style.transition = "all 0.5s ease";
        MBvak6.style.opacity = "0";
        MBvak6.style.transition = "all 0.5s ease";
    }
    
    MBover4.onmouseover = function(){
        MBvak7.style.opacity = "1";
        MBvak7.style.transition = "all 0.5s ease";
        MBvak8.style.opacity = "1";
        MBvak8.style.transition = "all 0.5s ease";
    }
    
    MBover4.onmouseout = function(){
        MBvak7.style.opacity = "0";
        MBvak7.style.transition = "all 0.5s ease";
        MBvak8.style.opacity = "0";
        MBvak8.style.transition = "all 0.5s ease";
    }
    
    MBover5.onmouseover = function(){
        MBvak9.style.opacity = "1";
        MBvak9.style.transition = "all 0.5s ease";
        MBvak10.style.opacity = "1";
        MBvak10.style.transition = "all 0.5s ease";
    }
    
    MBover5.onmouseout = function(){
        MBvak9.style.opacity = "0";
        MBvak9.style.transition = "all 0.5s ease";
        MBvak10.style.opacity = "0";
        MBvak10.style.transition = "all 0.5s ease";
    }
}



window.onload = function() {
       main();
}
