<?php
//conexion
    include_once '../php/conexion1.php';
    $conexionPDO= new PDO("mysql:host=$servidor;dbname=$bd;charset=UTF8",$usuario,$clave);
    session_start();

session_start();
    if (empty($_SESSION['IDSesion'])) {
    // Agregar luego cuando armemos sesión
   //     echo "Debe iniciar Sesion";
   //     die();
    }
//$idUsuario = $_SESSION['IDSesion'];
$PermiteEdicion=$_SESSION['PermisoEdicion'];

$nombre_comercial = $_POST['nombreComercial'];
$laboratorio = $_POST['laboratorio'];
$monodroga = $_POST['monodroga'];
$stock = intval($_POST['stock']);
$precio = floatval($_POST['precio']);
$cobertura_pami = intval($_POST['coberturaPami']);

$sql1="INSERT INTO items (nombre_comercial , laboratorio , monodroga , stock , precio , cobertura_pami) VALUES ('$nombre_comercial' , '$laboratorio' , '$monodroga' , '$stock' , '$precio' , '$cobertura_pami') ";
$ejecucionSQL1= $conexionPDO->prepare($sql1); 
if ($ejecucionSQL1 ->execute()){
    echo "Datos guardados correctamente";
}
else{echo "Error al guardar datos";
    die();
}

$conexionPDO = null;
$sql = null;
$sql1 = null;

die();
?>