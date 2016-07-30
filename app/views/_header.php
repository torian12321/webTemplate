<?php require_once __dir__ . '/../src/php/init.php'; ?>


<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0' >

	<title><?php echo $GLOBALS['projectName']; ?></title>

	<?php /* Colors on browser header (mobile) */?>
	<meta content="<?php echo $GLOBALS['themeColor']; ?>" name="theme-color">
	<meta content="<?php echo $GLOBALS['themeColor']; ?>" name="msapplication-navbutton-color">
	<meta content="<?php echo $GLOBALS['themeColor']; ?>" name="apple-mobile-web-app-status-bar-style">

	<?php /* Add to home screen for Safari on iOS */?>
	<meta name="apple-mobile-web-app-capable"          content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="apple-mobile-web-app-title"            content="<?php echo $GLOBALS['projectName']; ?>">
	<link rel="apple-touch-icon" href="src/img/icons/launcher//icon-152x152.png">

	<?php /* Tile Icon for Windows */?>
	<meta name="msapplication-TileImage" content="src/img/icons/launcher//icon-144x144.png">
	<meta name="msapplication-TileColor" content="<?php echo $GLOBALS['themeColor']; ?>">

	<link rel="manifest"   href="/manifest.json">
	<link rel="icon"       type="image/png" href="<?php echo $GLOBALS['iconsDir']; ?>favicon.png">
	<link rel="stylesheet" type="text/css" 	href="<?php echo $GLOBALS['cssDir']; ?>style.css">
</head>


<body>