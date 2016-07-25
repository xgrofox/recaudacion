<?php
$ruta = $_SERVER['PHP_SELF'];
$arreglo = explode("/", $ruta);
$longitud = count($arreglo);
if($longitud > 5){
    $puntero = "../../";
}else{
    $puntero = "";
}
