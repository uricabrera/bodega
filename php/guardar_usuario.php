<?php
//conexion
    include_once '../php/conexion1.php';
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require 'Exception.php';
    require 'PHPMailer.php';
    require 'SMTP.php';
    $conexionPDO= new PDO("mysql:host=$servidor;dbname=$bd;charset=UTF8",$usuario,$clave);
    session_start();

session_start();
    if (empty($_SESSION['IDSesion'])) {
    // Agregar luego cuando armemos sesión
   //     echo "Debe iniciar Sesion";
   //     die();
    }
//$idUsuario = $_SESSION['IDSesion'];
//$PermiteEdicion=$_SESSION['PermisoEdicion'];

$correo_actualizado = $_POST['email'];
$token_actualizado = $_POST['password'];
$nombre_farmacia_actualizado = $_POST['nombreFarmacia'];
$razon_social_actualizado = $_POST['razonSocial'];
$nombre_apellido_contacto_actualizado = $_POST['nombreApellidoContacto'];
$telefono_contacto_actualizado = $_POST['telefonoContacto'];
$whatsapp_contacto_actualizado = $_POST['whatsappContacto'];
$direccion_actualizado = $_POST['direccion'];
$provincia_actualizado = $_POST['provincia'];
$ciudad_actualizado = $_POST['ciudad'];
$validate_actualizado = 0;
$admin_actualizado = 0;

$token_actualizado_hash = sha1($token_actualizado);
$token_validate_actualizado = bin2hex(openssl_random_pseudo_bytes(16));


$sptm = $conexionPDO->prepare("SELECT correo FROM clientes WHERE correo = '$correo_actualizado'");
$sptm->execute();

if($sptm->rowCount() > 0){
    $sql2 = "UPDATE clientes SET correo_actualizado = '$correo_actualizado', token_actualizado = '$token_actualizado_hash', nombre_farmacia_actualizado = '$nombre_farmacia_actualizado', razon_social_actualizado = '$razon_social_actualizado', nombre_apellido_contacto_actualizado = '$nombre_apellido_contacto_actualizado', telefono_contacto_actualizado = '$telefono_contacto_actualizado', whatsapp_contacto_actualizado = '$whatsapp_contacto_actualizado', direccion_actualizado = '$direccion_actualizado', provincia_actualizado = '$provincia_actualizado', ciudad_actualizado = '$ciudad_actualizado', validate_actualizado = 0 , admin_actualizado = 0, token_validate_actualizado = '$token_validate_actualizado'";
    $ejecucionSQL2 = $conexionPDO->prepare($sql2);
     if ($ejecucionSQL2 ->execute()){
        echo "Datos guardados correctamente";
     }
      else{echo "Error al guardar datos";
           die();
     }
} else {
    $sql1="INSERT INTO clientes (correo_actualizado , token_actualizado , nombre_farmacia_actualizado , 
    razon_social_actualizado , nombre_apellido_contacto_actualizado , telefono_contacto_actualizado , 
    whatsapp_contacto_actualizado , direccion_actualizado , provincia_actualizado , ciudad_actualizado , 
    validate_actualizado , admin_actualizado , token_validate_actualizado ) VALUES ('$correo_actualizado' , 
    '$token_actualizado_hash' , '$nombre_farmacia_actualizado' , '$razon_social_actualizado' , 
    '$nombre_apellido_contacto_actualizado' , '$telefono_contacto_actualizado' , '$whatsapp_contacto_actualizado' , 
    '$direccion_actualizado' , '$provincia_actualizado' , '$ciudad_actualizado' , $validate_actualizado , 
     $admin_actualizado , '$token_validate_actualizado')";
     $ejecucionSQL1= $conexionPDO->prepare($sql1); 
     if ($ejecucionSQL1 ->execute()){
        echo "Datos guardados correctamente";
     }
      else{echo "Error al guardar datos";
           die();
     }
}





$email_user = "soporte_sistema@drogueriadelsol.com";
$email_password = "S0P0RT3s1s29";
$host = "a4000402.ferozo.com";

$bad = array("content-type","bcc:","to:","cc:","href");

//Correo a Empresa

$the_subject = utf8_decode("Verifica tu cuenta de Droguería Del Sol");
$the_title = utf8_decode("Verifica tu cuenta de Droguería Del Sol");
$address_to = $correo_actualizado;
$from_name = "Droguería Del Sol";

$phpmailer = new PHPMailer();

// ---------- datos de la cuenta de Gmail -------------------------------
$phpmailer->Username = $email_user;
$phpmailer->Password = $email_password; 
//-----------------------------------------------------------------------
// $phpmailer->SMTPDebug = 1;
$phpmailer->SMTPSecure = 'ssl';
$phpmailer->Host = $host;
$phpmailer->Port = 465;
$phpmailer->IsSMTP(); // use SMTP
$phpmailer->SMTPAuth = true;

$phpmailer->setFrom($phpmailer->Username,$from_name);
$phpmailer->AddAddress($address_to); // recipients email

//$phpmailer->AddEmbeddedImage('media/logo2.png', 'logo_2u');

$phpmailer->Subject = $the_subject; 
//$phpmailer->Body .="<img style='width:100px' src='cid:logo_2u'/>";
$phpmailer->Body .="<h1 style='color:".$color."'>".$the_title."</h1>";
$phpmailer->Body .= "<p style='margin:0px'>Codigo: ".utf8_decode(str_replace($bad,"",$token_validate_actualizado))."</p>";

$phpmailer->IsHTML(true);

$phpmailer->Send();





$conexionPDO = null;
$sql = null;
$sql1 = null;

die();
?>