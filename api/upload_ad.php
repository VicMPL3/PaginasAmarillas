<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

require_once 'db.php'; 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $usuario_id = $_POST['usuario_id'] ?? null;
        $titulo = $_POST['titulo'] ?? '';
        $descripcion = $_POST['descripcion'] ?? '';
        $tipo = $_POST['tipo'] ?? '';
        
        if (!isset($_FILES['imagen'])) {
            throw new Exception("No se recibió ninguna imagen.");
        }

        $file = $_FILES['imagen'];
        $fileName = time() . "_" . basename($file['name']);
        
        // Usamos una ruta absoluta para evitar problemas en producción
        $targetDir = __DIR__ . "/../uploads/";
        $targetPath = $targetDir . $fileName;

        if (!is_dir($targetDir)) {
            mkdir($targetDir, 0777, true);
        }

        if (move_uploaded_file($file['tmp_name'], $targetPath)) {
            // Sintaxis PDO con placeholders (?)
            $query = "INSERT INTO anuncios (usuario_id, titulo, descripcion, tipo, imagen_url) VALUES (?, ?, ?, ?, ?)";
            $stmt = $pdo->prepare($query);
            
            if ($stmt->execute([$usuario_id, $titulo, $descripcion, $tipo, $fileName])) {
                echo json_encode(["status" => "success", "message" => "Anuncio publicado"]);
            } else {
                throw new Exception("Error al insertar en la base de datos.");
            }
        } else {
            throw new Exception("Error al mover el archivo a la carpeta uploads.");
        }
    } catch (Exception $e) {
        echo json_encode(["status" => "error", "message" => $e->getMessage()]);
    }
}
?>