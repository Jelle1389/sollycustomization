<?php
	$email = $_POST['email'];
	
	$data = $_POST['base64data']; 
	echo $data;

	$image = explode('base64,',$data);  
	$filename = time() . "-" . md5($data)."-".$email;
	echo $filename;
    file_put_contents($filename . '.png', base64_decode($image[1]));

?>