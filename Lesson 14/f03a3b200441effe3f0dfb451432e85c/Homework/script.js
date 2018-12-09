$(document).ready(function() {
    $('.text-center, .col-sm-7 ul li').on('click', function() {
        $('.overlay').animate(
            {
                opacity: "show"
            }
        );
        $('.modal').animate(
            {
                height: "show"
            }
        );
    });
    $('.close').on('click', function() {
        $('.overlay').animate(
            {
                opacity: "hide"
            }
        );
        $('.modal').animate(
            {
                height: "hide"
            }
        );
    });

});