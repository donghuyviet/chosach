var tinymce_config = {
	language : 'vi_VN',
    selector: "textarea.ctinymce",
    theme: "modern",
    plugins: [
        "advlist autolink lists link image charmap print preview hr anchor pagebreak",
        "searchreplace wordcount visualblocks visualchars code fullscreen",
        "insertdatetime media nonbreaking save table contextmenu directionality",
        "emoticons paste textcolor colorpicker textpattern"
    ],
    toolbar1: "styleselect | forecolor backcolor | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media | print preview code fullscreen | undo redo",
    image_advtab: true,
    image_class_list: [
        {title: 'Image Responsive', value: 'image-responsive image-lightbox'},
        {title: 'Non class', value: ''}
    ],
    external_filemanager_path: BASE_URL + 'filemanager/',
    filemanager_access_key: FILE_MANAGER_KEY,
    filemanager_crossdomain: true,
    external_plugins: {
        'filemanager' : BASE_URL + 'filemanager/plugin.js'
    },
    autoresize_min_height: 400
};

tinymce.init(tinymce_config);