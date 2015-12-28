function responsive_filemanager_callback(field_id) {
    var url = jQuery('#' + field_id).val();
}

$(document).ready(function ($) {
    $('.iframe-btn').fancybox({
        'width': 880,
        'height': 570,
        'type': 'iframe',
        'autoScale': false
    });
    $('.submit-form').submit(function () {
        cCms.show_loading('Đang cập nhật dữ liệu');
        cCms.hide_loading();
    });
    $('#CheckAllCheckBox').click(function (event) {  //on click
        if (this.checked) { // check select status
            $('.itemCheckbox').each(function () { //loop through each checkbox
                this.checked = true;  //select all checkboxes with class "checkbox1"
            });
        } else {
            $('.itemCheckbox').each(function () { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"
            });
        }
    });
    if (location.hash) {
        $('a[href=' + location.hash + ']').tab('show');
    }
    $(document.body).on("click", "a[data-toggle]", function (event) {
        location.hash = this.getAttribute("href");
    });
});
$(window).on('popstate', function () {
    var anchor = location.hash || $("a[data-toggle=tab]").first().attr("href");
    $('a[href=' + anchor + ']').tab('show');
});

