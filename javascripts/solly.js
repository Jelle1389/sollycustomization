// JavaScript Solly
$(function() {
var catArray = ['.headSolly', '.eyesSolly', '.antSolly', '.feetSolly'];

var ratio   = window.devicePixelRatio || 1;
var canvas = document.getElementById("myCanvas");
canvas.style.width = canvas.width + "px";
canvas.style.height = canvas.height + "px";
canvas.width  *= ratio;
canvas.height *= ratio;

var solly = {
	body_basis: new Image(),
	chosen_head: new Image(),
	chosen_eyes: new Image(),
	chosen_antL: new Image(),
	chosen_feetL: new Image()
}

var body_basis_url = 'images/png/solly_basis.png'
var body_basis = {};

loadBodyPart(body_basis_url, "body_basis");

function drawBodyPart(context, img, xpos, ypos, width, height) {
	if (img){
		context.drawImage(img,xpos,ypos,width,height);
	}
};

function loadBodyPart (url, destination) {
	if(url) {
		var img = new Image;
		img.onload = function(){
			solly[destination] = img;
			drawSolly();
		};
		img.src = url;
	}
};

function drawSolly() {
    var context = canvas.getContext("2d");
	context.clearRect ( 0 , 0 , canvas.width, canvas.height );
	drawBodyPart(context, solly.chosen_feet, 80, 70, 400*ratio, 400*ratio); 
	drawBodyPart(context, solly.body_basis, 80, 70, 400*ratio, 400*ratio);
	drawBodyPart(context, solly.chosen_head, 80, 70, 400*ratio, 400*ratio);
	drawBodyPart(context, solly.chosen_ant, 80, 70, 400*ratio, 400*ratio);
	drawBodyPart(context, solly.chosen_eyes, 80, 70, 400*ratio, 400*ratio);
};

var email;
var emailValidated;
checkEmail();

function checkEmail() {
	email = $('#input').val();
	var emailReg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(!emailReg.test(email)) {  
        $('.export-container button').removeClass('expand');
		$('.export-container input').removeClass('left appearance');
   	} else {
		$('.export-container button').addClass('expand');
		$('.export-container input').addClass('left appearance');
		emailValidated = email;
	}
	setTimeout (function () {
		checkEmail();
	},1000);
}
$('#input').focusin(function() {
	document.getElementById("exportImage").disabled = true; 
});
	
$('#input').focusout(function() {
	document.getElementById("exportImage").disabled = false; 
	$('#exportImage').on('click', function() {
			$('.export-container button').addClass('appearance right fadeout');
			$('.export-container input').addClass('transition-out');
			$('.refresh').removeClass('transition-in').addClass('fade-out');
			$('#myCanvas').addClass('liftoff');
			document.getElementById("btn-text").innerHTML = "Geactiveerd";
			
			var screenshot = Canvas2Image.saveAsPNG(canvas, true);
			canvas.parentNode.appendChild(screenshot);
			screenshot.id = "canvasimage";		
			data = $('#canvasimage').attr('src');
			canvas.parentNode.removeChild(screenshot);
			var url = 'upload/export.php';
			$.ajax({ 
				type: "POST", 
				url: url,
				dataType: 'text',
				data: {
					email: emailValidated,
					base64data : data
				}
			});
	});
});

function selectPart(part, index, owner) {
	var url = owner.css('background-image').replace('url(','').replace(')','').replace("_small", "");
	$(catArray[index]).css('left', '-100%');
	$(catArray[index + 1]).css('left', '0px');
	loadBodyPart(url, part);	
};

$('.head').on('click', function() {
	selectPart("chosen_head", 0, $(this));
});

$('.eyes').on('click', function() {  
	selectPart("chosen_eyes", 1, $(this));
});

$('.ant').on('click', function() {  
	selectPart("chosen_ant", 2, $(this));
});

$('.feet').on('click', function() {  
	selectPart("chosen_feet", 3, $(this));
	//$('#myCanvas').addClass('margin-canvas');
	$('.export-container').addClass('expand');
	$('.refresh').addClass('transition-in');
});

$('.refresh').on('click', function() {
	$(catArray[3]).css('left', '-100%');
	$(catArray[0]).css('left', '0%');
	$('.refresh').removeClass('transition-in');
	//$('#myCanvas').removeClass('margin-canvas');
	$('.export-container').removeClass('expand');
});

});