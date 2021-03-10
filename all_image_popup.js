// have to use featherlight js to work this code
// all image of the whole website will effected by this
// so have to handle this carefully
// may be you can use this with a specific class in img tag


jQuery(document).ready(function($) {
    $('img').replaceWith(function () {
        const img_url = $(this).attr("src")
        return '<a data-featherlight="'+ img_url +'" href="#"><img src="'+ img_url +'" /></a>'
    });
})
