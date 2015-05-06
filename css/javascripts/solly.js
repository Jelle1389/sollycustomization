// JavaScript Solly
$(function() {
var catArray = ['.headSolly', '.eyesSolly', '.antSolly', '.feetSolly'];

//var ratio   = window.devicePixelRatio || 1;
var ratio = 1;
console.log(ratio);
var canvas = document.getElementById("myCanvas");
canvas.style.width = canvas.width + "px";
canvas.style.height = canvas.height + "px";
canvas.width  *= ratio;
canvas.height *= ratio;

var body_basis_url = $(".previewSolly").css('background-image');
var body_basis = body_basis_url.replace('url(','').replace(')','');
drawSolly();

var chosen_head;
var chosen_eyesL;
var chosen_antL;
var chosen_feetL;

function drawBodyPart(context, url, xpos, ypos, width, height) {
	if(url) {
		var img = new Image;
		img.onload = function(){ 
			context.drawImage(img,xpos,ypos,width,height); 
		};
		img.src = url;
	}
};

function drawSolly() {
    var context = canvas.getContext("2d");
	context.clearRect ( 0 , 0 , canvas.width, canvas.height );
	//drawBodyPart(context, chosen_feetL, 640, 650, 350, 350);
	//drawBodyPart(context, body_basis, 0, 0, 1000, 1000);
	//drawBodyPart(context, chosen_head, 0, 0, 1000, 1000);
	//drawBodyPart(context, chosen_antL, 400,0, 300, 300);
	//drawBodyPart(context, chosen_eyesL, 130, 550, 200, 200);
	
	//ipad small
	drawBodyPart(context, chosen_feetL, 320, 325, 175, 175);
	drawBodyPart(context, body_basis, 0, 0, 500, 500);
	drawBodyPart(context, chosen_head, 0, 0, 500, 500);
	drawBodyPart(context, chosen_antL, 200,0, 150, 150);
	drawBodyPart(context, chosen_eyesL, 65, 275, 100, 100); 
	
	//desktop
	//drawBodyPart(context, chosen_feetL, 780, 500, 800, 400);
	//drawBodyPart(context, body_basis, 0, 0, 1800, 900);
	//drawBodyPart(context, chosen_head, 0, 0, 1800, 900);
	//drawBodyPart(context, chosen_eyesL, 500, 500, 350, 175); 
	//drawBodyPart(context, chosen_antL, 750,75, 450, 250);
	
};

$('#exportImage').on('click', function() {
// Get the canvas screenshot as PNG
		$('.export-btn button').addClass('appearance');
		document.getElementById("btn-text").innerHTML = "Geactiveerd";
		
		var screenshot = Canvas2Image.saveAsPNG(canvas, true);
		// This is a little trick to get the SRC attribute from the generated <img> screenshot
		canvas.parentNode.appendChild(screenshot);
		screenshot.id = "canvasimage";		
		data = $('#canvasimage').attr('src');
		canvas.parentNode.removeChild(screenshot);

		// Send the screenshot to PHP to save it on the server
		var url = 'upload/export.php';
		$.ajax({ 
		    type: "POST", 
		    url: url,
		    dataType: 'text',
		    data: {
		        base64data : data
		    }
		});
});

$('.head').on('click', function() {  
	chosen_head = $(this).css('background-image');
	chosen_head = chosen_head.replace('url(','').replace(')','');
	$(catArray[0]).css('left', '-100%');
	$(catArray[1]).css('left', '0px');
	drawSolly();
});

$('.eyes').on('click', function() {  
	var chosen_eyes = $(this).css('background-image');
	chosen_eyesL = chosen_eyes.replace('url(','').replace(')','');
	$(catArray[1]).css('left', '-100%');
	$(catArray[2]).css('left', '0px');
	drawSolly();
});

$('.ant').on('click', function() {  
	var chosen_ant = $(this).css('background-image');
	chosen_antL = chosen_ant.replace('url(','').replace(')','');
	$(catArray[2]).css('left', '-100%');
	$(catArray[3]).css('left', '0px');
	drawSolly();
});

$('.feet').on('click', function() {  
	var chosen_feet = $(this).css('background-image');
	chosen_feetL = chosen_feet.replace('url(','').replace(')','');
	$(catArray[3]).css('left', '-100%');
	$(catArray[4]).css('left', '0px');
	drawSolly();
	$('.export-btn').addClass('expand');
	$('#myCanvas').addClass('margin-canvas');
});

});