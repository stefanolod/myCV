$.noConflict();

function mostra_foto_estesa(){
    jQuery(document).ready( function () {
        jQuery("html").css("overflowY", "hidden");
        jQuery("#foto_profilo_div").fadeIn(100);
        jQuery("#foto_profilo_div").css("display", "flex");
        jQuery("#foto_profilo_div").click( function () {
            jQuery("#foto_profilo_div").fadeOut(100);
            jQuery("html").css("overflowY", "scroll");
            jQuery("#foto_profilo_frame").src = "#";
        });
        jQuery("#competenza_exit").click( function () {
            jQuery("#foto_profilo_div").fadeOut(100);
            jQuery("html").css("overflowY", "scroll");
            jQuery("#foto_profilo_frame").src = "#";
        });
    });
}