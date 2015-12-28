var cCms = {
    _store: {
        ajax: {},
        data: {},
        method: {},
        variable: {}
    },
    _all_popup: {},
    _show_popup: {},
    /*------ begin active popup -----*/
    _active_popup: function (popup_id, title, content, option) {
        if (cCms.is_exists(cCms._all_popup[popup_id])) {
            var popup = cCms.get_ele(popup_id);
            jQuery(popup).remove();
        }
        var config = {
            background_image: BASE_URL + 'uploads/default/popup/close.png',
            auto_hide: 0,
            position: 'default', /*default, center-center, top-left, top-center, top-right, bottom-left, bottom-center, bottom-right*/
            pos_type: 'absolute', /* fixed , absolute */
            type: 'show-hide', /*overlay, one-time, show-hide*/
            esc: true,
            overlay: {
                'background-color': '#000',
                'opacity': '0.8'
            },
            background: {
                'background-color': '#fff'
            },
            border: {
                'background-color': '#bebebe',
                'padding': '3px'
            },
            title: {
                'background-color': '#034b8a',
                'color': '#fff',
                'status': 1,
                'display': 'block'
            },
            content: {
                'width': '500px',
                'max-width': '99%',
                'height': 'auto',
                'padding': '20px',
                'display': 'block'
            },
            before: function () {
            },
            release: function () {
            },
            onclose: function () {
            }
        };
        if (cCms.is_exists(option)) {
            /*load config;*/
            for (var o in option) {
                if (!Object.prototype[o] && cCms.is_exists(option[o])) {
                    if (cCms.is_func(option[o])) {
                        config[o] = option[o];
                    } else if (cCms.is_obj(option[o])) {
                        for (var i in option[o]) {
                            var sub_opt = option[o];
                            if (!Object.prototype[i] && cCms.is_exists(sub_opt[i])) {
                                config[o][i] = sub_opt[i];
                            }
                        }
                    } else {
                        config[o] = option[o];
                    }
                }
            }
        }
        cCms._all_popup[popup_id] = config.type;
        /*get site dimension;*/
        var windowHeight = jQuery(window).height();
        var windowWidth = jQuery(window).width();
        var pageHeight = jQuery(document).height();
        var pageWidth = jQuery(document).width();
        /*create overlay popup;*/
        if (config.type === 'overlay') {
            var oPopup = jQuery('<div id=' + popup_id + '> </div>').css({
                'background-color': config.overlay['background-color'],
                'opacity': config.overlay['opacity'],
                'position': config.pos_type,
                'top': '0px',
                'left': '0px',
                'z-index': '99998',
                'width': '100%'
            }).height(pageHeight).appendTo('body');
        } else {
            /*detect close button type;*/
            var close_button, close_button_hover;
            if (config.title.status === 1) {
                close_button = 'popup-close-button pcb-blue-normal';
                close_button_hover = 'popup-close-button pcb-blue-hover';
            } else if (config.title.status === -1) {
                close_button = 'popup-close-button pcb-red-normal';
                close_button_hover = 'popup-close-button pcb-red-hover';
            } else {
                close_button = 'popup-close-button pcb-orange-normal';
                close_button_hover = 'popup-close-button pcb-orange-hover';
            }
            var oButton = jQuery('<div></div>').addClass(close_button).mouseover(function () {
                this.className = close_button_hover;
            }).mouseout(function () {
                this.className = close_button;
            }).click(function () {
                cCms._hide_popup(popup_id);
            });

            var sTitle = jQuery('<div style="fload: left;">' + title + '</div>');
            var oTitle = jQuery('<div></div>').css({
                'padding-left': '20px',
                'font-size': '16px',
                'font-weight': 'bold',
                'height': '33px',
                'line-height': '33px',
                'cursor': 'pointer',
                'display': config.title['display'],
                'color': config.title['color'],
                'background-color': config.title['background-color']
            }).append(oButton).append(sTitle).append('<div style="clear: both;"/></div>');

            var oContent = jQuery('<div id="popup-container" style="padding: 20px; color: black"></div>').css({
                'font-size': cCms.is_exists(config.content['font-size']) ? config.content['font-size'] : '14px',
                'height': config.content['height'],
                'padding': config.content['padding'],
                'display': config.content['display']
            });

            var content_popup_id = null;
            var content_popup_state = null;
            if (cCms.is_str(content)) {
                oContent.html(content);
            } else if (cCms.is_ele(content)) {
                /*store state content visibility;*/
                content_popup_id = content.id;
                content_popup_state = content.style.display;
                oContent.append(content);
                content.style.display = "block";
            }

            var blockContent = jQuery('<div style="background-color: ' + config.background['background-color'] + '"></div>');

            var oPopup = jQuery('<div id=' + popup_id + ' class="' + config.type + '"></div>')
                    .css({
                        'background-color': config.border['background-color'],
                        'position': config.pos_type,
                        'padding': config.border['padding'],
                        'opacity': '0.4',
                        'z-index': '99999',
                        'width': config.content['width']
                    }).append(blockContent.append(oTitle).append(oContent)).appendTo('body').fadeTo("slow", 1);

            /*store state of content popup;*/
            if (content_popup_id) {
                cCms.get_ele(popup_id).content_popup = {
                    id: content_popup_id,
                    state: content_popup_state
                };
            }

            config.before(oPopup);
            /*display popup;*/
            switch (config.position) {
                case 'top-left':
                    oPopup.css({'top': 0, 'left': 0});
                    break;
                case 'top-center':
                    oPopup.css({'top': 0, 'left': (pageWidth - oPopup.width()) / 2});
                    break;
                case 'top-right':
                    oPopup.css({'top': 0, 'right': 0});
                    break;
                case 'center-center':
                    oPopup.css({'top': (windowHeight - oPopup.height()) / 2, 'left': (pageWidth - oPopup.width()) / 2});
                    break;
                case 'bottom-left':
                    oPopup.css({'bottom': 0, 'left': 0});
                    break;
                case 'bottom-center':
                    oPopup.css({'bottom': 0, 'left': (pageWidth - oPopup.width()) / 2});
                    break;
                case 'bottom-right':
                    oPopup.css({'bottom': 0, 'right': 0});
                    break;
                case 'default':
                    oPopup.css({'top': cCms.get_top_page() + 92, 'left': (pageWidth - oPopup.width()) / 2});
                    break;
            }/* end of else;*/
        }

        /*auto hide;*/
        if (config.auto_hide) {
            setTimeout(function () {
                oPopup.fadeTo('show', 0, function () {
                    if (config.type !== 'show-hide') {
                        jQuery(this).remove();
                    } else {
                        jQuery(this).hide();
                    }
                });
            }, config.auto_hide);
        }

        cCms.get_ele(popup_id).onclose = config.onclose;
        config.release(oPopup);

        /*close when press exit esc*/
        if (config.esc && popup_id !== 'overlay-popup') {
            jQuery(document).keydown(
                    function (event) {
                        if (event.keyCode === 27) {
                            cCms.hide_popup(popup_id);
                        }
                    }
            );
        }
        jQuery(function ($) {
            $(window).scroll(cCms.fixedDivById(popup_id));
        });
        return oPopup;
    },
    /*----- end active popup ------*/
    _hide_popup: function (id) {
        var popup = cCms.get_ele(id);
        if (cCms.is_ele(popup)) {
            /*remove overlay popup if it exists;*/
            cCms.hide_popup(popup.overlay_popup);
            /*restore state visibility;*/
            if (cCms.is_exists(popup.content_popup)) {
                var content_popup = cCms.get_ele(popup.content_popup.id);
                content_popup.style.display = popup.content_popup.state;
            }
            /*remove chaos popup;*/
            if (cCms._all_popup[id] === 'one-time' || cCms._all_popup[id] === 'overlay') {
                cCms._all_popup[id] = null;
                delete cCms._all_popup[id];
                popup.parentNode.removeChild(popup);
            } else {
                popup.style.display = "none";
            }
            var onclose = popup.onclose;
            if (cCms.is_func(onclose)) {
                onclose();
            } else if (cCms.is_str(onclose)) {
                eval(onclose);
            }
        }
    }
};

