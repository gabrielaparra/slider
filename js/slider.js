sliderInt = 1;
sliderNext = 2;

$(document).ready(function() {

	$("#slider > Img#1").fadeIn(300);
	startSlider();

});

function startSlider() {

	count = $("#slider > Img").length;

	loop = setInterval(function() {

		if(sliderNext > count) {
			sliderNext = 1;
			sliderInt = 1;
		}

		$("#slider > Img").fadeOut(300);
		$("#slider > Img#" + sliderNext).fadeIn(300);

		sliderInt = sliderNext;
		sliderNext += 1;

	}, 3000)

}

function prev() {
	newSlide = sliderInt - 1;
	showSlide(newSlide);
}

function next() {
	newSlide = sliderInt + 1;
	showSlide(newSlide);
}

function stopLoop() {
	window.clearInterval(loop);
}

function showSlide(id) {
	stopLoop();
	if(id > count) {
		id = 1;
	} else if(id < 1) {
		id = count 
	}

	$("#slider > Img").fadeOut(300);
	$("#slider > Img#" + id).fadeIn(300);

	sliderInt = id;
	sliderNext = id + 1;
	startSlider();
}

$("#slider > Img").hover(
	function() {
		stopLoop();
	},
	function() {
		startSlider();
	}
)

$(document).on('click', '#button-stop' ,function() {
	var elm = $(this).attr('id');
	stopLoop();
	$(this).attr('id', "button-play");
	
});

$(document).on('click', '#button-play' ,function() {
	var elm = $(this).attr('id');
	startSlider();
	$(this).attr('id', "button-stop");
	
});

$('#play-pause').hover(
	function () {
		$(this).attr('src', "images/play-pause-2.png");
	}
	, function() {
		$(this).attr('src', "images/play-pause.png");
	}
);
