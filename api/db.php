<?php
//conexion con la base de datos que actualmente esta en localhost
$host = "localhost";
$db   = "paginasamarillas";
$user = "root";
$pass = "";
$charset = "utf8mb4";

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";

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