/*check every thing;*/
cCms.fixedDivById = function (popup_id) {
    jQuery('#' + popup_id).css({'position': 'fixed'});
};
cCms.print_div = function (div_name) {
    var window_print = window.open(div_name, 'Print', 'height=100,width=80');
    window_print.document.write('<html><head><title>Print Document</title>');
    /*window_print.document.write('<link rel="stylesheet" href="' + BASE_URL + '/styles/default.css" type="text/css" />');*/
    window_print.document.write('</head><body >');
    var data = $("#" + div_name).html();
    window_print.document.write(data);
    window_print.document.write('</body></html>');
    window_print.print();
    window_print.close();
    return true;
};
cCms.is_arr = function (arr) {
    return (arr !== null && arr.constructor === Array);
};

cCms.is_str = function (str) {
    return (str && (/string/).test(typeof str));
};

cCms.is_func = function (func) {
    return (func !== null && func.constructor === Function);
};

cCms.is_num = function (num) {
    var num = Number(num);
    return (num !== null && !isNaN(num));
};

cCms.is_int = function (x) {
    var y = parseInt(x);
    if (isNaN(y)) {
        return false;
    }
    return x === y && x.toString() === y.toString();
};

cCms.is_obj = function (obj) {
    return (obj !== null && obj instanceof Object);
};

cCms.is_ele = function (ele) {
    return (ele && ele.tagName && ele.nodeType === 1);
};

cCms.is_exists = function (obj) {
    return (obj !== null && obj !== undefined && obj !== "undefined");
};

cCms.is_json = function (str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};

cCms.is_blank = function (str) {
    return (cCms.util_trim(str) === "");
};

cCms.is_phone = function (num) {
    return (/^(01([0-9]{2})|09[0-9])(\d{7})$/i).test(num);
};

cCms.is_email = function (str) {
    return (/^[a-z-_0-9\.]+@[a-z-_=>0-9\.]+\.[a-z]{2,3}$/i).test(cCms.util_trim(str));
};

cCms.is_username = function (value) {
    return (value.match(/^[0-9]/) === null) && (value.search(/^[0-9_a-zA-Z]*$/) > -1);
};

