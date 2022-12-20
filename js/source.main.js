$(document).ready(function () {
    $("#loadmore-btn").click(function () {
        $("#hide").first().show(0, function showNext() {
            $(this).next("#hide").show(0, showNext);
        });
        $(".loadmore").hide();
    });
});