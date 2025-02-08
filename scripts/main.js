//hago esto porque el navegador no soporta webp (he probado con chrome, edge y firefox)
document.addEventListener("DOMContentLoaded", () => {
    let picture = document.querySelector("picture");
    let source = picture.querySelector("source");
    let img = picture.querySelector("img");

    if(source && img){
        console.log("Voy a forzar la imagen a WEBP: ", source.srcset);
        img.src = source.srcset; //esto es lo que reemplaza la imagen con la versión webp
    }
});
