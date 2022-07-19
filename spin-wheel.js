function generate(){
  var a = parseInt(document.getElementById("inputnumberdests").value) -1;
  var ch = document.getElementById("ch");

  for (i = 0; i <=a; i++) {
    var input = document.createElement("input");
    input.className = "myStyle";
    input.style.margin = "50px"
    ch.appendChild(input);
}
var button = document.createElement("button") 
button.innerHTML = 'Submit'
ch.append(button)
button.addEventListener ("click", function() {
  var destNum = parseInt(document.getElementById("inputnumberdests").value) -1;
  var locStor=[]
  for (i=0; i<=destNum; i++){
    var textInput = document.getElementsByClassName("myStyle")[i].value
    locStor.push(textInput)
    location.href = "spin-wheel.html"
  }
  localStorage.setItem("meta", JSON.stringify(locStor));
});
}

function getLocalItem(){
  var x = localStorage.getItem("meta");
  document.getElementsByClassName("sa1").innerHTML= JSON.stringify(x, null, 4)
  console.log(  document.getElementsByClassName("sa1").innerHTML= JSON.stringify(x, null, 4))
}


function rotatefunc(){
  var min=1024;
  var max=9999;
  var deg= Math.floor(Math.random()*(min-max))+max;
  document.getElementById('sa').style.transform="rotate("+deg+"deg)";
}