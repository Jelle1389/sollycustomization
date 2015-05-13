// JavaScript Document
(function reLoad() {
	getSollies();
})();

function getSollies() {
	$.ajax({
		url:"solly-images.php",  
		success: function(data, statusCode, jqXHR) {
		processData(JSON.parse(data));
		},
		complete: function () {
		}
	});
	setTimeout(getSollies, 5000);
};

var sollies = {};
function processData (data) {
	$('.image-container').empty();
	for(var i = data.length - 1; i >= 0; --i) {
		if($('.image-container li').length < 6 && data[i].indexOf('png') >= 0) {
			$('.image-container').append ('<li id='+data[i]+' style="background-image:url(\'upload/'+data[i]+'\')"></li>');
		}
	}
}