cCms.is_link = function (str) {
    return (/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/).test(cCms.util_trim(str));
};

cCms.is_image = function (imagePath) {
    var fileType = imagePath.substring(imagePath.lastIndexOf("."), imagePath.length).toLowerCase();
    return (fileType === ".gif") || (fileType === ".jpg") || (fileType === ".png") || (fileType === ".jpeg");
};

cCms.is_ff = function () {
    return (/Firefox/).test(navigator.userAgent);
};

cCms.is_ie = function () {
    return (/MSIE/).test(navigator.userAgent);
};

cCms.is_ie6 = function () {
    return (/MSIE 6/).test(navigator.userAgent);
};

cCms.is_ie7 = function () {
    return (/MSIE 7/).test(navigator.userAgent);
};

cCms.is_ie8 = function () {
    return (/MSIE 8/).test(navigator.userAgent);
};

cCms.is_chrome = function () {
    return (/Chrome/).test(navigator.userAgent);
};

cCms.is_opera = function () {
    return (/Opera/).test(navigator.userAgent);
};

cCms.is_safari = function () {
    return (/Safari/).test(navigator.userAgent);
};

/*working with ajax;*/
cCms.ajax_get = function () {
};
cCms.ajax_post = function () {
};
cCms.ajax_popup = function (url, method, param, callback, option) {
    if (!cCms.is_exists(url)) {
        return;
    }
    var data = '';
    var opt = {
        loading: (cCms.is_obj(option) && cCms.is_func(option.loading)) ? option.loading : cCms.show_loading,
        error: (cCms.is_obj(option) && cCms.is_func(option.error)) ? option.error : cCms.hide_loading
    };
    if (cCms.is_obj(param)) {
        for (var key in param) {
            if (Object.prototype[key])
                continue;
            data += '&' + key + '=' + param[key];
        }
    } else if (cCms.is_str(param)) {
        data = '&' + param;
    }
    var old_ajax = cCms._store.ajax[url];
    if (cCms.is_exists(old_ajax) && old_ajax === data) {
        return;
    } else {
        cCms._store.ajax[url] = data;
    }
    data += '&rand=' + Math.random();
    jQuery.ajax({
        beforeSend: opt.loading,
        url: BASE_URL + '/ajax/' + url,
        type: method ? method : 'POST',
        data: data,
        dataType: 'json',
        success: function (xhr) {
            cCms._store.ajax[url] = null;
            delete cCms._store.ajax[url];
            cCms.hide_loading();
            if (xhr && cCms.is_exists(xhr.intReturn)) {
                switch (xhr.intReturn) {
                    case -1:
                        cCms.show_popup_message(xhr.msg, "Thông báo lỗi!", -1);
                        break;
                    case 0:
                        cCms.show_popup_message(xhr.msg, "Cảnh báo", 0);
                        break;
                    case 1:
                        cCms.show_popup_message(xhr.msg, "Thông báo", 1);
                        break;
                }
            }
            if (cCms.is_exists(xhr.script)) {
                eval(xhr.script);
            }
            if (cCms.is_exists(callback)) {
                callback(xhr);
            }
        },
        error: function (xhr) {
            cCms._store.ajax[url] = null;
            delete cCms._store.ajax[url];
            opt.error();
            /*cCms.show_popup_message("Lỗi kết nối mạng", "Thông báo lỗi!", -1);*/
        }
    });
};

cCms.ajax_tab = function () {
};

cCms.show_loading = function (txt) {
    txt = cCms.is_str(txt) ? txt : 'Đang tải dữ liệu...';
    jQuery('.float_loading').remove();
    jQuery('body').append('<div class="float_loading" style="z-index:99999;">' + txt + '</div>');
    jQuery('.float_loading').fadeTo("fast", 0.9);
    if (!cCms.is_chrome()) {
        cCms.update_position();
        jQuery(window).scroll(cCms.updatePosition);
    }
};

cCms.update_position = function () {
    if (cCms.is_ie()) {
        jQuery('.mine_float_loading').css('top', jQuery(window).scrollTop());
    }
};

cCms.hide_loading = function () {
    jQuery('.float_loading').fadeTo("slow", 0, function () {
        jQuery(this).remove();
    });
};

//working with popup;
cCms.show_popup = function (popup_id, title, content, option) {
    cCms.hide_all_popup();
    cCms._active_popup(popup_id, title, content, option);
};

cCms.hide_popup = function (id) {
    cCms._hide_popup(id);
};

cCms.show_next_popup = function (popup_id, title, content, option) {
    cCms._active_popup(popup_id, title, content, option);
};

cCms.hide_all_popup = function (popup_id) {
    for (var i in cCms._all_popup) {
        if (Object.prototype[i])
            continue;
        if (popup_id !== i) {
            cCms._hide_popup(i);
        }
    }
};

cCms.show_overlay_popup = function (popup_id, title, content, option) {
    cCms.hide_all_popup(popup_id);
    cCms._active_popup('overlay-popup', '', '', {
        type: 'overlay',
        overlay: cCms.is_exists(option) ? option.overlay : null
    });
    cCms._active_popup(popup_id, title, content, option);
    cCms.get_ele(popup_id).overlay_popup = 'overlay-popup';/*store to remove;*/
    cCms.get_ele('overlay-popup').style.height = jQuery(document).height() + 92 + 'px';/*update height;*/
};

