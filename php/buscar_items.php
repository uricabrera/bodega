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

    $maxperpage = 300;
    $search = "%".$_POST['Search']."%";
    $filter = $_POST['Filter'];
    if(strcmp($filter,"nombre comercial") === 0){
        $filter = "nombre_comercial";
    }
    $selectedPage = intval($_POST['SelectedPage']);
    $items= array();

    $sqlCount = "SELECT COUNT(*) FROM items WHERE UPPER($filter) LIKE UPPER('$search')";
    //$sqlCount = "SELECT COUNT(*) FROM items WHERE UPPER('$filter') LIKE %UPPER('$search')%";
    $sqlCount = $conexionPDO->prepare($sqlCount);
    $sqlCount->execute();
    $totalItems = $sqlCount->fetchColumn();
    $numberPages = ceil($totalItems / $maxperpage);
    $offsetItem = ($selectedPage * $maxperpage) - $maxperpage;

    $sql="SELECT * FROM items WHERE UPPER($filter) LIKE UPPER('$search') LIMIT $maxperpage OFFSET $offsetItem";
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
        $item->image=$filaPDO['url_img'];
        $item->codigoInterno=$filaPDO['codigo_interno'];
        $item->descuentoLista=$filaPDO['descuento_lista'];
        array_push($items, $item);
    }
    $data = array();
    $data[0] = $numberPages;
    $data[1] = $items;
    echo json_encode($data);

$conexionPDO = null;
$sql1 = null;

die();
?>