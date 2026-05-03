<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

//Se hace un request al servidor para saber si esta conectado 
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

//Se solicita de manera obligatoria la base de datos
require_once __DIR__ . "/db.php";

$data = json_decode(file_get_contents("php://input"), true);

//Se crea un isset que busca que la variable no este vacia o null si es asi genera un exeption que cierra el intento de entrar a la db
//actualmente esta se encuentra por seguridad ya que al momento del login los parametros se encuentran en request desde el htmml
if (!isset($data["correo"]) || !isset($data["password"])) {
    echo json_encode(["success" => 0, "message" => "Datos incompletos"]);
    exit;
}

/*Si los datos estan completos se realiza un Select que busca los datos ingresados en las dos casillas que tiene la tabla con limite 
maximo de busqueda de 1 para evitar que la base de datos se quede buscando indefinidamente (si tiene muchos registros) */
$correo = $data["correo"];
$password = $data["password"];

$stmt = $pdo->prepare(
    "SELECT id, correo, password 
     FROM usuarios 
     WHERE correo = :correo 
     LIMIT 1"
);
$stmt->bindParam(":correo", $correo);
$stmt->execute();

$user = $stmt->fetch();

//Aqui busca que haya un correo registrado en la base de datos, si no lo hay cierra directamente el intento
if (!$user) {
    echo json_encode(["success" => 0, "message" => "Usuario no encontrado"]);
    exit;
}
//Aqui se busca que la contraseña coincida con el hash unico que fue guardado al momento del registro, tengo entendido que los hash 
//Son unicos pero cada letra y o caracter genera una parte del string que es predecible
if (!password_verify($password, $user["password"])) {
    echo json_encode(["success" => 0, "message" => "Contraseña incorrecta"]);
    exit;
}

//Si los datos ingresados son correctos, se genera un codigo 1 que arroja en el apartado de login.jsx el acceso a otra seccion de la pagina
echo json_encode([
    "success" => 1,
    "message" => "Datos correctos",
    "user" => [
        "id" => $user["id"],
        "email" => $user["correo"]
    ]
]);
exit;