cCms.hide_overlay_popup = function (id) {
    cCms.hide_popup(id);
    //cCms.hide_popup('overlay-popup');
};


cCms.show_popup_message = function (message, title, type, width, height) {
    var bg_color;
    if (type === -1) {
        bg_color = '#ba0000';/* Error */
    } else if (type === 0) {
        bg_color = '#ec6f00';/* Nothing */
    } else {
        bg_color = '#034b8a';/* Done */
    }

    var id_overlay = cCms.get_uuid();
    cCms._active_popup(id_overlay, "", "", {
        type: "overlay",
        auto_hide: 3000,
        overlay: {
            'opacity': 0.3,
            'background-color': '#fff'
        }
    });

    var id_popup = cCms.get_uuid();
    cCms._active_popup(id_popup, title, message, {
        type: 'one-time',
        auto_hide: 10000,
        title: {
            'background-color': bg_color,
            'status': type
        },
        content: {
            'width': width ? width : '300px',
            'height': height ? height : 'auto',
            'max-width': '100%'
        }
    });
    cCms.get_ele(id_popup).overlay_popup = id_overlay;/*store to remove;*/
    cCms.get_ele(id_overlay).style.height = jQuery(document).height() + 'px';/*update height;*/
};

cCms.show_access_notify = function () {
    cCms.show_overlay_popup(
            "popup_access_notify",
            "Thông báo",
            cCms.get_ele("access_notify"),
            {
                title: {
                    'background-color': 'red',
                    'status': -1
                },
                content: {
                    width: '400px',
                    'max-width': '100%'
                }
            }
    );
};

cCms.confirm = function (message, callback, callback_data) {
    /*halm: update data for callback function */
    cCms.show_next_popup(
            "popup_confirm",
            "Xác nhận",
            cCms.join
            ('<div style="font-weight: bold; margin: 0 0 10px;">' + message + '</div>')
            ('<div align="center"><input type="button" value="Đồng ý" onclick="cCms.confirm_ok()" />&nbsp;&nbsp;&nbsp;')
            ('<input type="button" value="Hủy bỏ" onclick="cCms.hide_popup(\'popup_confirm\')" /></div>')(),
            {content: {width: "300px"}}
    );
    cCms._store.method["popup_confirm"] = callback;
    cCms._store.method["popup_confirm_data"] = callback_data;
};

cCms.confirm_ok = function () {
    cCms._store.method["popup_confirm"](cCms._store.method["popup_confirm_data"]);
    cCms.hide_popup("popup_confirm");
    cCms._store.method["popup_confirm"] = null;
    cCms._store.method["popup_confirm_data"] = null;
    delete cCms._store.method["popup_confirm"];
    delete cCms._store.method["popup_confirm_data"];
};

//Working with something;
cCms.util_trim = function (str) {
    return (/string/).test(typeof str) ? str.replace(/^\s+|\s+$/g, "") : "";
};

cCms.util_random = function (a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
};

cCms.get_ele = function (id) {
    return document.getElementById(id);
};

cCms.get_uuid = function () {
    return (new Date().getTime() + Math.random().toString().substring(2));
};

cCms.get_top_page = function () {
    if (cCms.is_exists(window.pageYOffset)) {
        return window.pageYOffset;
    }
    if (cCms.is_exists(document.compatMode) && document.compatMode !== 'BackCompat') {
        return document.documentElement.scrollTop;
    }
    if (cCms.is_exists(document.body)) {
        scrollPos = document.body.scrollTop;
    }
    return 0;
};

cCms.get_form = function (form_id) {
    var form = cCms.get_ele(form_id);
    if (!cCms.is_ele(form)) {
        return '';
    }
    var arr = [], inputs = form.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        var item = inputs[i];
        if (item.type !== 'button') {
            arr.push(item.name + "=" + encodeURIComponent(item.value));
        }
    }
    var selects = form.getElementsByTagName("select");
    for (var i = 0; i < selects.length; i++) {
        var item = selects[i], key = item.name, value = item.options[item.selectedIndex].value;
        arr.push(key + "=" + encodeURIComponent(value));
    }
    var textareas = form.getElementsByTagName("textarea");
    for (var i = 0; i < textareas.length; i++) {
        var item = textareas[i];
        arr.push(item.name + "=" + encodeURIComponent(item.value));
    }
    return arr.join("&");
};

cCms.submit_form = function(myfield,e){
    var keycode;
    if (window.event){
        keycode = window.event.keyCode;
    }else if (e){
        keycode = e.which;
    }else {
        return true;
    }
    if (keycode === 13){
        myfield.form.submit();
        return false;
    }else{
       return true;
    }
};



/*******************************************************************************/
/*******************************************************************************/
/*******************************************************************************/
/*******************************************************************************/

/*halm: fade image to hide loading*/
cCms.fadeImageLoading = function (obj, speed, width, height) {
    speed = speed ? speed : 400;
    jQuery(obj).fadeTo(speed, 1, function () {
        if (width) {
            jQuery(obj).parent().css({width: 'auto'});
        }
        if (height) {
            jQuery(obj).parent().css({height: 'auto'});
        }
    });
};

