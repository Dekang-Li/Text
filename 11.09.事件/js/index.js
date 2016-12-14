(function() {
		var pic = [
			"img/1.jpg",
			"img/2.jpg",
			"img/3.jpg",
			"img/4.jpg",
			"img/5.jpg",
			"img/6.jpg",
			"img/7.jpg",
			"img/8.jpg"
		];
		
		var cons = document.getElementById("cons");
		var small = document.getElementById("small");
		var big = document.getElementById("big");
		var smallImg = document.getElementById("smallImg");
		var bigImg = document.getElementById("bigImg");
		var list = document.getElementById("list");
		var btn = document.querySelectorAll("#footer input");
		var li = document.querySelectorAll("#list li");
		var now = 0;
		var liW = css(li[0],"width");
		
		small.onmousemove = function(ev) {
			cons.style.display = "block";
			big.style.display = "block";
			
			var left = ev.pageX - small.offsetLeft - cons.offsetWidth/2;
			var top = ev.pageY - small.offsetTop - cons.offsetHeight/2;
			
			if(left < 0) {
				left = 0;
			}else if(left > small.offsetWidth - cons.offsetWidth) {
				left = small.offsetWidth - cons.offsetWidth;
			}
			
			if(top < 0) {
				top = 0;
			}else if(top > small.offsetHeight - cons.offsetHeight) {
				top = small.offsetHeight - cons.offsetHeight;
			}
			
			cons.style.left = left + "px";
			cons.style.top = top + "px";
			
			var  ratioX = left/(small.offsetWidth - cons.offsetWidth);
			var  ratioY = top/(small.offsetHeight - cons.offsetHeight);
			
			
			bigImg.style.left = -ratioX*(bigImg.offsetWidth - big.offsetWidth) + "px";
			bigImg.style.top = -ratioY*(bigImg.offsetHeight - big.offsetHeight) + "px";

		}
		small.onmouseout = function() {
			
			cons.style.display = "";
			big.style.display = "";
		
		}
		
		btn[0].onclick = function() {
			now--;
			if(now <= 0) {
				now = 0;
			}
			mTween(list,{left: -now*(liW + 8)},400,"linear");
		}
		btn[1].onclick = function() {
			now++;
			if(now >= 4) {
				now = 4;
			}
			mTween(list,{left: -now*(liW + 8)},400,"linear");
		}
		
		for(var i = 0; i < li.length; i++) {
			li[i].index = i;
			li[i].onclick = function() {
				smallImg.src = pic[this.index];
				bigImg.src = pic[this.index];
			}
		}
	})();