<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $correo = $_POST["correo"];
    $provincia = $_POST["provincia"];
    $codigo_postal = $_POST["codigo-postal"];

    // Guardar en un archivo CSV
    $file = fopen("datos_formulario.csv", "a"); // "a" para abrir el archivo en modo añadir
    fputcsv($file, [$correo, $provincia, $codigo_postal]);
    fclose($file);
}
?>
