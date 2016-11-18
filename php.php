<?php
//legistators------
function leg(){
    $json = file_get_contents('http://104.198.0.197:8080/legislators?per_page=all');

$obj = json_decode($json, true);

echo json_encode($obj);
}
    
function bills(){
    $json = file_get_contents('http://104.198.0.197:8080/bills?per_page=all');

$obj = json_decode($json, true);

echo json_encode($obj);
}

function com(){
    $json = file_get_contents('http://104.198.0.197:8080/committees?per_page=all');

$obj = json_decode($json, true);

echo json_encode($obj);
}
    
    

















if(function_exists($_GET['f'])) {
   $_GET['f']();
}




?>