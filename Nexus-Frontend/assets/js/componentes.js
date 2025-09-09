async function cargarComponentes(id, file) {
    try {
        const RESPUESTA = await fetch(file);
        if (!RESPUESTA.ok) throw new console.error("Error al cargar " + file);
        const HTML = await RESPUESTA.text();
        document.getElementById(id).innerHTML = HTML;
    } catch (error) {
        console.error(error);
    }
    

}