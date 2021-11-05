var mouseTarget = document.getElementById('mouseTarget')
var info1 = document.getElementById('project-info1')
var info2 = document.getElementById('project-info2')
var info3 = document.getElementById('project-info3')
var info4 = document.getElementById('project-info4')
var info5 = document.getElementById('project-info5')
mouseTarget.addEventListener('mouseenter', function(){ 
 info1.style.opacity = "1";
 info2.style.opacity = "1";
 info3.style.opacity = "1";
 info4.style.opacity = "1";
 info5.style.opacity = "1";
 document.getElementById("pictureid1").style.border = "5px solid black";
 document.getElementById("pictureid2").style.border = "5px solid black";
 document.getElementById("pictureid3").style.border = "5px solid black";
 document.getElementById("pictureid4").style.border = "5px solid black";
 document.getElementById("pictureid5").style.border = "5px solid black";
 document.getElementById("bodyid").style.background = "red";
 document.getElementById("bodyid").style.color = "white";
})
mouseTarget.addEventListener('mouseleave', function(){
 document.getElementById("bodyid").style.background = "";
 document.getElementById("bodyid").style.color = "";
 document.getElementById("pictureid1").style.border = "";
 document.getElementById("pictureid2").style.border = "";
 document.getElementById("pictureid3").style.border = "";
 document.getElementById("pictureid4").style.border = "";
 document.getElementById("pictureid5").style.border = "";
 info1.style.opacity = "";
 info2.style.opacity = "";
 info3.style.opacity = "";
 info4.style.opacity = "";
 info5.style.opacity = "";
})
