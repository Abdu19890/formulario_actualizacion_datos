// Espera a que el contenido de la página esté cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtiene el contenedor principal
    var container = document.getElementById("movil-container");

    // Crea 10 copos de nieve
    for (var i = 0; i < 10; i++) {
        createSnowflake(container);
    }

    // Repite la creación de copos de nieve cada 1 segundo durante 10 segundos
    var interval = setInterval(function () {
        createSnowflake(container);
    }, 1000);

    // Detén la creación después de 10 segundos
    setTimeout(function () {
        clearInterval(interval);
    }, 10000);
});

function createSnowflake(container) {
    // Crea un elemento div para representar un copo de nieve
    var snowflake = document.createElement("div");

    // Asigna una clase para aplicar estilos de copo de nieve
    snowflake.className = "snowflake";

    // Posiciona el copo de nieve en una ubicación aleatoria en el contenedor
    snowflake.style.left = Math.random() * container.offsetWidth + "px";
    snowflake.style.top = Math.random() * container.offsetHeight + "px";

    // Añade el copo de nieve al contenedor
    container.appendChild(snowflake);
}
