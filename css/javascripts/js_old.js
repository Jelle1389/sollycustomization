// JavaScript Solly
$(function() {
var catArray = ['.headSolly', '.eyesSolly', '.antSolly', '.feetSolly'];

var chosen_head;
var chosen_eyesL;
var chosen_ant;
var ratio   = window.devicePixelRatio || 1;

var images = {};

function drawBodyPart(context, url) {
	if(url) {
		var img = new Image;
		img.onload = function(){ 
			context.scale(ratio, ratio);
			context.drawImage(img,0,0,900,450); 
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
	
	var sources = {
		head: chosen_head,
		eyes: chosen_eyesL
	}
	
	drawBodyPart(context, chosen_head);
	drawBodyPart(context, chosen_eyesL);
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