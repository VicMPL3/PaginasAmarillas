<?php
//conexion con la base de datos para que ella misma detecte si esta en local o en produccion
$isLocal = ($_SERVER['HTTP_HOST'] === 'localhost' || $_SERVER['REMOTE_ADDR'] === '127.0.0.1');

if ($isLocal) {
    $host = 'localhost';
    $db   = 'paginasamarillas';
    $user = 'root';
    $pass = '';

} else {
    // Configuración de PRODUCCIÓN (Suele fallar aquí)
    $host = 'sql205.infinityfree.com'; 
    $db   = 'if0_41821150_paginasamarillas';
    $user = 'if0_41821150';
    $pass = 'bCfxOAhuPEOS1Ga';
}

$dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";

$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

//Se realiza el try para poder enlazar con la base de datos 
try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
    echo json_encode([
        "success" => 0,
        "message" => $e->getMessage()
    ]);
    exit;
}