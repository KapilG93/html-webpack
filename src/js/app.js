import 'bootstrap';

jQuery(document).ready(function () {
    /*sticky menu*/
    jQuery(document).on("scroll", function () {
        if (jQuery(document).scrollTop() > 0) {
            jQuery(".site-header").addClass("sticky");
        } else {
            jQuery(".site-header").removeClass("sticky");
        }
    });
});
