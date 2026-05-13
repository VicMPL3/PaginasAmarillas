<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once "db.php"; 

try {
    // 1. Preparar y ejecutar la consulta
    $query = "SELECT * FROM anuncios ORDER BY id DESC";
    $stmt = $pdo->prepare($query);
    $stmt->execute();

    // 2. Obtener todos los resultados como un array asociativo
    $anuncios = $stmt->fetchAll();

    // 3. Enviar respuesta (si está vacío, devolverá un array [] vacío, lo cual está bien)
    echo json_encode($anuncios);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "error" => "Error al obtener anuncios",
        "details" => $e->getMessage()
    ]);
}
?>