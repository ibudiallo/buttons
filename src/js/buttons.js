// copyright CC0
// Public domain

var Buttons = {
	init:function(){
		var btns = document.getElementsByTagName("button"),
		l = btns.length,i = 0;
		function onMouseDown(event){
			var scrollTop = document.body.scrollTop || document.documentElement.scrollTop,
				position = Buttons.getPosition(this),
				x = event.clientX - position.left,
				y =  event.clientY - position.top + scrollTop;
			Buttons.onclick(this,x,y);
		}
		for(;i<l;i++){
			btns[i].onmousedown = onMouseDown;
		}
	},

	onclick: function(self,x,y){
		self.setAttribute("style","--coord-x: "+x+"px;--coord-y: "+y+"px;");
		self.classList.add("animate");
		setTimeout(function(){
			self.classList.remove("animate");
		},400);
	},
	getPosition:function ( el ) {
		var x = 0,
			y = 0;
		while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
			x += el.offsetLeft - el.scrollLeft;
			y += el.offsetTop - el.scrollTop;
			el = el.offsetParent;
		}
		return { top: y, left: x };
	}
};