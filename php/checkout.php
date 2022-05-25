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

$cart = $_POST['cart'];
echo("Cart echo: ". $cart);
$cart_decoded = json_decode($cart,true);
$id_cuenta = $_POST['idCuenta'];
$descuento = $_POST['descuento'];




$sql1="INSERT INTO pedidos (id_cliente , descuento_aplicado) VALUES ('$id_cuenta' , '$descuento')";
$ejecucionSQL1= $conexionPDO->prepare($sql1); 
if ($ejecucionSQL1 ->execute()){
    echo "Datos guardados correctamente";
    $sql2 = "SELECT id FROM pedidos order by id desc limit 1 WHERE id_cliente = '$id_cuenta'";
    $ejecucionSQL2= $conexionPDO->prepare($sql2);
    $ejecucionSQL2 ->execute();
    $id_pedido = $ejecucionSQL2 ->fetch();
    for($z=0;$z<count($cart_decoded);$z++){
       $quantity = $cart_decoded[$z]["quantity"];
       $id_item = $cart_decoded[$z]["id"];
       $sql2 = "INSERT INTO detalle_pedidos (id_pedido,id_item,cantidad) VALUES ('$id_pedido', '$id_item','$quantity')";
       $ejecucionSQL2= $conexionPDO->prepare($sql2);
       $ejecucionSQL2 ->execute();
    }

}
else{echo "Error al guardar datos";
    die();
}






$email_user = "soporte_sistema@drogueriadelsol.com";
$email_password = "S0P0RT3s1s29";
$host = "a4000402.ferozo.com";

$bad = array("content-type","bcc:","to:","cc:","href");

//Correo a Empresa

$the_subject = utf8_decode("Pedido Droguería Del Sol");
$the_title = utf8_decode("Pedido Droguería Del Sol");
$address_to = "mf_arias@yahoo.com";
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
$phpmailer->Body .= "<p style='margin:0px'>Pedido: </p>";
for($z=0;$z<count($cart_decoded);$z++){
       $quantity = $cart_decoded[$z]["quantity"];
       $phpmailer->Body .= "<p style='margin:0px;margin-top:20px;'>Cantidad: ". $cart_decoded[$z]["quantity"] ." </p>";
       $phpmailer->Body .= "<p style='margin:0px'>Nombre Comercial: ". $cart_decoded[$z]["nombreComercial"] ." </p>";
       $phpmailer->Body .= "<p style='margin:0px'>Laboratorio: ". $cart_decoded[$z]["laboratorio"] ." </p>";
       $phpmailer->Body .= "<p style='margin:0px'>Monodroga: ". $cart_decoded[$z]["monodroga"] ." </p>";
}

$phpmailer->IsHTML(true);

$phpmailer->Send();





$conexionPDO = null;
$sql = null;
$sql1 = null;

die();
?>