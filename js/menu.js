$.noConflict();

jQuery(document).ready( function () {
    jQuery("#menu_button").click( function (){
        if( jQuery("#lista").css("display") == "none" ){
            jQuery("#lista").fadeIn(100);
            jQuery("#resto").fadeIn(100);
            jQuery("html").css("overflowY", "hidden");
        }else{
            jQuery("#lista").fadeOut(100);
            jQuery("#resto").fadeOut(100);
            jQuery("html").css("overflowY", "scroll");
        }
    });
    jQuery("#exit").click( function (){
        jQuery("#lista").fadeOut(100);
        jQuery("#resto").fadeOut(100);
        jQuery("html").css("overflowY", "scroll");
    })
    jQuery("#resto").click( function (){
        jQuery("#lista").fadeOut(100);
        jQuery("#resto").fadeOut(100);
        jQuery("html").css("overflowY", "scroll");
    });
});