/* using to fix with for image; */
cCms.fix_width_element = function (obj, limit) {
    var width = jQuery(obj).width(),
            height = jQuery(obj).height(),
            max_width = limit || 468;
    if (width > max_width) {
        var ratio = (height / width);
        var new_width = max_width;
        var new_height = (new_width * ratio);
        jQuery(obj).height(new_height).width(new_width);
    }
};

/*redirect to url*/
cCms.redirect = function (url) {
    window.location = url;
};

/*show form error*/
cCms.raiseError = function (id, msg, focus, cl, icon) {
    if (focus) {
        jQuery(id).focus();
    }
    if (cl === undefined || cl === null || cl === '') {
        jQuery(id).addClass('error');
    } else {
        jQuery(id).removeClass('error');
    }
    var p = jQuery(id).parent();
    jQuery('.showErr', p).remove();
    if (icon) {
        jQuery('.showErrIconFalse', p).remove();
        jQuery('.showErrIconTrue', p).remove();
    }
    p.append((icon ? '<span class="showErrIcon' + (cl ? 'True' : 'False') + '"></span>' : '') + '<span class="pLeft5 showErr"><font color="' + (cl ? 'green' : 'red') + '">' + msg + '</font></span>');
};

/*close form error*/
cCms.closeErr = function (id, icon) {
    jQuery(id).removeClass('error');
    var p = jQuery(id).parent();
    jQuery('.showErr', p).remove();
    if (icon) {
        jQuery('.showErrIconFalse', p).addClass('showErrIconTrue').removeClass('showErrIconFalse');
    }
};

cCms.styleInputTxT = function () {
    jQuery(":text,:password").focus(function () {
        jQuery(this).addClass('active');
    });
    jQuery(":text,:password").blur(function () {
        jQuery(this).removeClass('active');
    });
};

/* function core connect */
String.prototype.E = function () {
    return cCms.get_ele(this);
};

cCms.join = function (str) {
    var store = [str];
    return function extend(other) {
        if (other !== null && 'string' === typeof other) {
            store.push(other);
            return extend;
        }
        return store.join('');
    };
};

cCms.nextNumber = (function () {
    var i = 0;
    return function () {
        return ++i;
    };
}());

cCms.showInputInline = function (obj, value) {
    if (jQuery('#inline_input', obj).html() === null) {
        obj.innerHTML = cCms.join('<input type="text" value="' + value.replace(/(<([^>]+)>)/ig, "") + '" id="inline_input" onblur="cCms.closeInputInline(this)" />')('<div class="hidden">' + obj.innerHTML + '</div>')();
        jQuery('#inline_input', obj).select().focus();
    }
};

cCms.closeInputInline = function (obj) {
    var parent = jQuery(obj).parent(), txt = jQuery('.hidden', parent).html();
    parent.html(txt);
};

cCms.numberOnly = function (myfield, e) {
    var key, keychar;
    if (window.event) {
        key = window.event.keyCode;
    }
    else if (e) {
        key = e.which;
    }
    else {
        return true;
    }
    keychar = String.fromCharCode(key);
    if ((key === null) || (key === 0) || (key === 8) || (key === 9) || (key === 13) || (key === 27)) {
        return true;
    }
    else if (("0123456789").indexOf(keychar) > -1) {
        return true;
    }
    return false;
};

cCms.fix_png = function (id) {
    if (navigator.appVersion.match(/MSIE [0-6]\./)) {
        jQuery(id).each(function () {
            var background_image = jQuery(this).css("backgroundImage");
            if (background_image !== 'none') {
                if (background_image.substring(4, 5) === '"') {
                    var img_src = background_image.substring(5, background_image.length - 2);
                } else {
                    var img_src = background_image.substring(4, background_image.length - 1);
                }
                jQuery(this).css({
                    'backgroundColor': 'transparent',
                    'backgroundImage': 'none',
                    'filter': "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='" + img_src + "')"
                });
            }
        });
    }
};

cCms.create3DText = function (id, deep, mainColor, overColor, left) {
    deep = deep ? deep : 1;
    var html = jQuery(id).html(),
            w = jQuery(id).width() + deep,
            h = jQuery(id).height() + deep,
            u = cCms.get_uuid(),
            c = '#txt3D' + u + ' .txt2DMain a{color:' + mainColor + '}#txt3D' + u + ' .txt2DOverlay a{color:' + overColor + '}';

    html = cCms.join()
            ('<div class="txt3D" id="txt3D' + u + '" style="position:relative;z-index:0;width:' + w + 'px;height:' + h + 'px;">')
            ('<div class="txt2DMain" style="position:absolute;z-index:3;top:0;left:' + (left ? 0 : '1px') + ';width:' + w + 'px;height:' + h + 'px;color:' + mainColor + '">' + html + '</div>')
            ('<div class="txt2DOverlay" style="position:absolute;z-index:1;top:' + deep + 'px;left:' + (left ? deep + 'px' : 0) + ';width:' + w + 'px;height:' + h + 'px;color:' + overColor + '">' + html + '</div>')
            ('</div>')();
    cCms.bindCSS(c);
    jQuery(id).html(html);
};

