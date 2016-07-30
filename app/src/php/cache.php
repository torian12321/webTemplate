<?php

//http://www.catswhocode.com/blog/how-to-create-a-simple-and-efficient-php-cache

$url       = $_SERVER["SCRIPT_NAME"];
$break     = Explode('/', $url);
$file      = $break[count($break) - 1];
$cachefile = substr_replace($file ,"",-4).'.html';
$cachetime = 18000;


function cache_open(){
	global $cachefile;
	global $cachetime;

	// Serve from the cache if it is younger than $cachetime
	if (file_exists($cachefile) && time() - $cachetime < filemtime($cachefile)) {
	    echo "<!-- Cached copy, generated ".date('H:i', filemtime($cachefile))." -->\n";
	    include($cachefile);
	    exit;
	}
	ob_start(); // Start the output buffer
}

function cache_close(){
	global $cachefile;
	// Cache the contents to a file
	$cached = fopen($cachefile, 'w');
	fwrite($cached, ob_get_contents());
	fclose($cached);
	ob_end_flush(); // Send the output to the browser
}


?>