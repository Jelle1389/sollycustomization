// solly 5:52pm 4 May 2015
// JavaScript Solly
$(function() {
var catArray = ['.headSolly', '.eyesSolly', '.antSolly', '.feetSolly'];

var chosen_head;
var chosen_eyesL;
var chosen_ant;
var ratio   = window.devicePixelRatio || 1;

/*function loadImages(sources, callback) {
	var images = {};
	var loadedImages = 0;
	var numImages = 0;
	for (var src in sources) {
		numImages++;
	}
	for (var src in sources) {
		images[src] = new Image();
		images[src].onload = function () {
			if(++loadedImages >= numImages) {
				callback(images);
			}
		};
		images[src].src = sources[src];
	}
};

function drawSolly(images) {
	console.log("ik kom hier");
	var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
	canvas.style.width = canvas.width + "px";
	canvas.style.height = canvas.height + "px";
	canvas.width  *= ratio;
	canvas.height *= ratio;
	
	var sources = {
		head: chosen_head,
		eyes: chosen_eyesL
	};
	
	console.log(sources[head]);
	
	loadImages(sources, function(images) {
		context.drawImage(images.head, 0, 0, 900, 450)
	});
}*/

function drawBodyPart(context, url, xpos, ypos, width, height) {
	if(url) {
		var img = new Image;
		img.onload = function(){ 
			context.scale(ratio, ratio);
			context.drawImage(img,xpos,ypos,width,height); 
		};
		img.src = url;
	}
};

function drawSolly() {
	var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
	canvas.style.width = canvas.width + "px";
	canvas.style.height = canvas.height + "px";
	canvas.width  *= ratio;
	canvas.height *= ratio;
	
	drawBodyPart(context, chosen_head, 0, 0, 900, 450);
	drawBodyPart(context, chosen_eyesL, 120, 120, 100, 50);
	drawBodyPart(context, chosen_ant);
};


$('.head').on('click', function() {  
	chosen_head = $(this).css('background-image');
	chosen_head = chosen_head.replace('url(','').replace(')','');
	$(catArray[0]).css('left', '-100%');
	$(catArray[1]).css('left', '0px');
	drawSolly();
});

$('.eyes').on('click', function() {  
	var chosen_eyes = $(this).css('background-image');
	//chosen_eyesL = chosen_eyes.replace(".svg", "_large.svg");
	chosen_eyesL = chosen_eyes.replace('url(','').replace(')','');
	$(catArray[1]).css('left', '-100%');
	$(catArray[2]).css('left', '0px');
	//console.log(chosen_eyesL);
	//$('.editEyes').css('background', chosen_eyesL);
	drawSolly();
});

$('.ant').on('click', function() {  
	var chosen_ant = $(this).css('background');
	chosen_antL = chosen_ant.replace(".svg", "_large.svg");
	$(catArray[2]).css('left', '-100%');
	$(catArray[3]).css('left', '0px');
	$('.editAnt').css('background', chosen_antL);
	drawSolly();
});

$('.feet').on('click', function() {  
	var chosen_feet = $(this).css('background');
	var chosen_feetL = chosen_feet.replace(".svg", "_large.svg");
	$(catArray[3]).css('left', '-100%');
	$(catArray[4]).css('left', '0px');
	$('.editFeet').css('background', chosen_feetL);
});

});// JavaScript Document