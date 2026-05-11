<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

include 'db.php'; 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario_id = $_POST['usuario_id'];
    $titulo = $_POST['titulo'];
    $descripcion = $_POST['descripcion'];
    $tipo = $_POST['tipo'];
    
    
    $file = $_FILES['imagen'];
    $fileName = time() . "_" . basename($file['name']);
    $targetPath = "../uploads/" . $fileName; // Crea una carpeta llamada 'uploads' en la raíz

    if (!is_dir('../uploads')) {
        mkdir('../uploads', 0777, true);
    }

    if (move_uploaded_file($file['tmp_name'], $targetPath)) {
        $query = "INSERT INTO anuncios (usuario_id, titulo, descripcion, tipo, imagen_url) VALUES (?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("issss", $usuario_id, $titulo, $descripcion, $tipo, $fileName);

        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Anuncio publicado"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Error en BD"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Error al subir imagen"]);
    }
}
?>