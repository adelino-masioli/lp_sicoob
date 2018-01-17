function loadVideo(video) {
    $(".loadbigvideo").html('');
    $('.loading').fadeIn();
    var iframe = '<iframe lass="embed-responsive-item" src=https://www.youtube.com/embed/'+video+'?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    $('.loading').fadeOut();
    $(".loadbigvideo").html(iframe);
    return false;
}


$('.collapse').on('show.bs.collapse', function () {
    $('.collapse.in').each(function(){
        $(this).collapse('hide');
    });
});
$('.collapse').collapse({
    toggle: false
})