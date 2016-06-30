<?php

/*
 * PHP configuration options.
 */

$GLOBALS['projectPath'] = 'http://localhost/webTemplate/';
$GLOBALS['home']        = $GLOBALS['projectPath'] . 'index.php';

$GLOBALS['projectName'] = 'My project name';
$GLOBALS['projectDesc'] = 'Description';


$GLOBALS['srcDir'] 		= $GLOBALS['projectPath'] . 'src/';	//If the pages are in different locations
//$GLOBALS['srcDir'] 	= '../src/';						//If ALL the pages are at 'root/pages'
//$GLOBALS['srcDir'] 	= 'src/';							//If ALL the pages are at 'root'

$GLOBALS['cssDir']      = $GLOBALS['srcDir'] . 'css/';
$GLOBALS['jsDir']       = $GLOBALS['srcDir'] . 'js/';
$GLOBALS['imgDir']      = $GLOBALS['srcDir'] . 'img/';
$GLOBALS['imgDef']      = $GLOBALS['imgDir'] . 'default/';
$GLOBALS['iconsDir']    = $GLOBALS['imgDir'] . 'icons/';


$GLOBALS['dateFormat']  = 'F jS - Y';
$GLOBALS['themeColor']  = '#163b63';

//Contact
//$GLOBALS['contact_phone']   = '';
//$GLOBALS['contact_twitter'] = '';
//$GLOBALS['contact_mail']    = '';

?>