cCms.bindCSS = function (a) {
    var c = document.createElement("style");
    c.type = "text/css";
    document.getElementsByTagName("head")[0].appendChild(c);
    if (c.styleSheet)
        c.styleSheet.cssText = a;
    else
        c.appendChild(document.createTextNode(a));
};

cCms.ctrlGoStop = function () {
    var top = jQuery(window).scrollTop();
    /*Set goTop đối với Fix IE 7*/
    var heightelementa = jQuery('.go_top').height();
    if (top > 0) {
        if (cCms.is_ie6() || cCms.is_ie7()) {
            var height = jQuery(window).height();
            top = top + height;
            if (cCms.is_ie6()) {
                top -= 60;
            } else {
                top -= (height - heightelementa) / 2;
            }
            jQuery('.go_top').css('top', top);
        }
        jQuery('.go_top').show();
    } else {
        jQuery('.go_top').hide();
    }
};
cCms.goTopStart = function () {
    if (!cCms._store.variable.disableGotop) {
        jQuery('body').append('<a href="javascript:void(0)" title="Lên đầu trang" onclick="jQuery(\'html,body\').animate({scrollTop: 0},1000);" class="go_top" style="display:none"></a>');
        jQuery(window).scroll(function () {
            cCms.ctrlGoStop();
            if (cCms.is_ie6() || cCms.is_ie7()) {
                jQuery('.cmdFloat').css('position', 'absolute');
                cCms.header.floatActionTop();
            }
        });
        cCms.ctrlGoStop();
    }
};

cCms.error = {
    set: function (id, msg, width, cl) {
        msg = msg ? msg : '';
        width = width ? width : 430;
        var html = cCms.join
                ('<div class="my_msg" style="width: ' + width + 'px; color:red; margin: 5px auto 15px; padding:10px; background:rgb(255, 249, 215); border: 1px solid rgb(226, 200, 34); text-align: center; font-size: 15px;">')
                (msg)
                ('</div>')();
        if (cl) {
            jQuery('#cError', jQuery(cl)).html(html);
        } else {
            jQuery('#cError').html(html);
        }
        jQuery(id).addClass('error').focus();
    },
    close: function (id, cl) {
        if (cl) {
            jQuery('#cError', jQuery(cl)).html('');
        } else {
            jQuery('#cError').html('');
        }
        jQuery(id).removeClass('error');
    }
};

cCms.timerObject = {
    obj: {},
    counter: 0,
    now: TIME_NOW,
    clock_id: 0,
    go: function () {
        if (cCms.timerObject.counter > 0) {
            cCms.timerObject.countTime();
        }
    },
    start: function (id, container, time, is_day, type, run_class, start) {
        cCms.timerObject.obj[container] = {id: id, c: container, time: time, isDay: is_day ? 1 : 0, type: type ? type : 0, cl: run_class ? 1 : 0, start: start ? start : 0};
        cCms.timerObject.counter++;
    },
    countTime: function () {
        cCms.timerObject.now++;
        for (var i in cCms.timerObject.obj) {
            cCms.timerObject.displayTime(cCms.timerObject.obj[i].c);
        }
        cCms.timerObject.clock_id = setTimeout(function () {
            cCms.timerObject.countTime();
        }, 1000);
    },
    displayTime: function (id) {
        if (cCms.timerObject.obj[id].start > 0 && cCms.timerObject.obj[id].start > cCms.timerObject.now) {
            //ko lam gi ca
        } else {
            var time = cCms.timerObject.obj[id].time - cCms.timerObject.now, type = cCms.timerObject.obj[id].type,
                    hour_title = '',
                    min_title = '',
                    sec_title = '';
            if (time > 0) {
                var day = 0, hour = 0, min = 0, sec = 0;
                if (cCms.timerObject.obj[id].isDay) {
                    day = Math.floor(time / 86400);
                    time = time % 86400;
                    if (day > 0) {
                        if (type === 5) {
                            day = '<span>' + day + "</span>";
                        }
                        else {
                            day = day + ' ngày, ';
                        }
                    } else {
                        day = '';
                    }
                } else {
                    day = '';
                }
                switch (type) {
                    case 1:
                        hour_title = ' giờ ';
                        min_title = ' phút ';
                        sec_title = ' giây';
                        break;
                    case 2:
                        hour_title = 'h ';
                        min_title = "' ";
                        sec_title = 's';
                        break;
                    case 3:
                        hour_title = 'h: ';
                        min_title = "p: ";
                        sec_title = 's';
                        break;
                    case 4:
                        hour_title = ':';
                        min_title = "'";
                        sec_title = '&quot;';
                        break;
                    case 5:
                        hour_title = '';
                        min_title = "";
                        sec_title = '';
                        break;
                    default:
                        hour_title = 'h : ';
                        min_title = "p : ";
                        sec_title = '&quot;';
                        break;
                }
                hour = Math.floor(time / (60 * 60));
                min = Math.floor((time % (60 * 60)) / 60);
                sec = Math.floor(time - hour * 60 * 60 - min * 60);
                time = day;
                if (type === 5) {
                    time += '<span>' + (hour > 9 ? '' : '0') + (hour > 0 ? hour : 0) + hour_title + '</span>';
                    time += '<span>' + (min > 9 ? '' : '0') + (min > 0 ? min : 0) + min_title + '</span>';
                    time += '<span>' + ((sec > 9 && sec < 60) ? '' : '0') + ((sec > 0 && sec < 60) ? sec : 0) + sec_title + '</span>';
                }
                else {
                    time += (hour > 9 ? '' : '0') + (hour > 0 ? hour : 0) + hour_title;
                    time += (min > 9 ? '' : '0') + (min > 0 ? min : 0) + min_title;
                    if (sec_title !== '') {
                        time += ((sec > 9 && sec < 60) ? '' : '0') + ((sec > 0 && sec < 60) ? sec : 0) + sec_title;
                    }
                }

                if (cCms.timerObject.obj[id].cl === 1) {
                    jQuery('.' + cCms.timerObject.obj[id].c).html(time);
                } else {
                    jQuery('#' + cCms.timerObject.obj[id].c).html(time);
                }
                return true;
            }
        }
        return false;
    }
};

