<?php
	require_once __dir__ . '/../src/php/init.php';

	//if open/close, do the samen at _footer.php
	//cache_open();
?>


<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<?php /* Chrome, Firefox OS, Opera and Vivaldi */?>
	<meta name="theme-color" content="<?php echo $GLOBALS['themeColor']; ?>">
	<?php /* Windows Phone */?>
	<meta name="msapplication-navbutton-color" content="<?php echo $GLOBALS['themeColor']; ?>">
	<?php /* iOS Safari */?>
	<meta name="apple-mobile-web-app-status-bar-style" content="<?php echo $GLOBALS['themeColor']; ?>">

	<title><?php echo $GLOBALS['projectName']; ?></title>
	<link rel="icon" type="image/png" href="<?php echo $GLOBALS['projectPath']; ?>favicon.png">
	<link rel="stylesheet" href="src/css/style.min.css" type="text/css">

</head>


<body>