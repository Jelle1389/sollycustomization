<?php
$dir    = 'upload';
$files1 = scandir($dir);

$filteredFiles = array();

foreach ($files1 as &$filename) {
    if(strpos($filename,'png') !== false) {
		$filteredFiles[] = $filename;
	}
}	

echo json_encode($filteredFiles);

?>
