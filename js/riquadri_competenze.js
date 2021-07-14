$.noConflict();

function mostra_descrizione(oggetto){
    let myElement = document.getElementById('descrizione_frame');
    let pageHeight = window.innerHeight;
    let myElementHeight = myElement.offsetHeight;
    
    myElement.src = "competenze/" + oggetto.id + ".html";
    myElement.style.top = (pageHeight / 2) - (myElementHeight / 2) + "px";
    document.getElementById('competenza_exit').style.top = (pageHeight / 2 - 1) - (myElementHeight / 2 - 1) + "px";
    jQuery(document).ready( function () {
        jQuery("html").css("overflowY", "hidden");
        jQuery("#competenza_descrizione").fadeIn(100);
        jQuery("#competenza_descrizione").css("display", "flex");

        jQuery("#competenza_descrizione").click( function () {
            jQuery("#competenza_descrizione").fadeOut(100);
            jQuery("html").css("overflowY", "scroll");
            jQuery("descrizione_frame").src = "#";
        });

        jQuery("#competenza_exit").click( function () {
            jQuery("#competenza_descrizione").fadeOut(100);
            jQuery("html").css("overflowY", "scroll");
            jQuery("descrizione_frame").src = "#";
        });
    });
}