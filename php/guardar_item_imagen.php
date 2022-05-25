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

// Guardado de imagen
$url_img = '';
if(isset($_FILES['image'])){
    $nombre = $_FILES['image']['name'];
    $tamaño =$_FILES['image']['size'];
    $nombretmp =$_FILES['image']['tmp_name'];
    $tipo=$_FILES['image']['type'];
    $ext1=explode('.',$nombre);
    $ext=strtolower(end($ext1));
    $extpermitidas= array("jpeg","jpg","png");
    if(in_array($ext,$extpermitidas)=== false){
       echo "Tipo de archivo no valido";
       die();
    }
    if($tamaño > 1000000){
       echo "El tamaño del archivo supera el máximo permitido (1Mb)";
       die();
    }

    //directorio donde se guarda el archivo
    $directorio= "../imagenes/";
    //creamos nombre del archivo con un timestamp para actualizarlo en caso de edición de imagen
    $nom1="IMG".time();

    $nom=$nom1.".".$ext;
    $directorio=$directorio.$nom;
    if (move_uploaded_file($nombretmp,$directorio)){
        $url_img = $directorio;            
    }else{
        echo "Error, no se pudo subir el archivo";
        die();
    }
}


$nombre_comercial = $_POST['nombreComercial'];
$laboratorio = $_POST['laboratorio'];
$monodroga = $_POST['monodroga'];
$stock = intval($_POST['stock']);
$precio = floatval($_POST['precio']);
$cobertura_pami = intval($_POST['coberturaPami']);
$codigo_interno = $_POST['codigoInterno'];
$descuento_lista = intval($_POST['descuentoLista']);

$sql1="INSERT INTO items (nombre_comercial , laboratorio , monodroga , stock , precio , cobertura_pami, url_img,codigo_interno,descuento_lista) VALUES ('$nombre_comercial' , '$laboratorio' , '$monodroga' , '$stock' , '$precio' , '$cobertura_pami' , '$url_img', '$codigo_interno','$descuento_lista') ";
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