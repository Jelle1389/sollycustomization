<?php

	/**
	 * More info about this script on: 
	 * http://stackoverflow.com/questions/11511511/how-to-save-a-png-image-server-side-from-a-base64-data-string
	 */

	$data = $_REQUEST['base64data']; 
	echo $data;

	$image = explode('base64,',$data);  
	$filename = microtime() . "-" . md5($data);
	echo $filename;
    file_put_contents($filename . '.png', base64_decode($image[1]));

?>