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

if (
    !isset($data["token"]) || empty($data["token"]) ||
    !isset($data["password"]) || empty($data["password"])
) {
    echo json_encode([
        "success" => 0,
        "message" => "Datos incompletos"
    ]);
    exit;
}

$token = $data["token"];
$newPassword = password_hash($data["password"], PASSWORD_BCRYPT);

// Validar token
$stmt = $pdo->prepare("
    SELECT id FROM usuarios 
    WHERE reset_token = :token 
    AND reset_expiration > NOW()
    LIMIT 1
");

$stmt->execute([":token" => $token]);
$user = $stmt->fetch();

if (!$user) {
    echo json_encode([
        "success" => 0,
        "message" => "Token inválido o expirado"
    ]);
    exit;
}

// Actualizar contraseña
$stmt = $pdo->prepare("
    UPDATE usuarios 
    SET password = :password,
        reset_token = NULL,
        reset_expiration = NULL
    WHERE id = :id
");

$stmt->execute([
    ":password" => $newPassword,
    ":id" => $user["id"]
]);

echo json_encode([
    "success" => 1,
    "message" => "Contraseña actualizada correctamente"
]);
exit;