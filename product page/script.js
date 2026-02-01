var slider = document.getElementById("sliderImages");
var sliderIndex = document.getElementById("sliderIndex");
var slidingImages = slider.children;
var amountOfImages = slidingImages.length;
var increment = 100 / amountOfImages;

slider.style.width = 100 * amountOfImages + "%";
slider.style.transform = "translateX(0%)";

for(var i = 1; i <= amountOfImages; i++){
	var node = document.createElement("div");
	node.classList.add("slide");
	if (i === 1) node.classList.add('active');
	node.setAttribute("data-amount", (i - 1));
	node.addEventListener("click", handleSlideClick);	
	sliderIndex.appendChild(node);
}

function handleSlideClick(e){
	for(var x = 0; x < sliderIndex.children.length; x++){
		sliderIndex.children[x].classList.remove("active");
	}
	e.target.classList.add("active");
	var move = e.target.getAttribute('data-amount') * increment;
	slider.style.transform = "translateX(-"+move+"%)";
}