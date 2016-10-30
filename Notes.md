jQUERY NOTES:
The jQuery code with explanatory commentary.

sliderInt = 1;
sliderNext = 2;

$(document).ready(function() {

	$("#slider > Img#1").fadeIn(300);
	startSlider();

});

function startSlider(){

	count = $("#slider > Img").length;
	// Counts the amount of images in the slider

	loop = setInterval(function() {

		if(sliderNext > count) {
			sliderNext = 1;
			sliderInt = 1;
			// Resets the value of the var to slide the images non-stop 
		}

		$("#slider > Img").fadeOut(300);
		// Fades out all images allowing the fade in action to show up
		$("#slider > Img#" + sliderNext).fadeIn(300);
		// As the var sliderNext was previously set to 2, this will fade in
		// the Img with the id of 2.

		sliderInt = sliderNext;
		sliderNext = sliderNext+1;
		// Updates the value of the variables so the right image is
		// fade in next

	}, 3000)
	// The way the setInterval method works is by executing the code
	// for an specified amount of time, in this case 3000 milliseconds (3s)
}