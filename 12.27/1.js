var ul1 = document.getElementById("ul1");
var ul2 = document.getElementById("ul2");
var arr = [];
ul1.addEventListener("click",click);

function click(ev) {
	if(ev.target.tagName == "LI") {
		create(ev.target.innerHTML);
	}
	arr.push(ev.target.innerHTML);
//	var arr2 = arr.split(",");
	console.log(arr);
	localStorage.setItem("index",arr);
}
  
function create(val) {     //创建li
	var li = document.createElement("li");
	li.innerHTML = val;
	ul2.appendChild(li);
}
