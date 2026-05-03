<?php
ini_set('display_errors', 0);
error_reporting(0);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

//Conexion con la base de datos, requiere de caracter obligatorio
require_once __DIR__ . "/db.php";

$data = json_decode(file_get_contents("php://input"), true);

//Datos que actualmente tiene la tabla en la base de datos y son requeridos para realizar el POST
$required = [
    "nombres",
    "apellidos",
    "cedula",
    "fecha_nacimiento",
    "telefono",
    "correo",
    "password"
];

//Este foreach se encarga de realizar la peticion a la pagina si algun campo requerido se encuentra vacio y de este modo evitar malos ingresos
foreach ($required as $field) {
    if (!isset($data[$field]) || empty($data[$field])) {
        echo json_encode([
            "success" => 0,
            "message" => "Campo faltante: $field"
        ]);
        exit;
    }
}

//En este apartado la contraseña que fue ingresada por el usuario es convertida a un string de caracterez imposibles de comprender
//este se conoce como hash y solo es entendible mediante lenguaje maquina
$hashedPassword = password_hash($data["password"], PASSWORD_BCRYPT);

/*Se realiza un try que realiza el post de los datos obtenidos mediante una query de sql  */
try {
    $stmt = $pdo->prepare("
        INSERT INTO usuarios
        (nombres, apellidos, cedula, fecha_nacimiento, telefono, correo, password)
        VALUES (:nombres, :apellidos, :cedula, :fecha_nacimiento, :telefono, :correo, :password)
    ");

    $stmt->execute([
        ":nombres" => $data["nombres"],
        ":apellidos" => $data["apellidos"],
        ":cedula" => $data["cedula"],
        ":fecha_nacimiento" => $data["fecha_nacimiento"],
        ":telefono" => $data["telefono"],
        ":correo" => $data["correo"],
        ":password" => $hashedPassword
    ]);
//Si la base de datos logro ingresar todos los datos correctamente genera un codigo de respuesta 1 
    echo json_encode([
        "success" => 1,
        "message" => "Usuario registrado correctamente"
    ]);
    exit;
//De lo contrario genera una exepcion de error y se cierra el try de POST
} catch (PDOException $e) {
    echo json_encode([
        "success" => 0,
        "message" => "Error al registrar usuario"
    ]);
    exit;
}
