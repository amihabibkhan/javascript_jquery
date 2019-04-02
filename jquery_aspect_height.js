$(function () {
    var div_width = $('#get_width').width();
    var div_height = div_width * 56 /100;
    $('#video_iframe').css({ 'height' : div_height + 'px'});
});