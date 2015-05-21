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

var sollyCount = 0;
function processData (data) {
	var newCount = 0;
	for(var i = data.length - 1; i >= 0 + sollyCount; --i) {
		$('.image-container').append ('<li id='+data[i]+' style="background-image:url(\'upload/'+data[i]+'\')"></li>');
		//console.log(data.length);
		newCount += 1;
	}
	
	sollyCount+=newCount;
	if ($('.image-container li').length > 6) {
		$('.image-container li').slice(0, -6).addClass('fly-offscreen');
	}
	console.log(sollyCount);
}