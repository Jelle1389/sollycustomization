<!doctype html>
<html>
<head>
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<title>Solly Editor</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
	<link href="css/style.css" rel="stylesheet"/>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

</head>
</head>

<body style="max-width:none;">

<ul class="image-container">
<?php
$dir    = 'upload';
$files1 = scandir($dir);


foreach ($files1 as &$filename) {
    if(strpos($filename,'png') !== false) {
		echo '<li class="output-solly" style="background-image:url(\'upload/'.$filename.'\')"></li>';
	}
}	
?>
</ul>

</body>
</html>