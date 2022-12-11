$(document).ready(function () {
    $('.hover-icons').mouseover(function () { 
        var src = $('img', this).attr('data-gif');
        $('img', this).attr('src', src);
    });
    $('.hover-icons').mouseleave(function () { 
        var src = $('img', this).attr('data-src');
        $('img', this).attr('src', src);
    });
});