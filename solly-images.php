<?php
$dir    = 'upload';
$files1 = scandir($dir);
echo json_encode($files1);
?>
