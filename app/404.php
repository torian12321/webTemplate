<?php
/* Redirect browser */
require_once __dir__ . '/src/php/init.php';
sendToHome();

/* Make sure that code below does not get executed when we redirect. */
exit;
?>