$.noConflict();

function avvia_menu(){
    jQuery(document).ready( function () {
        jQuery("#lista").fadeIn(100);
        jQuery("#resto").fadeIn(100);
            
        jQuery("#exit").click( function (){
            jQuery("#lista").fadeOut(100);
            jQuery("#resto").fadeOut(100);
        })
        jQuery("#resto").click( function (){
            jQuery("#lista").fadeOut(100);
            jQuery("#resto").fadeOut(100);
        });
    });
}