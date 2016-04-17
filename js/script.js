/**
 * Created by briancho on 4/16/16.
 */
$( document ).ready(function() {
    $('a.right').on('click', function(e) {
        e.preventDefault();
        $('.carousel').carousel('next');
    });
    $('a.left').on('click', function(e) {
        e.preventDefault();
        $('.carousel').carousel('prev');

    });
    $('.carousel').carousel('pause');
});