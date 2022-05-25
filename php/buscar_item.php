<?php
    //conexion
    include_once '../php/conexion1.php';
    $conexionPDO= new PDO("mysql:host=$servidor;dbname=$bd;charset=UTF8",$usuario,$clave);
    session_start();
   
   /* 
    if (empty($_SESSION['IDSesion'])) {
        echo "Debe iniciar Sesion";
        die();
    }
    */

    $items= array();
    $idItem = $_POST['id'];
    $sql="SELECT * FROM items WHERE id='$idItem'";
    $ejecucionSQL= $conexionPDO->prepare($sql); 
    $ejecucionSQL ->execute();
    while($filaPDO=$ejecucionSQL->fetch(PDO::FETCH_ASSOC)){
        $item=new stdClass();
        $item->id=$filaPDO['id'];
        $item->nombreComercial=$filaPDO['nombre_comercial'];
        $item->laboratorio=$filaPDO['laboratorio'];
        $item->monodroga=$filaPDO['monodroga'];
        $item->precio=$filaPDO['precio'];
        $item->coberturaPami=$filaPDO['cobertura_pami'];
        $item->codigoInterno=$filaPDO['codigo_interno'];
        $item->descuentoLista=$filaPDO['descuento_lista'];
        array_push($items, $item);
    }
    echo json_encode($items);

$conexionPDO = null;
$sql1 = null;

die();
?>