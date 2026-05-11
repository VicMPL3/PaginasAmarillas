<?php
// 1. Encabezados para permitir que React (puerto 3000) reciba los datos
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// 2. Importar tu archivo de conexión centralizada
require_once "db.php"; 

try {
    // 3. Consulta SQL (Ajusta 'anuncios' al nombre real de tu tabla)
    // Usamos ORDER BY para que los anuncios más nuevos aparezcan primero
    $query = "SELECT * FROM anuncios ORDER BY id DESC";
    $result = $conn->query($query);

    $anuncios = [];

    if ($result && $result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $anuncios[] = $row;
        }
    }

    // 4. Enviar los datos en formato JSON que espera getAds() en React
    echo json_encode($anuncios);

} catch (Exception $e) {
    // En caso de error, enviar un mensaje claro
    http_response_code(500);
    echo json_encode(["error" => "Error al obtener anuncios: " . $e->getMessage()]);
}

// Opcional: cerrar la conexión si db.php no lo hace automáticamente
$conn->close();
?>