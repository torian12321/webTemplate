<?php

/*
 * All PHP functions.
 */

function sendToHome() {     // Send the user to the homepage.
    header('location: ' . $GLOBALS['home'] );
    return;
}


function cutString($myString, $newString_lenght=150){
    $newString = strip_tags($myString);                         //Remove the HTML tags
    $newString = substr($newString, 0, $newString_lenght);      //"cut" the string

    if(strlen($myString) > $newString_lenght){
        $newString = rtrim($newString, ' ') . "...";
    }
    return $newString;
}


?>