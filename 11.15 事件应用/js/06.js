
	function Wheel(obj,callBack) {
		if(window.navigator.userAgent.toLowerCase().indexOf("firefox") != -1) {
			obj.addEventListener("DOMMouseScroll",fn1);
		}else{
			obj.addEventListener("mousewheel",fn1);
		}
		
		function fn1(ev) {
			var judge = true;
			if(ev.detail) { 
				//判断是什么浏览器  或者 if（window.navigator.userAgent.
				//toLowerCase().indexOf("firefox") != -1）  也可以
				judge = ev.detail < 0 ? true : false;
			}else {
				judge = ev.wheelDelta > 0 ? true : false;
			}
			
			if(callBack && typeof callBack == "function") {
				callBack(judge);
			}
			ev.preventDefault();
		}
		
		
	}
			
			