cCms.enter = function (id, cb) {
    if (cb) {
        if (!cCms.is_exists(cCms._store.variable['key_listener'])) {
            cCms._store.variable['key_listener'] = 0;
        }
        jQuery(id).keydown(
                function (event) {
                    if (event.keyCode === 13) {
                        cCms._store.variable['key_listener'] = setTimeout(cb, 10);
                    } else {
                        clearTimeout(cCms._store.variable['key_listener']);
                    }
                }
        );
    }
};
cCms.is_empty = function (obj) {
    var key;
    if (obj === "" || obj === 0 || obj === "0" || obj === null || obj === false || typeof obj === 'undefined') {
        return true;
    }

    if (typeof obj === 'object') {
        for (key in obj) {
            return false;
        }
        return true;
    }
    return false;
};
cCms.numberFormat = function (number, decimals, dec_point, thousands_sep) {
    var n = number, prec = decimals;
    n = !isFinite(+n) ? 0 : +n;
    prec = !isFinite(+prec) ? 0 : Math.abs(prec);
    var sep = (typeof thousands_sep === "undefined") ? '.' : thousands_sep;
    var dec = (typeof dec_point === "undefined") ? ',' : dec_point;
    var str = (prec > 0) ? n.toFixed(prec) : Math.round(n).toFixed(prec); /*fix for IE parseFloat(0.55).toFixed(0) = 0;*/
    var abs = Math.abs(n).toFixed(prec);
    var tmp, i;
    if (abs >= 1000) {
        tmp = abs.split(/\D/);
        i = tmp[0].length % 3 || 3;
        tmp[0] = str.slice(0, i + (n < 0)) + tmp[0].slice(i).replace(/(\d{3})/g, sep + '$1');
        str = tmp.join(dec);
    } else {
        str = str.replace(',', dec);
    }
    return str;
};

cCms.selectAllText = function (obj) {
    obj.focus();
    obj.select();
};

cCms.popupSite = function (id, title, content, close, opt) {
    close = close ? 'cCms.hide_overlay_popup(\'' + close + '\');' : '';
    var style = '';
    if (opt) {
        style = 'margin:0 auto;';
        if (cCms.is_exists(opt.width)) {
            style += 'width:' + opt.width + 'px;';
        }
        if (cCms.is_exists(opt.height)) {
            style += 'height:' + opt.height + 'px;';
        }
        style = ' style="' + style + '"';
    }
    return cCms.join
            ('<div class="classic-popup"' + style + '>')
            ('<div class="classic-popup-top"><div class="right"><div class="bg"></div></div></div>')
            ('<div class="classic-popup-main">')
            ('<div class="classic-popup-title">')
            ('<div class="fl">' + title + '</div>')
            ('<a href="javascript:void(0)" class="classic-popup-close" title="Đóng" onclick="cCms.hide_overlay_popup(\'' + id + '\');' + close + '">x</a>')
            ('<div class="c"></div>')
            ('</div>')
            ('<div class="classic-popup-content">' + content + '</div>')
            ('</div>')
            ('<div class="classic-popup-bottom"><div class="right"><div class="bg"></div></div></div>')
            ('</div>')
            ();
};

cCms.echo = function (str) {
    jQuery('body').append(prettyPrint(str));
};

cCms.reload = function () {
    location.reload();
};

cCms.hover = {
    mouse_clicked: '#fff',
    over: function (obj, color) {
        obj.style.backgroundColor = color;
    },
    out: function (obj) {
        if (jQuery(obj).hasClass('tr_clicked')) {
            obj.style.backgroundColor = cCms.hover.mouse_clicked;
        } else {
            obj.style.backgroundColor = '';
        }
    }
};

cCms.detectAndroid = function () {
};

