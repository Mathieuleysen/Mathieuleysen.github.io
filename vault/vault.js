function main() {
    var array = document.getElementsByTagName("button");
    var door = document.getElementById("door");
    for (var i = 0; i < array.length;i++){
        array[i].onclick = function () {
            
             var tekstVak = document.getElementById("tekst");   
             tekstVak.value += this.innerHTML;
        }

         document.getElementById("buttonok").onclick = function () {
            
             var code = document.getElementById("tekst").value;
             
             if (code === "1234"){
                 door.style.transform = "rotate(180deg)"
                 door.style.top = "-100%";
                 door.style.transition = "all 3s ease";
             } else {
                 document.getElementById("tekst").value = "";
             }
        }  

        document.getElementById("buttonc").onclick = function () {
            
             document.getElementById("tekst").value = "";
             door.style.transform = "rotate(0deg)"
             door.style.top = "0";
             door.style.transition = "all 3s ease";
        }             
   }
}


window.onload = function() {
       main();
}
