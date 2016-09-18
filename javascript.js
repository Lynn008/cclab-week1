var movingdistance=1;
var paddingLeft1 = 560;
var paddingLeft2 =560;
var paddingLeft3 = 560;
var rotateAngle=0;
var seconds=0;

document.addEventListener("DOMContentLoaded", function(){
	function timer(){
		setInterval(function(){
			seconds +=1;
			shift();
			rotation();	
			rotateAngle = seconds * -1;
		},10);
		
	 }
	function shift(){
	    var coffeeline1 = document.getElementsByClassName("coffeeline1");
	    var coffeeline2 = document.getElementsByClassName("coffeeline2");
	    var coffeeline3 = document.getElementsByClassName("coffeeline3");
		if (paddingLeft1 > -10) {
			paddingLeft1-=movingdistance;
		}else if (paddingLeft1<=-10) {
			paddingLeft1=560
		}
		if (paddingLeft2 - paddingLeft1 > 190) {
			paddingLeft2-=movingdistance;
		}else if (paddingLeft2<=-10) {
			paddingLeft2=560
		}
		else if ((paddingLeft2 - paddingLeft1 < 0) && (paddingLeft2 - paddingLeft1>=-420)) {
			paddingLeft2-=movingdistance;
		}

		if (paddingLeft3 - paddingLeft2 > 190) {
			paddingLeft3 -= movingdistance;
		}else if (paddingLeft3<=-10) {
			paddingLeft3=560
		}
		else if ((paddingLeft3 - paddingLeft2 < 0) && (paddingLeft3 - paddingLeft2 >=- 420)) {
			paddingLeft3 -= movingdistance;
		}
		coffeeline1[0].style.paddingLeft = paddingLeft1 + "px";
		coffeeline2[0].style.paddingLeft = paddingLeft2 + "px";
		coffeeline3[0].style.paddingLeft = paddingLeft3 + "px";

	}
	function rotation(){
		var coffee = document.getElementsByClassName("coffee");
		coffee[0].style.transform = "rotate(" + rotateAngle + "deg)";
		coffee[1].style.transform = "rotate(" + rotateAngle + "deg)";
		coffee[2].style.transform = "rotate(" + rotateAngle + "deg)";
		coffee[3].style.transform = "rotate(" + rotateAngle + "deg)";
		coffee[4].style.transform = "rotate(" + rotateAngle + "deg)";
		coffee[5].style.transform = "rotate(" + rotateAngle + "deg)";
		coffee[6].style.transform = "rotate(" + rotateAngle + "deg)";
		coffee[7].style.transform = "rotate(" + rotateAngle + "deg)";
		coffee[8].style.transform = "rotate(" + rotateAngle + "deg)";
	}
	timer();
})