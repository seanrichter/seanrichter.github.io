document.getElementById("growBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";

});

document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";

});

document.getElementById("button3").addEventListener("click", function(){

    document.getElementById("box").style.opacity = "0"; 
    document.getElementById("box").style.transition = "opacity 1s";

});


document.getElementById("resetBtn").addEventListener("click", function(){
    
    document.getElementById("box").style.height = "150px"; 
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";

});