cCms.checkbox = {
    conf: {select_color: '#FFFFEC', ctrl_c: 'chk_ctrl_c'},
    select: function (cl, ctrlChk, checkbox) {
        cCms.checkbox.color(checkbox);
        cCms.checkbox.ctrlChkStatus(cl, ctrlChk);
    },
    selectAll: function (cl, ctrlChk, status) {
        jQuery("." + cl).each(function () {
            this.checked = (status === undefined) ? !this.checked : status;
            cCms.checkbox.color(this);
        });
        cCms.checkbox.ctrlChkStatus(cl, ctrlChk);
    },
    ctrlChkStatus: function (cl, ctrlChk) {
        var status = true;
        jQuery("." + cl).each(function () {
            if (status && !this.checked) {
                status = false;
            }
        });
        jQuery('.' + ctrlChk).attr('checked', status);
    },
    color: function (checkbox) {
        var tr = jQuery(checkbox).parent().parent();
        if (checkbox.checked) {
            cCms.hover.c_clicked = cCms.checkbox.conf.select_color;
            tr.addClass('tr_clicked').css('backgroundColor', cCms.hover.c_clicked);
        } else {
            tr.removeClass('tr_clicked').css('backgroundColor', '');
        }
    },
    theme: {
        check_ctrl: function () {
            return cCms.join()
                    ('CHỌN:')
                    (' [ <a href="javascript:void(0);" onclick="cCms.checkbox.selectAll(\'checkall\',\'checkall_ctrl\',true)">Tất cả</a> ]')
                    (' [ <a href="javascript:void(0);" onclick="cCms.checkbox.selectAll(\'checkall\',\'checkall_ctrl\',false)">Bỏ chọn</a> ]')
                    (' [ <a href="javascript:void(0);" onclick="cCms.checkbox.selectAll(\'checkall\',\'checkall_ctrl\')">Chọn ngược lại</a> ]')
                    ();
        }
    }
};


cCms.stripUnicode = function (str) {
    var vi = [
        "à", "á", "ạ", "ả", "ã", "â", "ầ", "ấ", "ậ", "ẩ", "ẫ", "ă", "ằ", "ắ", "ặ", "ẳ", "ẵ",
        "è", "é", "ẹ", "ẻ", "ẽ", "ê", "ề", "ế", "ệ", "ể", "ễ",
        "ì", "í", "ị", "ỉ", "ĩ",
        "ò", "ó", "ọ", "ỏ", "õ", "ô", "ồ", "ố", "ộ", "ổ", "ỗ", "ơ", "ờ", "ớ", "ợ", "ở", "ỡ",
        "ù", "ú", "ụ", "ủ", "ũ", "ư", "ừ", "ứ", "ự", "ử", "ữ",
        "ỳ", "ý", "ỵ", "ỷ", "ỹ",
        "đ",
        "À", "Á", "Ạ", "Ả", "Ã", "Â", "Ầ", "Ấ", "Ậ", "Ẩ", "Ẫ", "Ă", "Ằ", "Ắ", "Ặ", "Ẳ", "Ẵ",
        "È", "É", "Ẹ", "Ẻ", "Ẽ", "Ê", "Ề", "Ế", "Ệ", "Ể", "Ễ",
        "Ì", "Í", "Ị", "Ỉ", "Ĩ",
        "Ò", "Ó", "Ọ", "Ỏ", "Õ", "Ô", "Ồ", "Ố", "Ộ", "Ổ", "Ỗ", "Ơ", "Ờ", "Ớ", "Ợ", "Ở", "Ỡ",
        "Ù", "Ú", "Ụ", "Ủ", "Ũ", "Ư", "Ừ", "Ứ", "Ự", "Ử", "Ữ",
        "Ỳ", "Ý", "Ỵ", "Ỷ", "Ỹ",
        "Đ"
    ];
    var vn = [
        "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a",
        "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e",
        "i", "i", "i", "i", "i",
        "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o",
        "u", "u", "u", "u", "u", "u", "u", "u", "u", "u", "u",
        "y", "y", "y", "y", "y",
        "d",
        "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A",
        "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E",
        "I", "I", "I", "I", "I",
        "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O",
        "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",
        "Y", "Y", "Y", "Y", "Y",
        "D"
    ];
    var i;
    for (i in vi) {
        str = str.replace(new RegExp(vi[i], 'g'), vn[i]);
    }
    return str;
};

cCms.safe_title = function (str) {
    var ret = cCms.stripUnicode(str);
    ret = ret.replace(/ /g, '-');
    ret = ret.replace(/[^a-z0-9-]/gi, '');
    ret = ret.replace(/-+/g, '-');
    ret = ret.replace(/((^-+)|(-+$))/g, '');
    if (ret === '') {
        ret = 'default';
    }
    return ret;
};

cCms.esc_attr = function (str) {
    var ret = str;
    function f(m) {
        var o = {"'": '&#39;', '"': '&quot;'};
        return o[m];
    }
    ret = ret.replace(/['"]/g, f);
    return ret;
};

cCms.CountDownText = function (field, max){
	if (field.val().length > max ){
		field.val(field.val().substring(0, max));
	}else {
		jQuery("."+field.attr('id')+"_count").html((max - field.val().length));
	}
}

cCms.CountUpText = function (field, max){
	if (field.val().length > max){
		field.val(field.val().substring(0, max));
	}else {
		jQuery("."+field.attr('id')+"_count").html((field.val().length));
	}
}