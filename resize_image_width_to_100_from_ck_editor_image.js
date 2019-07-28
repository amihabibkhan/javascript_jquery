<div class="text">
    {!! $page_details->content !!}
</div>


<script>
    $(function () {
        var div_width = $('.text').width();
        $(".text img").css({
            'width' : '100%',
            'height' : 'auto'
        });
    });
</script>
