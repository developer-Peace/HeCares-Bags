function dropList() {
	var a = document.getElementById("dropdown");
	if (a.className === "hideMobile") {
		a.className += " showNow" ;
	}else {
		a.className = "hideMobile";
	}
	
	var a = document.getElementById("navBar");
	if (a.className === "topNavBar") {
		a.className += " navBarMobile" ;
	}else {
		a.className = "topNavBar";
	}
}
	
	var carouselsImage = [
		"images/cat-std-1.jpg",
		"images/cat-std-2.jpg",
		"images/cat-std-3.jpg",
		"images/cat-std-4.jpg",
		"images/cat-std-5.jpg",
		"images/cat-std-6.jpg"
	];
		var indexn = 0;
	
	function nextSlide() {
		indexn +=1;
		var slider = document.getElementById("catImage");
		if (indexn >= carouselsImage.length){
			indexn = 0;
		}
		slider.src = carouselsImage[indexn];
	}
		
	var slideNow = setInterval(nextSlide, 5000);