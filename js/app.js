var i = 0;
var txt = `Yasemin Varlik is a senior in Communication Design and has a minor in Photography at Parsons The New School for Design.This is her portfolio for Web Advanced: Javascript, where she will be storing all her work through out the semester of Fall 2018.
    `;
var speed = 30;

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("description").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// var element = document.createElement("div");
// 		element.className = "newHeader";
// 		element.innerHTML = `
// 		<h1>Header</h1>
// 		<h2> header 2</h2>
// 		`	
// 		document.getElementById("wrapper").appendChild(element);

