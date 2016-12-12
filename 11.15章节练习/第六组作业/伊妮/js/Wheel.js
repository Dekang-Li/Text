/*
* @Author: anchen
* @Date:   2016-11-15 16:22:03
* @Last Modified by:   anchen
* @Last Modified time: 2016-11-15 17:00:20
*/

'use strict';
function Wheel(obj,callBack){
            if(window.navigator.userAgent.toLowerCase().indexOf("firefox")!=-1){
                obj.addEventListener("DOMMouseScroll",fn1);
            }else{
                 obj.addEventListener("mousewheel",fn1);
            }
            function fn1(ev){
                var onOff=true;
                if(ev.detail){
                    onOff=ev.detail<0? true:false;
                }else{
                    onOff=ev.wheelDelta>0? true:false;
                }
                if(callBack && typeof callBack=="function"){
                    callBack(onOff);
                }
                ev.preventDefault();
            }
        }




