<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once __DIR__ . "/db.php";

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data["correo"]) || empty($data["correo"])) {
    echo json_encode([
        "success" => 0,
        "message" => "Correo requerido"
    ]);
    exit;
}

$correo = $data["correo"];

// Verificar si existe el usuario
$stmt = $pdo->prepare("SELECT id FROM usuarios WHERE correo = :correo LIMIT 1");
$stmt->execute([":correo" => $correo]);
$user = $stmt->fetch();

if (!$user) {
    echo json_encode([
        "success" => 0,
        "message" => "Correo no registrado"
    ]);
    exit;
}

// Generar token seguro
$token = bin2hex(random_bytes(32));
$expira = date("Y-m-d H:i:s", strtotime("+1 hour"));

// Guardar token
$stmt = $pdo->prepare("
    UPDATE usuarios 
    SET reset_token = :token, reset_expiration = :expira
    WHERE correo = :correo
");

$stmt->execute([
    ":token" => $token,
    ":expira" => $expira,
    ":correo" => $correo
]);

$isLocal = ($_SERVER['HTTP_HOST'] === 'localhost' || $_SERVER['REMOTE_ADDR'] === '127.0.0.1');

if ($isLocal) {
    $frontend_url = "http://localhost:3000";
} else {

    $frontend_url = "https://paginasamarillas.gt.tc";
}


$reset_link = "$frontend_url/reset-password?token=$token";

// 3. Enviar respuesta
echo json_encode([
    "success" => 1,
    "message" => "Link de recuperación generado",
    "reset_link" => $reset_link
]);
exit;


