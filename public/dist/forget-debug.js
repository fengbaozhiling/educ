define("educate/educate/1.0.0/forget-debug", [ "./login-debug", "./dialog/1.0.0/dialog-plus-debug", "./dialog/1.0.0/dialog-debug", "./dialog/1.0.0/popup-debug", "./dialog/1.0.0/dialog-config-debug", "./dialog/1.0.0/drag-debug", "./formvalidat/1.0.0/form_and_validation-debug" ], function(require, exports, module) {
    var login = require("./login-debug");
    var dialog = require("./dialog/1.0.0/dialog-plus-debug");
    var form = require("./formvalidat/1.0.0/form_and_validation-debug");
    //声明登录窗口
    var forgetbox, phoneStep2, phoneStep3, emailStep2, emailStep4;
    var forgethtml = null, phonehtml2 = null, phpnehtml3 = null, emailtml2 = null, emailtml4 = null;
    forgetbox = function() {
        var b = null;
        if (forgethtml == null) {
            forgethtml = $.ajax({
                type: "GET",
                url: SITEURL + "ajax/forget-step-1.php",
                async: false,
                dataType: "html"
            }).responseText;
        }
        b = dialog({
            id: "forgetbox",
            title: "忘记密码",
            content: forgethtml,
            width: 520,
            padding: 0
        });
        return b;
    };
    phoneStep2 = function() {
        var b = null;
        if (phonehtml2 == null) {
            phonehtml2 = $.ajax({
                type: "GET",
                url: SITEURL + "ajax/forget-step-phone-2.php",
                async: false,
                dataType: "html"
            }).responseText;
        }
        b = dialog({
            id: "box_forgt_phone_2",
            title: "手机找回-修改密码",
            content: phonehtml2,
            width: 520,
            padding: 0
        });
        return b;
    };
    phoneStep3 = function() {
        var b = null;
        if (phpnehtml3 == null) {
            phpnehtml3 = $.ajax({
                type: "GET",
                url: SITEURL + "ajax/forget-step-phone-3.php",
                async: false,
                dataType: "html"
            }).responseText;
        }
        b = dialog({
            id: "box_forgt_phone_3",
            title: "手机找回-修改成功",
            content: phpnehtml3,
            okValue: "返回登录框",
            ok: function() {
                var that = this;
                that.close().remove();
                login.loginbox().showModal();
                return false;
            },
            width: 520,
            padding: 0
        });
        return b;
    };
    emailStep2 = function() {
        var b = null;
        if (emailtml2 == null) {
            emailtml2 = $.ajax({
                type: "GET",
                url: SITEURL + "ajax/forget-step-email-2.php",
                async: false,
                dataType: "html"
            }).responseText;
        }
        b = dialog({
            id: "box_forgt_email_2",
            title: "邮箱找回-确认邮箱",
            content: emailtml2,
            okValue: "登录邮箱",
            ok: function() {
                //写上登录邮箱的JS
                return false;
            },
            width: 520,
            padding: 0
        });
        return b;
    };
    emailStep4 = function() {
        var b = null;
        if (emailtml4 == null) {
            emailtml4 = $.ajax({
                type: "GET",
                url: SITEURL + "ajax/forget-step-email-4.php",
                async: false,
                dataType: "html"
            }).responseText;
        }
        b = dialog({
            id: "box_forgt_email_2",
            title: "邮箱找回-修改成功",
            content: emailtml4,
            okValue: "返回登录框",
            ok: function() {
                var that = this;
                that.close().remove();
                login.loginbox().showModal();
                return false;
            },
            width: 520,
            padding: 0
        });
        return b;
    };
    $(document).on("click", "#j-forgetab span", function() {
        var rel = $(this).attr("rel");
        $(this).addClass("crent").siblings().removeClass("crent");
        $("." + rel).show().siblings(".forgetbox").hide();
        $("." + rel).show().siblings(".forgtstep").hide();
    });
    $(document).on("click", "#j-forget", function() {
        login.loginbox().close().remove();
        forgetbox().showModal();
        form.form_valid();
        EDUCAT.placeholder("input");
        return false;
    }).on("click", "#j-fgclose", function() {
        forgetbox().close().remove();
        return false;
    }).on("click", "a[data='j-backloginbox']", function() {
        login.loginbox().showModal();
        forgetbox().close().remove();
        return false;
    }).on("click", "#forgt_phone_1", function() {
        phoneStep2().close().remove();
        //通过手机找回
        forgetbox().showModal();
        form.form_valid();
        return false;
    }).on("click", "#forgt_phone_2", function() {
        forgetbox().close().remove();
        //通过手机找回
        phoneStep2().showModal();
        form.form_valid();
        return false;
    }).on("click", "#forgt_phone_3", function() {
        phoneStep2().close().remove();
        //通过手机找回
        phoneStep3().showModal();
        form.form_valid();
        return false;
    }).on("click", "#forgt_email_2", function() {
        forgetbox().close().remove();
        //通过手机找回
        emailStep2().showModal();
        return false;
    }).on("click", "#forgt_email_4", function() {
        //通过手机找回
        emailStep4().showModal();
        return false;
    });
});

define("educate/educate/1.0.0/login-debug", [ "educate/educate/1.0.0/dialog/1.0.0/dialog-plus-debug", "educate/educate/1.0.0/dialog/1.0.0/dialog-debug", "educate/educate/1.0.0/dialog/1.0.0/popup-debug", "educate/educate/1.0.0/dialog/1.0.0/dialog-config-debug", "educate/educate/1.0.0/dialog/1.0.0/drag-debug", "educate/educate/1.0.0/formvalidat/1.0.0/form_and_validation-debug" ], function(require, exports, module) {
    var dialog = require("educate/educate/1.0.0/dialog/1.0.0/dialog-plus-debug");
    var form = require("educate/educate/1.0.0/formvalidat/1.0.0/form_and_validation-debug");
    //声明登录窗口
    var loginbox;
    var loginhtml = null;
    loginbox = function() {
        var d = null;
        if (loginhtml == null) {
            loginhtml = $.ajax({
                type: "GET",
                url: SITEURL + "index.php?m=user&a=login",
                async: false,
                dataType: "html"
            }).responseText;
        }
        d = dialog({
            id: "loginBox",
            content: loginhtml,
            width: 520,
            padding: 0
        });
        return d;
    };
    //绑定登录窗口事件
    $(document).on("click", "#j-lgclose", function() {
        loginbox().close().remove();
        return false;
    }).on("click", "div[data='j-tablogin'] span", function() {
        var relbox = $(this).attr("rel");
        $(this).addClass("crent").siblings().removeClass("crent");
        $("#" + relbox).show().siblings().hide();
    }).on("click", "a[data='j-loginbox']", function() {
        loginbox().showModal();
        form.form_valid();
        EDUCAT.placeholder("input");
        return false;
    });
    exports.loginbox = loginbox;
});

/*!
 * artDialog-plus
 * Date: 2013-12-25
 * https://github.com/aui/artDialog
 * (c) 2009-2014 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://www.gnu.org/licenses/lgpl-2.1.html
 */
define("educate/educate/1.0.0/dialog/1.0.0/dialog-plus-debug", [ "educate/educate/1.0.0/dialog/1.0.0/dialog-debug", "educate/educate/1.0.0/dialog/1.0.0/popup-debug", "educate/educate/1.0.0/dialog/1.0.0/dialog-config-debug", "educate/educate/1.0.0/dialog/1.0.0/drag-debug" ], function(require) {
    var dialog = require("educate/educate/1.0.0/dialog/1.0.0/dialog-debug");
    var drag = require("educate/educate/1.0.0/dialog/1.0.0/drag-debug");
    dialog.oncreate = function(api) {
        var options = api.options;
        var originalOptions = options._;
        // 页面地址
        var url = options.url;
        // 页面加载完毕的事件
        var oniframeload = options.oniframeload;
        var $iframe;
        if (url) {
            this.padding = options.padding = 0;
            $iframe = $("<iframe />");
            $iframe.attr({
                src: url,
                name: api.id,
                width: "100%",
                height: "100%",
                allowtransparency: "yes",
                frameborder: "no",
                scrolling: "no"
            }).on("load", function() {
                var test;
                try {
                    // 跨域测试
                    test = $iframe[0].contentWindow.frameElement;
                } catch (e) {}
                if (test) {
                    if (!options.width) {
                        api.width($iframe.contents().width());
                    }
                    if (!options.height) {
                        api.height($iframe.contents().height());
                    }
                }
                if (oniframeload) {
                    oniframeload.call(api);
                }
            });
            api.addEventListener("beforeremove", function() {
                // 重要！需要重置iframe地址，否则下次出现的对话框在IE6、7无法聚焦input
                // IE删除iframe后，iframe仍然会留在内存中出现上述问题，置换src是最容易解决的方法
                $iframe.attr("src", "about:blank").remove();
            }, false);
            api.content($iframe[0]);
            api.iframeNode = $iframe[0];
        }
        // 对于子页面呼出的对话框特殊处理
        // 如果对话框配置来自 iframe
        if (!(originalOptions instanceof Object)) {
            var un = function() {
                api.close().remove();
            };
            // 找到那个 iframe
            for (var i = 0; i < frames.length; i++) {
                try {
                    if (originalOptions instanceof frames[i].Object) {
                        // 让 iframe 刷新的时候也关闭对话框，
                        // 防止要执行的对象被强制收回导致 IE 报错：“不能执行已释放 Script 的代码”
                        $(frames[i]).one("unload", un);
                        break;
                    }
                } catch (e) {}
            }
        }
        // 拖拽支持
        $(api.node).on(drag.types.start, "[i=title]", function(event) {
            // 排除气泡类型的对话框
            if (!api.follow) {
                api.focus();
                drag.create(api.node, event);
            }
        });
    };
    dialog.get = function(id) {
        // 从 iframe 传入 window 对象
        if (id && id.frameElement) {
            var iframe = id.frameElement;
            var list = dialog.list;
            var api;
            for (var i in list) {
                api = list[i];
                if (api.node.getElementsByTagName("iframe")[0] === iframe) {
                    return api;
                }
            }
        } else if (id) {
            return dialog.list[id];
        }
    };
    return dialog;
});

/*!
 * artDialog
 * Date: 2014-06-29
 * https://github.com/aui/artDialog
 * (c) 2009-2014 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://www.gnu.org/licenses/lgpl-2.1.html
 */
define("educate/educate/1.0.0/dialog/1.0.0/dialog-debug", [ "educate/educate/1.0.0/dialog/1.0.0/popup-debug", "educate/educate/1.0.0/dialog/1.0.0/dialog-config-debug" ], function(require) {
    var Popup = require("educate/educate/1.0.0/dialog/1.0.0/popup-debug");
    var defaults = require("educate/educate/1.0.0/dialog/1.0.0/dialog-config-debug");
    var _count = 0;
    var _expando = new Date() - 0;
    // Data.now()
    var _isIE6 = !("minWidth" in $("html")[0].style);
    var _isMobile = "createTouch" in document && !("onmousemove" in document) || /(iPhone|iPad|iPod)/i.test(navigator.userAgent);
    var _isFixed = !_isIE6 && !_isMobile;
    var artDialog = function(options, ok, cancel) {
        var originalOptions = options = options || {};
        if (typeof options === "string" || options.nodeType === 1) {
            options = {
                content: options,
                fixed: !_isMobile
            };
        }
        options = $.extend(true, {}, artDialog.defaults, options);
        options._ = originalOptions;
        var id = options.id = options.id || _expando + _count;
        var api = artDialog.get(id);
        // 如果存在同名的对话框对象，则直接返回
        if (api) {
            return api.focus();
        }
        // 目前主流移动设备对fixed支持不好，禁用此特性
        if (!_isFixed) {
            options.fixed = false;
        }
        // 快捷关闭支持：点击对话框外快速关闭对话框
        if (options.quickClose) {
            options.modal = true;
            if (!originalOptions.backdropOpacity) {
                options.backdropOpacity = 0;
            }
        }
        // 按钮组
        if (!$.isArray(options.button)) {
            options.button = [];
        }
        // 取消按钮
        if (cancel !== undefined) {
            options.cancel = cancel;
        }
        if (options.cancel) {
            options.button.push({
                id: "cancel",
                value: options.cancelValue,
                callback: options.cancel,
                display: options.cancelDisplay
            });
        }
        // 确定按钮
        if (ok !== undefined) {
            options.ok = ok;
        }
        if (options.ok) {
            options.button.push({
                id: "ok",
                value: options.okValue,
                callback: options.ok,
                autofocus: true
            });
        }
        return artDialog.list[id] = new artDialog.create(options);
    };
    var popup = function() {};
    popup.prototype = Popup.prototype;
    var prototype = artDialog.prototype = new popup();
    artDialog.create = function(options) {
        var that = this;
        $.extend(this, new Popup());
        var $popup = $(this.node).html(options.innerHTML);
        this.options = options;
        this._popup = $popup;
        $.each(options, function(name, value) {
            if (typeof that[name] === "function") {
                that[name](value);
            } else {
                that[name] = value;
            }
        });
        // 更新 zIndex 全局配置
        if (options.zIndex) {
            Popup.zIndex = options.zIndex;
        }
        // 设置 ARIA 信息
        $popup.attr({
            "aria-labelledby": this._$("title").attr("id", "title:" + this.id).attr("id"),
            "aria-describedby": this._$("content").attr("id", "content:" + this.id).attr("id")
        });
        // 关闭按钮
        this._$("close").css("display", this.cancel === false ? "none" : "").attr("title", this.cancelValue).on("click", function(event) {
            that._trigger("cancel");
            event.preventDefault();
        });
        // 添加视觉参数
        this._$("dialog").addClass(this.skin);
        this._$("body").css("padding", this.padding);
        // 按钮组点击
        $popup.on("click", "[data-id]", function(event) {
            var $this = $(this);
            if (!$this.attr("disabled")) {
                // IE BUG
                that._trigger($this.data("id"));
            }
            event.preventDefault();
        });
        // 点击遮罩自动关闭对话框
        if (options.quickClose) {
            $(this.backdrop).on("onmousedown" in document ? "mousedown" : "click", function() {
                that._trigger("cancel");
                return false;
            });
        }
        // ESC 快捷键关闭对话框
        this._esc = function(event) {
            var target = event.target;
            var nodeName = target.nodeName;
            var rinput = /^input|textarea$/i;
            var isTop = Popup.current === that;
            var keyCode = event.keyCode;
            // 避免输入状态中 ESC 误操作关闭
            if (!isTop || rinput.test(nodeName) && target.type !== "button") {
                return;
            }
            if (keyCode === 27) {
                that._trigger("cancel");
            }
        };
        $(document).on("keydown", this._esc);
        this.addEventListener("remove", function() {
            $(document).off("keydown", this._esc);
            delete artDialog.list[this.id];
        });
        _count++;
        artDialog.oncreate(this);
        return this;
    };
    artDialog.create.prototype = prototype;
    $.extend(prototype, {
        /**
     * 显示对话框
     * @name artDialog.prototype.show
     * @param   {HTMLElement Object, Event Object}  指定位置（可选）
     */
        /**
     * 显示对话框（模态）
     * @name artDialog.prototype.showModal
     * @param   {HTMLElement Object, Event Object}  指定位置（可选）
     */
        /**
     * 关闭对话框
     * @name artDialog.prototype.close
     * @param   {String, Number}    返回值，可被 onclose 事件收取（可选）
     */
        /**
     * 销毁对话框
     * @name artDialog.prototype.remove
     */
        /**
     * 重置对话框位置
     * @name artDialog.prototype.reset
     */
        /**
     * 让对话框聚焦（同时置顶）
     * @name artDialog.prototype.focus
     */
        /**
     * 让对话框失焦（同时置顶）
     * @name artDialog.prototype.blur
     */
        /**
     * 添加事件
     * @param   {String}    事件类型
     * @param   {Function}  监听函数
     * @name artDialog.prototype.addEventListener
     */
        /**
     * 删除事件
     * @param   {String}    事件类型
     * @param   {Function}  监听函数
     * @name artDialog.prototype.removeEventListener
     */
        /**
     * 对话框显示事件，在 show()、showModal() 执行
     * @name artDialog.prototype.onshow
     * @event
     */
        /**
     * 关闭事件，在 close() 执行
     * @name artDialog.prototype.onclose
     * @event
     */
        /**
     * 销毁前事件，在 remove() 前执行
     * @name artDialog.prototype.onbeforeremove
     * @event
     */
        /**
     * 销毁事件，在 remove() 执行
     * @name artDialog.prototype.onremove
     * @event
     */
        /**
     * 重置事件，在 reset() 执行
     * @name artDialog.prototype.onreset
     * @event
     */
        /**
     * 焦点事件，在 foucs() 执行
     * @name artDialog.prototype.onfocus
     * @event
     */
        /**
     * 失焦事件，在 blur() 执行
     * @name artDialog.prototype.onblur
     * @event
     */
        /**
     * 设置内容
     * @param    {String, HTMLElement}   内容
     */
        content: function(html) {
            this._$("content").empty("")[typeof html === "object" ? "append" : "html"](html);
            return this.reset();
        },
        /**
     * 设置标题
     * @param    {String}   标题内容
     */
        title: function(text) {
            this._$("title").text(text);
            this._$("header")[text ? "show" : "hide"]();
            return this;
        },
        /** 设置宽度 */
        width: function(value) {
            this._$("content").css("width", value);
            return this.reset();
        },
        /** 设置高度 */
        height: function(value) {
            this._$("content").css("height", value);
            return this.reset();
        },
        /**
     * 设置按钮组
     * @param   {Array, String}
     */
        button: function(args) {
            args = args || [];
            var that = this;
            var html = "";
            var number = 0;
            this.callbacks = {};
            if (typeof args === "string") {
                html = args;
            } else {
                $.each(args, function(i, val) {
                    val.id = val.id || val.value;
                    that.callbacks[val.id] = val.callback;
                    var style = "";
                    if (val.display === false) {
                        style = ' style="display:none"';
                    } else {
                        number++;
                    }
                    html += "<button" + ' type="button"' + ' data-id="' + val.id + '"' + style + (val.disabled ? " disabled" : "") + (val.autofocus ? ' autofocus class="ui-dialog-autofocus"' : "") + ">" + val.value + "</button>";
                });
            }
            this._$("footer")[number ? "show" : "hide"]();
            this._$("button").html(html);
            return this;
        },
        statusbar: function(html) {
            this._$("statusbar").html(html)[html ? "show" : "hide"]();
            return this;
        },
        _$: function(i) {
            return this._popup.find("[i=" + i + "]");
        },
        // 触发按钮回调函数
        _trigger: function(id) {
            var fn = this.callbacks[id];
            return typeof fn !== "function" || fn.call(this) !== false ? this.close().remove() : this;
        }
    });
    artDialog.oncreate = $.noop;
    /** 最顶层的对话框API */
    artDialog.getCurrent = function() {
        return Popup.current;
    };
    /**
 * 根据 ID 获取某对话框 API
 * @param    {String}    对话框 ID
 * @return   {Object}    对话框 API (实例)
 */
    artDialog.get = function(id) {
        return id === undefined ? artDialog.list : artDialog.list[id];
    };
    artDialog.list = {};
    /**
 * 默认配置
 */
    artDialog.defaults = defaults;
    return artDialog;
});

/*!
 * popupjs
 * Date: 2014-01-15
 * https://github.com/aui/popupjs
 * (c) 2009-2014 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://www.gnu.org/licenses/lgpl-2.1.html
 */
define("educate/educate/1.0.0/dialog/1.0.0/popup-debug", [], function(require) {
    var _count = 0;
    var _isIE6 = !("minWidth" in $("html")[0].style);
    var _isFixed = !_isIE6;
    function Popup() {
        this.destroyed = false;
        this.__popup = $("<div />").attr({
            tabindex: "-1"
        }).css({
            display: "none",
            position: "absolute",
            /*
        left: 0,
        top: 0,
        bottom: 'auto',
        right: 'auto',
        margin: 0,
        padding: 0,
        border: '0 none',
        background: 'transparent'
        */
            outline: 0
        }).html(this.innerHTML).appendTo("body");
        this.__backdrop = $("<div />");
        // 使用 HTMLElement 作为外部接口使用，而不是 jquery 对象
        // 统一的接口利于未来 Popup 移植到其他 DOM 库中
        this.node = this.__popup[0];
        this.backdrop = this.__backdrop[0];
        _count++;
    }
    $.extend(Popup.prototype, {
        /**
     * 初始化完毕事件，在 show()、showModal() 执行
     * @name Popup.prototype.onshow
     * @event
     */
        /**
     * 关闭事件，在 close() 执行
     * @name Popup.prototype.onclose
     * @event
     */
        /**
     * 销毁前事件，在 remove() 前执行
     * @name Popup.prototype.onbeforeremove
     * @event
     */
        /**
     * 销毁事件，在 remove() 执行
     * @name Popup.prototype.onremove
     * @event
     */
        /**
     * 重置事件，在 reset() 执行
     * @name Popup.prototype.onreset
     * @event
     */
        /**
     * 焦点事件，在 foucs() 执行
     * @name Popup.prototype.onfocus
     * @event
     */
        /**
     * 失焦事件，在 blur() 执行
     * @name Popup.prototype.onblur
     * @event
     */
        /** 浮层 DOM 素节点 */
        node: null,
        /** 遮罩 DOM 节点 */
        backdrop: null,
        /** 是否开启固定定位 */
        fixed: false,
        /** 判断对话框是否删除 */
        destroyed: true,
        /** 判断对话框是否显示 */
        open: false,
        /** close 返回值 */
        returnValue: "",
        /** 是否自动聚焦 */
        autofocus: true,
        /** 对齐方式 */
        align: "bottom left",
        /** 设置遮罩背景颜色 */
        backdropBackground: "#000",
        /** 设置遮罩透明度 */
        backdropOpacity: .7,
        /** 内部的 HTML 字符串 */
        innerHTML: "",
        /** 类名 */
        className: "ui-popup",
        /**
     * 显示浮层
     * @param   {HTMLElement, Event}  指定位置（可选）
     */
        show: function(anchor) {
            if (this.destroyed) {
                return this;
            }
            var that = this;
            var popup = this.__popup;
            this.__activeElement = this.__getActive();
            this.open = true;
            this.follow = anchor || this.follow;
            if (!this.__ready) {
                popup.addClass(this.className);
                if (this.modal) {
                    this.__lock();
                }
                if (!popup.html()) {
                    popup.html(this.innerHTML);
                }
                if (!_isIE6) {
                    $(window).on("resize", this.__onresize = function() {
                        that.reset();
                    });
                }
                this.__ready = true;
            }
            popup.addClass(this.className + "-show").attr("role", this.modal ? "alertdialog" : "dialog").css("position", this.fixed ? "fixed" : "absolute").show();
            this.__backdrop.show();
            this.reset().focus();
            this.__dispatchEvent("show");
            return this;
        },
        /** 显示模态浮层。参数参见 show() */
        showModal: function() {
            this.modal = true;
            return this.show.apply(this, arguments);
        },
        /** 关闭浮层 */
        close: function(result) {
            if (!this.destroyed && this.open) {
                if (result !== undefined) {
                    this.returnValue = result;
                }
                this.__popup.hide().removeClass(this.className + "-show");
                this.__backdrop.hide();
                this.open = false;
                this.blur();
                // 恢复焦点，照顾键盘操作的用户
                this.__dispatchEvent("close");
            }
            return this;
        },
        /** 销毁浮层 */
        remove: function() {
            if (this.destroyed) {
                return this;
            }
            this.__dispatchEvent("beforeremove");
            if (Popup.current === this) {
                Popup.current = null;
            }
            this.__unlock();
            this.__popup.remove();
            this.__backdrop.remove();
            if (!_isIE6) {
                $(window).off("resize", this.__onresize);
            }
            this.__dispatchEvent("remove");
            for (var i in this) {
                delete this[i];
            }
            return this;
        },
        /** 手动刷新位置 */
        reset: function() {
            var elem = this.follow;
            if (elem) {
                this.__follow(elem);
            } else {
                this.__center();
            }
            this.__dispatchEvent("reset");
            return this;
        },
        /** 让浮层获取焦点 */
        focus: function() {
            var node = this.node;
            var current = Popup.current;
            if (current && current !== this) {
                current.blur(false);
            }
            // 检查焦点是否在浮层里面
            if (!$.contains(node, this.__getActive())) {
                var autofocus = this.__popup.find("[autofocus]")[0];
                if (!this._autofocus && autofocus) {
                    this._autofocus = true;
                } else {
                    autofocus = node;
                }
                this.__focus(autofocus);
            }
            Popup.current = this;
            this.__popup.addClass(this.className + "-focus");
            this.__zIndex();
            this.__dispatchEvent("focus");
            return this;
        },
        /** 让浮层失去焦点。将焦点退还给之前的元素，照顾视力障碍用户 */
        blur: function() {
            var activeElement = this.__activeElement;
            var isBlur = arguments[0];
            if (isBlur !== false) {
                this.__focus(activeElement);
            }
            this._autofocus = false;
            this.__popup.removeClass(this.className + "-focus");
            this.__dispatchEvent("blur");
            return this;
        },
        /**
     * 添加事件
     * @param   {String}    事件类型
     * @param   {Function}  监听函数
     */
        addEventListener: function(type, callback) {
            this.__getEventListener(type).push(callback);
            return this;
        },
        /**
     * 删除事件
     * @param   {String}    事件类型
     * @param   {Function}  监听函数
     */
        removeEventListener: function(type, callback) {
            var listeners = this.__getEventListener(type);
            for (var i = 0; i < listeners.length; i++) {
                if (callback === listeners[i]) {
                    listeners.splice(i--, 1);
                }
            }
            return this;
        },
        // 获取事件缓存
        __getEventListener: function(type) {
            var listener = this.__listener;
            if (!listener) {
                listener = this.__listener = {};
            }
            if (!listener[type]) {
                listener[type] = [];
            }
            return listener[type];
        },
        // 派发事件
        __dispatchEvent: function(type) {
            var listeners = this.__getEventListener(type);
            if (this["on" + type]) {
                this["on" + type]();
            }
            for (var i = 0; i < listeners.length; i++) {
                listeners[i].call(this);
            }
        },
        // 对元素安全聚焦
        __focus: function(elem) {
            // 防止 iframe 跨域无权限报错
            // 防止 IE 不可见元素报错
            try {
                // ie11 bug: iframe 页面点击会跳到顶部
                if (this.autofocus && !/^iframe$/i.test(elem.nodeName)) {
                    elem.focus();
                }
            } catch (e) {}
        },
        // 获取当前焦点的元素
        __getActive: function() {
            try {
                // try: ie8~9, iframe #26
                var activeElement = document.activeElement;
                var contentDocument = activeElement.contentDocument;
                var elem = contentDocument && contentDocument.activeElement || activeElement;
                return elem;
            } catch (e) {}
        },
        // 置顶浮层
        __zIndex: function() {
            var index = Popup.zIndex++;
            // 设置叠加高度
            this.__popup.css("zIndex", index);
            this.__backdrop.css("zIndex", index - 1);
            this.zIndex = index;
        },
        // 居中浮层
        __center: function() {
            var popup = this.__popup;
            var $window = $(window);
            var $document = $(document);
            var fixed = this.fixed;
            var dl = fixed ? 0 : $document.scrollLeft();
            var dt = fixed ? 0 : $document.scrollTop();
            var ww = $window.width();
            var wh = $window.height();
            var ow = popup.width();
            var oh = popup.height();
            var left = (ww - ow) / 2 + dl;
            var top = (wh - oh) * 382 / 1e3 + dt;
            // 黄金比例
            var style = popup[0].style;
            style.left = Math.max(parseInt(left), dl) + "px";
            style.top = Math.max(parseInt(top), dt) + "px";
        },
        // 指定位置 @param    {HTMLElement, Event}  anchor
        __follow: function(anchor) {
            var $elem = anchor.parentNode && $(anchor);
            var popup = this.__popup;
            if (this.__followSkin) {
                popup.removeClass(this.__followSkin);
            }
            // 隐藏元素不可用
            if ($elem) {
                var o = $elem.offset();
                if (o.left * o.top < 0) {
                    return this.__center();
                }
            }
            var that = this;
            var fixed = this.fixed;
            var $window = $(window);
            var $document = $(document);
            var winWidth = $window.width();
            var winHeight = $window.height();
            var docLeft = $document.scrollLeft();
            var docTop = $document.scrollTop();
            var popupWidth = popup.width();
            var popupHeight = popup.height();
            var width = $elem ? $elem.outerWidth() : 0;
            var height = $elem ? $elem.outerHeight() : 0;
            var offset = this.__offset(anchor);
            var x = offset.left;
            var y = offset.top;
            var left = fixed ? x - docLeft : x;
            var top = fixed ? y - docTop : y;
            var minLeft = fixed ? 0 : docLeft;
            var minTop = fixed ? 0 : docTop;
            var maxLeft = minLeft + winWidth - popupWidth;
            var maxTop = minTop + winHeight - popupHeight;
            var css = {};
            var align = this.align.split(" ");
            var className = this.className + "-";
            var reverse = {
                top: "bottom",
                bottom: "top",
                left: "right",
                right: "left"
            };
            var name = {
                top: "top",
                bottom: "top",
                left: "left",
                right: "left"
            };
            var temp = [ {
                top: top - popupHeight,
                bottom: top + height,
                left: left - popupWidth,
                right: left + width
            }, {
                top: top,
                bottom: top - popupHeight + height,
                left: left,
                right: left - popupWidth + width
            } ];
            var center = {
                left: left + width / 2 - popupWidth / 2,
                top: top + height / 2 - popupHeight / 2
            };
            var range = {
                left: [ minLeft, maxLeft ],
                top: [ minTop, maxTop ]
            };
            // 超出可视区域重新适应位置
            $.each(align, function(i, val) {
                // 超出右或下边界：使用左或者上边对齐
                if (temp[i][val] > range[name[val]][1]) {
                    val = align[i] = reverse[val];
                }
                // 超出左或右边界：使用右或者下边对齐
                if (temp[i][val] < range[name[val]][0]) {
                    align[i] = reverse[val];
                }
            });
            // 一个参数的情况
            if (!align[1]) {
                name[align[1]] = name[align[0]] === "left" ? "top" : "left";
                temp[1][align[1]] = center[name[align[1]]];
            }
            //添加follow的css, 为了给css使用
            className += align.join("-") + " " + this.className + "-follow";
            that.__followSkin = className;
            if ($elem) {
                popup.addClass(className);
            }
            css[name[align[0]]] = parseInt(temp[0][align[0]]);
            css[name[align[1]]] = parseInt(temp[1][align[1]]);
            popup.css(css);
        },
        // 获取元素相对于页面的位置（包括iframe内的元素）
        // 暂时不支持两层以上的 iframe 套嵌
        __offset: function(anchor) {
            var isNode = anchor.parentNode;
            var offset = isNode ? $(anchor).offset() : {
                left: anchor.pageX,
                top: anchor.pageY
            };
            anchor = isNode ? anchor : anchor.target;
            var ownerDocument = anchor.ownerDocument;
            var defaultView = ownerDocument.defaultView || ownerDocument.parentWindow;
            if (defaultView == window) {
                // IE <= 8 只能使用两个等于号
                return offset;
            }
            // {Element Ifarme}
            var frameElement = defaultView.frameElement;
            var $ownerDocument = $(ownerDocument);
            var docLeft = $ownerDocument.scrollLeft();
            var docTop = $ownerDocument.scrollTop();
            var frameOffset = $(frameElement).offset();
            var frameLeft = frameOffset.left;
            var frameTop = frameOffset.top;
            return {
                left: offset.left + frameLeft - docLeft,
                top: offset.top + frameTop - docTop
            };
        },
        // 设置屏锁遮罩
        __lock: function() {
            var that = this;
            var popup = this.__popup;
            var backdrop = this.__backdrop;
            var backdropCss = {
                position: "fixed",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                userSelect: "none",
                opacity: 0,
                background: this.backdropBackground
            };
            popup.addClass(this.className + "-modal");
            // 避免遮罩不能盖住上一次的对话框
            // 如果当前对话框是上一个对话框创建，点击的那一瞬间它会增长 zIndex 值
            Popup.zIndex = Popup.zIndex + 2;
            this.__zIndex();
            if (!_isFixed) {
                $.extend(backdropCss, {
                    position: "absolute",
                    width: $(window).width() + "px",
                    height: $(document).height() + "px"
                });
            }
            backdrop.css(backdropCss).animate({
                opacity: this.backdropOpacity
            }, 150).insertAfter(popup).attr({
                tabindex: "0"
            }).on("focus", function() {
                that.focus();
            });
        },
        // 卸载屏锁遮罩
        __unlock: function() {
            if (this.modal) {
                this.__popup.removeClass(this.className + "-modal");
                this.__backdrop.remove();
                delete this.modal;
            }
        }
    });
    /** 当前叠加高度 */
    Popup.zIndex = 1024;
    /** 顶层浮层的实例 */
    Popup.current = null;
    return Popup;
});

// artDialog - 默认配置
define("educate/educate/1.0.0/dialog/1.0.0/dialog-config-debug", [], {
    /* -----已注释的配置继承自 popup.js，仍可以再这里重新定义它----- */
    // 对齐方式
    //align: 'bottom left',
    // 是否固定定位
    //fixed: false,
    // 对话框叠加高度值(重要：此值不能超过浏览器最大限制)
    //zIndex: 1024,
    // 设置遮罩背景颜色
    //backdropBackground: '#000',
    // 设置遮罩透明度
    //backdropOpacity: 0.7,
    // 消息内容
    content: '<span class="ui-dialog-loading">Loading..</span>',
    // 标题
    title: "",
    // 对话框状态栏区域 HTML 代码
    statusbar: "",
    // 自定义按钮
    button: null,
    // 确定按钮回调函数
    ok: null,
    // 取消按钮回调函数
    cancel: null,
    // 确定按钮文本
    okValue: "ok",
    // 取消按钮文本
    cancelValue: "cancel",
    cancelDisplay: true,
    // 内容宽度
    width: "",
    // 内容高度
    height: "",
    // 内容与边界填充距离
    padding: "",
    // 对话框自定义 className
    skin: "",
    // 是否支持快捷关闭（点击遮罩层自动关闭）
    quickClose: false,
    // css 文件路径，留空则不会使用 js 自动加载样式
    // 注意：css 只允许加载一个
    cssUri: "../css/ui-dialog.css",
    // 模板（使用 table 解决 IE7 宽度自适应的 BUG）
    // js 使用 i="***" 属性识别结构，其余的均可自定义
    innerHTML: '<div i="dialog" class="ui-dialog">' + '<div class="ui-dialog-arrow-a"></div>' + '<div class="ui-dialog-arrow-b"></div>' + '<table class="ui-dialog-grid">' + "<tr>" + '<td i="header" class="ui-dialog-header">' + '<button i="close" class="ui-dialog-close">&#215;</button>' + '<div i="title" class="ui-dialog-title"></div>' + "</td>" + "</tr>" + "<tr>" + '<td i="body" class="ui-dialog-body">' + '<div i="content" class="ui-dialog-content"></div>' + "</td>" + "</tr>" + "<tr>" + '<td i="footer" class="ui-dialog-footer">' + '<div i="statusbar" class="ui-dialog-statusbar"></div>' + '<div i="button" class="ui-dialog-button"></div>' + "</td>" + "</tr>" + "</table>" + "</div>"
});

/*!
 * drag.js
 * Date: 2013-12-06
 * https://github.com/aui/artDialog
 * (c) 2009-2014 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://www.gnu.org/licenses/lgpl-2.1.html
 */
define("educate/educate/1.0.0/dialog/1.0.0/drag-debug", [], function(require) {
    var $window = $(window);
    var $document = $(document);
    var isTouch = "createTouch" in document;
    var html = document.documentElement;
    var isIE6 = !("minWidth" in html.style);
    var isLosecapture = !isIE6 && "onlosecapture" in html;
    var isSetCapture = "setCapture" in html;
    var types = {
        start: isTouch ? "touchstart" : "mousedown",
        over: isTouch ? "touchmove" : "mousemove",
        end: isTouch ? "touchend" : "mouseup"
    };
    var getEvent = isTouch ? function(event) {
        if (!event.touches) {
            event = event.originalEvent.touches.item(0);
        }
        return event;
    } : function(event) {
        return event;
    };
    var DragEvent = function() {
        this.start = $.proxy(this.start, this);
        this.over = $.proxy(this.over, this);
        this.end = $.proxy(this.end, this);
        this.onstart = this.onover = this.onend = $.noop;
    };
    DragEvent.types = types;
    DragEvent.prototype = {
        start: function(event) {
            event = this.startFix(event);
            $document.on(types.over, this.over).on(types.end, this.end);
            this.onstart(event);
            return false;
        },
        over: function(event) {
            event = this.overFix(event);
            this.onover(event);
            return false;
        },
        end: function(event) {
            event = this.endFix(event);
            $document.off(types.over, this.over).off(types.end, this.end);
            this.onend(event);
            return false;
        },
        startFix: function(event) {
            event = getEvent(event);
            this.target = $(event.target);
            this.selectstart = function() {
                return false;
            };
            $document.on("selectstart", this.selectstart).on("dblclick", this.end);
            if (isLosecapture) {
                this.target.on("losecapture", this.end);
            } else {
                $window.on("blur", this.end);
            }
            if (isSetCapture) {
                this.target[0].setCapture();
            }
            return event;
        },
        overFix: function(event) {
            event = getEvent(event);
            return event;
        },
        endFix: function(event) {
            event = getEvent(event);
            $document.off("selectstart", this.selectstart).off("dblclick", this.end);
            if (isLosecapture) {
                this.target.off("losecapture", this.end);
            } else {
                $window.off("blur", this.end);
            }
            if (isSetCapture) {
                this.target[0].releaseCapture();
            }
            return event;
        }
    };
    /**
 * 启动拖拽
 * @param   {HTMLElement}   被拖拽的元素
 * @param   {Event} 触发拖拽的事件对象。可选，若无则监听 elem 的按下事件启动
 */
    DragEvent.create = function(elem, event) {
        var $elem = $(elem);
        var dragEvent = new DragEvent();
        var startType = DragEvent.types.start;
        var noop = function() {};
        var className = elem.className.replace(/^\s|\s.*/g, "") + "-drag-start";
        var minX;
        var minY;
        var maxX;
        var maxY;
        var api = {
            onstart: noop,
            onover: noop,
            onend: noop,
            off: function() {
                $elem.off(startType, dragEvent.start);
            }
        };
        dragEvent.onstart = function(event) {
            var isFixed = $elem.css("position") === "fixed";
            var dl = $document.scrollLeft();
            var dt = $document.scrollTop();
            var w = $elem.width();
            var h = $elem.height();
            minX = 0;
            minY = 0;
            maxX = isFixed ? $window.width() - w + minX : $document.width() - w;
            maxY = isFixed ? $window.height() - h + minY : $document.height() - h;
            var offset = $elem.offset();
            var left = this.startLeft = isFixed ? offset.left - dl : offset.left;
            var top = this.startTop = isFixed ? offset.top - dt : offset.top;
            this.clientX = event.clientX;
            this.clientY = event.clientY;
            $elem.addClass(className);
            api.onstart.call(elem, event, left, top);
        };
        dragEvent.onover = function(event) {
            var left = event.clientX - this.clientX + this.startLeft;
            var top = event.clientY - this.clientY + this.startTop;
            var style = $elem[0].style;
            left = Math.max(minX, Math.min(maxX, left));
            top = Math.max(minY, Math.min(maxY, top));
            style.left = left + "px";
            style.top = top + "px";
            api.onover.call(elem, event, left, top);
        };
        dragEvent.onend = function(event) {
            var position = $elem.position();
            var left = position.left;
            var top = position.top;
            $elem.removeClass(className);
            api.onend.call(elem, event, left, top);
        };
        dragEvent.off = function() {
            $elem.off(startType, dragEvent.start);
        };
        if (event) {
            dragEvent.start(event);
        } else {
            $elem.on(startType, dragEvent.start);
        }
        return api;
    };
    return DragEvent;
});

/*----------------------------------------------------------------------------|
|  Subject:       JavaScript validation API,Form auto Validation API
|  Version:       1.0
|  Author:        Sunarrow
|  Created:       2007-11-8
|  LastModified:  2008-1-20
|  License:       Apache License 2.0
|-----------------------------------------------------------------------------|
|  Email:sunkeei@yahoo.com
|-----------------------------------------------------------------------------|

2012/9/23 新加正则判断 By MiNG
	type:regx

	调用例子: <input type="text" name="code" limit="type:regx;required:true;re:/^[a-z]{1}(\\w){5,9}$/i" msgArea="code_span" msg="输入错误">

|功能1.表单字段验证
|      方法签名：validElement(element).
|      功能：如果验证失败，返回false。显示在页面或跳出错误信息。
|      参数说明：element:HTML元素，在页面上调用此方法时请使用 'this'调用。
|                limit:验证条件串：如：'type:float;required:true;decLen:2'
|                      limit的属性可以有: type,required,len,between,decLen,
|                                         equals,general
|                      属性说明:
|						 type:string,int,digit,float,email,ip,url,date,datetime,time
|                             tel,fax,mobileCn,idCard,signName,name,postcodeCn
|                             default: string.
|                        required:可选值有true和false.default:false.
|                        len:字符串长度,值为 "6-20",表示长度在6和20之间。也可
|                             以为"-20"，表示不超过20。
|						 between:数值有效,在两个值之间。可为 "10-100"，表示大
|                                小在10与00之间，也可为"-100",表示小于100。
|                        decLen:浮点型精度长度.若不符合精度将会自动纠正.
|                        equals:是否要求与其它元素相等。用于密码确认等场合.
|                        general:是否是一般字符。不包括特殊字符.Default:true.
						 than:与指定对象比较日期值，如果大于return true.
|                msgArea:显示错误信息的SPAN或DIV的ID。如果传入为空，则会查找
|                        global_error_msg_area 的SPAN或DIV，如果也为空，则会
|                        alert 这些错误信息。
|                msg:错误信息，如果这个参数为""，则会打出默认的错误信息.
				 caseon:  值为 all submit blur
				 		 默认为all  指全部验证  为submit时只在提交时验证  为blur时只在离焦验证
|功能2.表单自动验证:
|      方法签名：checkForm(form,isCheckAll)
|      isCheckAll:是否检查所有的元素：如为False,验证会在第一个错误出现时退出，否则，会验证所有的元素
|      功能：验证表单中所有需要验证的字段.失败返回false.显示或跳出错误信息.
|      使用条件：需要验证的元素需要定义至少 limit 属性，程序会自动搜索这个表单中所有需要验证的元素。
|提示:如果您需要把错误信息显示在某一个单独的地方，可以定义一个ID为 global_error_msg_area 的DIV或是SPAN
|   　表单的验证将默认限制特殊字符，可以加入 general:false 来取消限制
\*---------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------*\
|  Subject:       JavaScript validation API
|验证API
|验证函数列表：
|
|judgeDigit(arguments...) :判断是否数字
|三种调用方式:
|1.一个参数,简单判断是否为数字,但长度不超过10位
|2.三个参数,第二个参数为 '>'(大于) 或 '<'(小于),第3个参数为要比较的数字
|3.三个参数，第二个参数与第三个参数均为整数，判断传入的第一个参数值是否在他们中间.(含边界)
|
|judgeFloat(arguments...):浮点数
|如果是一个参数，那么判断是否为浮点数
|如果有两个参数，那么将第二个参数作为精度限定参数
|如果有三个参数，那么第二个参数为最小值，第三个参数是将作为数值上限
|
|isDigit(str):是否数字
|
|isSignName(arguments...)
|两种调用方式：
|一个参数：(默认为2--32位)，判断标识符或是登录名
|判断标识符或是登录名，以字母开头,可带数字、"_"、"." 的字串
|三个参数：
|限定最小长度(第二个参数)与最大长度(第三个参数)
|
|isRealName(str) :判断是否是真实姓名
|isTel(str) :电话号码:除数字外，可含有"-".校验普通电话，除数字外，可用"-"或空格分开
|isMobileCN(s) :中国大陆地区手机号码,以13或15开头，使用时请根据变化修改,
|isPostalCodeCN(s):中国地区邮编
|isEmail(s) :E-mail
|isURL(s) :URL
|isIP(s):IP-32
|isHtmlTag(s):HTML Tag
|isIDNumber15(s):身份证号15位
|isIDNumber18(s):身份证号18位
|isChineseString(s):中文字符
|isDoubleByteString(s):双字节
|hasHESpace(s):是否包含首尾空格，如果包含，返回TRUE
|isQQ(s):QQ
|isFloat(s):是否是浮点数
|isLeapYear(y):是否闰年
|isDateYMD(s):日期：yyyy-mm-dd 或 yyyy/mm/dd,支持1600年以后(包含闰年验证)
|isDateDMY(s):日期：dd-mm-yyyy 或 dd/mm/yyyy,支持1600年以后(包含闰年验证)
|isDateMDY(s):日期：mm/dd/yyyy 或 mm-dd-yyyy,支持1600年以后(包含闰年验证)
|isDateTimeYMD(s):日期：yyyy/mm/dd hh:mm:ss 或 yyyy-mm-dd hh:mm:ss,支持1600年以后(包含闰年验证)
|
|containsSpecialChar()
|是否包含非特殊字符(正常字符包括字母数字,下划线,和点号,空格,@#$% 和双字节)若包含,返回true
|
|以下方法遵守这样的调用法则:
|1.一个参数，不限制长度
|2.三个参数，第二个参数表示允许的最小长度，第三个参数表示允许的最大长度
|
|isDigitString():数字
|isLetter():字母
|isUpperLetter():大写字母
|isLowerLetter():小写字母
|isLetterNumString():字母与数字
|isLNUString() :数字，字母，下划线字符串
|
|兼容性:在IE6.0与Firefox2.0下测试通过。
|License:Apache license2.0.请在使用此代码时包含license与作者信息.
\*-----------------------------------------------------------------------------------------*/
var global_formjs_valid_flag = false;

// 全局的是否错误的变量
var error_msg_span = null;

// 错误显示的SPAN或是DIV
/*******************************************************************************
 * 检查表单所有元素
 * 
 * @param form
 *            表单
 * @param checkAll
 *            是否检查所有元素(如为false则会在第一个错误出现就会退出)否则将检查所有元素
 ******************************************************************************/
define("educate/educate/1.0.0/formvalidat/1.0.0/form_and_validation-debug", [], function(require, exports, module) {
    function checkForm(form, checkAll) {
        error_msg_span = document.getElementById("global_error_msg_area");
        // clear err msg
        if (error_msg_span != undefined && error_msg_span != null) {
            error_msg_span.innerHTML = "";
        }
        var eles = form.elements;
        var hasError = false;
        // keke_valid(eles[3]);
        // return false;
        // 遍历所有表元素
        for (var i = 0; i < eles.length; i++) {
            var type = $(eles[i]).attr("type");
            if (type && type.indexOf("/") > 0) {
                continue;
            }
            var eleType = eles[i].type ? eles[i].type.toLowerCase() : "undefined";
            if (eleType != "button" && eleType != "submit" && eleType != "undefined") {
                // 取出元素declare
                var ignore = $(eles[i]).attr("ignore");
                // 	 	var ignore= eles[i].getAttribute("ignore");
                var caseon = $(eles[i]).attr("caseon");
                // 		var caseon = eles[i].getAttribute('caseon');
                if (caseon == "blur") {
                    continue;
                }
                if (ignore == null || ignore != "true") {
                    var limit = $(eles[i]).attr("limit");
                    //var limit = eles[i].getAttribute("limit");
                    if (limit != null && limit != "") {
                        var ajax = $(eles[i]).attr("ajax");
                        //var ajax  = eles[i].getAttribute("ajax");
                        var valid = 0;
                        var valid = parseInt($(eles[i]).attr("valid"));
                        //valid = parseInt(eles[i].getAttribute("valid"));
                        valid == 1 ? valid = 1 : valid == 2 ? valid = 2 : "";
                        ajax == null ? valid = 2 : "";
                        if (checkAll) {
                            validElement(eles[i]);
                            if (!global_formjs_valid_flag) {
                                hasError = true;
                            }
                        } else {
                            if (!validElement(eles[i]) || valid == 1) {
                                if (eles[i].type != "checkbox" && eles[i].style.display == "block") {
                                    eles[i].focus();
                                }
                                return false;
                            }
                        }
                    }
                }
            }
        }
        return !hasError;
    }
    function test_hidden(ele) {
        var test_a = 0;
        var test = $(ele).parents();
        $(test).each(function() {
            //隐藏的不需要验证
            if ($(this).is(":hidden")) {
                test_a = 1;
            }
        });
        return test_a;
    }
    /**
	 * 出现错误返回FALSE
	 */
    function validElement(ele) {
        // 隐藏标签不验收，直接返回通过
        var a = test_hidden(ele);
        if (a == 1) {
            return true;
        }
        error_msg_span = document.getElementById("global_error_msg_area");
        // 属性检查
        var limit = ele.getAttribute("limit");
        if (limit == null || trim(limit) == "") return;
        limit = trim(limit);
        var msgSpan = ele.getAttribute("msgArea");
        if (msgSpan != null) msgSpan = trim(msgSpan);
        var errMsg = ele.getAttribute("msg");
        if (errMsg != null) errMsg = trim(errMsg);
        // 全局变量
        global_formjs_valid_flag = false;
        // preparing----
        var form = ele.form;
        var formName = form.name;
        if (msgSpan != null && msgSpan.length > 0) {
            msgSpan = document.getElementById(msgSpan);
            if (msgSpan == null) {
                msgSpan = error_msg_span;
            }
        } else {
            msgSpan = error_msg_span;
        }
        /*
		 * if(msgSpan != undefined && msgSpan != null){ msgSpan.innerHTML = ""; }
		 */
        // 设置错误信息函数
        var setErrMessage = function(ele, error_msg) {
            errMsg = errMsg == null || errMsg == "" ? ele.name + " input error:" + error_msg : errMsg;
            if (msgSpan != undefined && msgSpan != null) {
                msgSpan.innerHTML = "";
                //msgSpan.setAttribute('class','valid_error');
                msgSpan.innerHTML = "<span>" + errMsg + "</span>";
                $(msgSpan).attr("class", "valid_error");
            } else {
                if (typeof ROOTURL == "undefined") {
                    showDialog(errMsg, "alert", "输入不完整");
                } else {
                    showDialog(errMsg, "alert", "輸入不完整");
                }
            }
            return false;
        };
        // prepared....
        // 错误信息处理完毕
        // 拆分limit信息，提取最重要信息之 -- 是否必须与类型
        var vtype = "string";
        // 值类型
        var required = false;
        // 是否必须
        var general = false;
        // 是否是一般字符串(不允许包含特殊字符)
        var lims = limit.split(";");
        // 限制列表
        var ii;
        for (ii = 0; ii < lims.length; ii++) {
            if (lims[ii].indexOf(":") > 0) {
                var alim = lims[ii].split(":");
                if (alim[0] == "type") {
                    vtype = alim[1];
                } else if (alim[0] == "required") {
                    required = alim[1] == "true";
                } else if (alim[0] == "general" && alim[1] == "true") {
                    general = true;
                } else if (alim[0] == "re") {
                    eval("re = " + alim[1] + ";");
                }
            } else {
                alert("Element config error!");
                return false;
            }
        }
        // 类型
        if (required && ele.type == "checkbox" && ele.checked == false) {
            return setErrMessage(ele, " must be choose.");
        }
        // radio
        if (required && ele.type == "radio" && !$("input:radio[name=" + ele.name + "]:checked").length) {
            return setErrMessage(ele, " must be choose.");
        }
        // 值
        var valu = $.trim(ele.value);
        ele.value = valu;
        // 是否为空
        var isNull = valu == undefined || valu == "";
        // 空判断 -- 如果不允许为空而实际是空，则返回
        if (required && isNull) {
            return setErrMessage(ele, " can't be null.");
        } else if (!isNull) {
            // =============================类型检验========================//
            // =============================类型检验========================//
            // 检验类型
            switch (vtype) {
              case "regx":
                if (!re.test(valu)) {
                    return setErrMessage(ele, " must be regx.");
                }
                break;

              // 整数
                case "int":
                if (!isDigit(valu)) {
                    return setErrMessage(ele, " must be int.");
                }
                break;

              case "digit":
                if (!isDigitString(valu)) {
                    return setErrMessage(ele, " must be digit.");
                }
                break;

              case "float":
                if (!isFloat(valu)) {
                    return setErrMessage(ele, " must be float.");
                }
                break;

              case "date":
                if (!isDateYMD(valu)) {
                    return setErrMessage(ele, " must be date.");
                }
                break;

              case "datetime":
                if (!isDateTimeYMD(valu)) {
                    return setErrMessage(ele, " must be datetime.");
                }
                break;

              case "time":
                if (!isTime(valu)) {
                    return setErrMessage(ele, " must be time.");
                }
                break;

              case "tel":
              case "fax":
                if (!isTel(valu)) {
                    return setErrMessage(ele, " must be tel or fax number.");
                }
                break;

              case "mobileCn":
                if (!isMobileCN(valu)) {
                    return setErrMessage(ele, " must be Chinese");
                }
                break;

              case "TelCN":
                if (!isTelCN(valu)) {
                    return setErrMessage(ele, " must be Chinese tel");
                }
                break;

              case "mobileTW":
                if (!isMobileTW(valu)) {
                    return setErrMessage(ele, " must be Taiwan");
                }
                break;

              case "mobileHK":
                if (!isMobileHK(valu)) {
                    return setErrMessage(ele, " must be HongKong");
                }
                break;

              case "mobileMC":
                if (!isMobileMC(valu)) {
                    return setErrMessage(ele, " must be Macao");
                }
                break;

              case "ip":
                if (!isIP(valu)) {
                    return setErrMessage(ele, " must be IP.");
                }
                break;

              case "url":
                if (!isURL(valu)) {
                    return setErrMessage(ele, " must be URL.");
                }
                break;

              case "idCard":
                if (!(isIDNumber15(valu) || isIDNumber18(valu))) {
                    return setErrMessage(ele, " must be Chinese IDCard number.");
                }
                break;

              case "tw_idCard":
                if (!istw_idCard(valu)) {
                    return setErrMessage(ele, " must be Chinese IDCard number.");
                }
                break;

              case "hk_mc_idCard":
                if (!ishkmc_idCard(valu)) {
                    return setErrMessage(ele, " must be Chinese IDCard number.");
                }
                break;

              case "email":
                if (containsSpecialChar(valu) || !isEmail(valu)) {
                    return setErrMessage(ele, " must be Email address.");
                }
                break;

              case "signName":
                // alert(isSignName(valu));
                if (!isSignName(valu)) {
                    return setErrMessage(ele, " must be sign name:character,number,underline,point.The first char must be character.");
                }
                break;

              case "name":
                if (!isRealName(valu)) {
                    return setErrMessage(ele, " must be real name:Double byte character or single byte character. or space,point.");
                }
                break;

              case "postcodeCn":
                if (!isPostalCodeCN(valu)) {
                    return setErrMessage(ele, " must be valid postcode.");
                }
                break;

              case "price":
                if (!isPrice(valu)) {
                    return setErrMessage(ele, " must be valid float.");
                }
                break;

              case "unsignedInt":
                if (!isUnsignedInt(valu)) {
                    return setErrMessage(ele, " must be valid unsigned int.");
                }
                break;

              case "string":
                break;

              default:
                alert("元素" + ele.name + "值类型配置有误:" + vtype);
                return false;
            }
            // =============================类型检验结束========================//
            // ============================其它限制检验=======================//
            if (lims != null) {
                var i;
                for (i = 0; i < lims.length; i++) {
                    var lim = lims[i].split(":");
                    if (lim.length != 2) {
                        alert("attrribute limit config error.");
                        return false;
                    }
                    if (lim[0] == "len" || lim[0] == "leng") {
                        // 长度检查，不管是什么类型，配置了长度就检查
                        var t = lim[0] == "len" ? 1 : 2;
                        //len按单字符计算，leng中文按双字符计算
                        var lenDesc = lim[1];
                        // alert(lim[1]);
                        if (lenDesc.indexOf("-") > -1) {
                            var als = lenDesc.split("-");
                            if (als.length == 2) {
                                if (als[0] == "") {
                                    if (len(valu, t) > parseInt(als[1])) {
                                        return setErrMessage(ele, " can't more than " + als[1]);
                                    }
                                } else if (als[1] == "") {
                                    if (len(valu, t) < parseInt(als[0])) {
                                        return setErrMessage(ele, " can't less than " + als[0]);
                                    }
                                } else if (len(valu, t) < parseInt(als[0]) || len(valu, t) > parseInt(als[1])) {
                                    return setErrMessage(ele, " must between " + als[0] + " and " + als[1]);
                                }
                            } else {
                                alert("Element" + ele.name + " config error.");
                                return false;
                            }
                        } else {
                            if (len(valu, t) != parseInt(lenDesc)) {
                                return setErrMessage(ele, " the length must be " + lenDesc);
                            }
                        }
                    } else if (lim[0] == "between" && lim[1].indexOf("-") > -1 && (vtype == "float" || vtype == "int")) {
                        var ls = lim[1].split("-");
                        var fv = parseFloat(valu);
                        // 如果没有下限
                        if (ls[0] == "") {
                            if (fv > parseFloat(ls[1])) {
                                return setErrMessage(ele, " can't more than " + ls[1]);
                            }
                        } else if (ls[1] == "") {
                            // 如果没有上限
                            if (fv < parseFloat(ls[0])) {
                                return setErrMessage(ele, " can't less than " + ls[0]);
                            }
                        } else {
                            if (fv < parseFloat(ls[0]) || fv > parseFloat(ls[1])) {
                                return setErrMessage(ele, " must between " + ls[0] + " and " + ls[1]);
                            }
                        }
                    } else if (lim[0] == "decLen" && vtype == "float") {
                        // 浮点数精度
                        if (valu.length - valu.indexOf(".") > parseInt(lim[1])) {
                            // 转换精度
                            var precision = Math.pow(10, parseInt(lim[1]) || 0);
                            ele.value = Math.round(parseFloat(valu) * precision) / precision;
                        }
                    } else if (lim[0] == "equals") {
                        // 是否要求检测其它相等的元素值
                        var oevalue = eval("document." + formName + "." + lim[1] + ".value");
                        if (oevalue != valu) {
                            return setErrMessage(ele, " not match element " + lim[1] + "'s value.");
                        }
                    } else if (lim[0] == "bigger") {
                        // 要求检测当前的值比指定元素值大
                        var oevalue = eval("document." + formName + "." + lim[1] + ".value");
                        od = parseInt(oevalue);
                        cd = parseInt(valu);
                        if (cd < od || isNaN(od) || isNaN(cd)) {
                            return setErrMessage(ele, " " + lim[0] + "  value  must bigger than " + lim[1]);
                        }
                    } else if (lim[0] == "than") {
                        // 要求检测当前的时间值比前一个时间值大
                        var oevalue = eval("document." + formName + "." + lim[1] + ".value");
                        od = toDate(oevalue);
                        cd = toDate(valu);
                        if (cd < od) {
                            return setErrMessage(ele, " " + lim[0] + "  date  must than " + lim[1]);
                        }
                    } else if (lim[0] == "less") {
                        // 要求检测当前的时间值比指定时间值小
                        ld = toDate(lim[1]);
                        cd = toDate(valu);
                        if (ld < cd) {
                            return setErrMessage(ele, " " + lim[0] + "  date  must less " + lim[1]);
                        }
                    }
                }
            }
            if (general && vtype == "string") {
                // alert(containsSpecialChar(valu));
                if (containsSpecialChar(valu)) {
                    return setErrMessage(ele, " can't allow contains special character.");
                }
            }
            // ajax判断验证错误
            if (ele.getAttribute("valid") == "0") {
                return setErrMessage(ele, "ajax valid failed");
            }
        }
        // ============================限制检验完毕=======================//
        global_formjs_valid_flag = true;
        return true;
    }
    /**
	 * 清空信息域
	 * 
	 * @param divid
	 */
    function clearMsgArea(divid) {
        var msgSpan = document.getElementById(divid);
        if (msgSpan != undefined && msgSpan != null) {
            msgSpan.innerHTML = "";
        }
    }
    function len(str, t) {
        var i, sum = 0;
        for (i = 0; i < str.length; i++) {
            switch (t) {
              case 1:
                // 将所有输入按单字符统计
                str.charCodeAt(i) >= 0 ? sum++ : "";
                break;

              case 2:
                // 将中文等按双字符统计
                if (str.charCodeAt(i) >= 0 && str.charCodeAt(i) <= 255) {
                    sum = sum + 1;
                } else {
                    sum = sum + 2;
                }
                break;
            }
        }
        return sum;
    }
    /* 去除空格 */
    function trim(str) {
        return str.replace(/^\s+|\s+$/g, "");
    }
    /**
	 * 判断是否数字 三种调用方式: 1.一个参数,简单判断是否为数字,但长度不超过10位 2.三个参数,第二个参数为 '>'(大于) 或 '<'(小于),第3个参数为要比较的数字
	 * 3.三个参数，第二个参数与第三个参数均为整数，判断传入的第一个参数值是否在他们中间。（含边界）
	 */
    function judgeDigit() {
        var s = arguments[0];
        if (arguments.length == 1) {
            return isDigit(s);
        } else if (arguments.length == 3) {
            // 通过验证
            var patrn = /^-?[0-9]{1,10}$/;
            if (patrn.test(s)) {
                var p1 = arguments[1];
                var sint = parseInt(s);
                if (isDigit(arguments[2])) {
                    var pint = parseInt(arguments[2]);
                    if (p1 == ">" || p1 == "<") {
                        if (p1 == ">") {
                            return sint > pint;
                        } else if (p1 == "<") {
                            return sint < pint;
                        }
                    } else if (isDigit(p1)) {
                        var pmin = parseInt(p1);
                        return sint >= pmin && sint <= pint;
                    } else {
                        alert("arguments error,the 2nd argument is not a number and not an operation:greater|less|equals.");
                    }
                } else {
                    alert("arguments error,the 3rd argument is not a number.");
                }
            }
        }
        return false;
    }
    /**
	 * 是否数字
	 */
    function isDigit(s) {
        var patrn = /^[0-9]{1,10}$/;
        return patrn.test(s);
    }
    /**
	 * 台湾身份证号码验证
	 */
    function istw_idCard(s) {
        var patrn = /^[a-zA-Z]\d{9}$/;
        return patrn.test(s);
    }
    /**
	 * 港澳身份证号码验证
	 */
    function ishkmc_idCard(s) {
        var patrn_hk = /^[a-zA-Z]{1,2}\d{6}\(\d{1}\)$/;
        var patrn_mc = /^[157]{1}\d{6}\(\d{1}\)$/;
        return patrn_hk.test(s) || patrn_mc.test(s);
    }
    /**
	 * 判断标识符或是登录名，以字母开头,可带数字、"_"、"." 的字串 限定最小长度(第二个参数)与最大长度(第三个参数)(默认为2--32位)
	 * 
	 * @param string
	 * @param min
	 *            length
	 * @param max
	 *            length
	 */
    function isSignName() {
        var s = arguments[0];
        if (arguments.length == 1) {
            // var patrn=/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){1,31}$/;
            // 用户名判断一品规则
            var patrn = /^[a-zA-Z_\u4E00-\u9FA5]{1}([\w\u4E00-\u9FA5]*)$/;
            return patrn.test(s);
        } else if (arguments.length == 3) {
            if (isDigit(arguments[1]) && isDigit(arguments[2])) {
                eval("var patrn=/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){" + (parseInt(arguments[1]) - 1) + "," + (parseInt(arguments[2]) - 1) + "}$/;");
                return eval("patrn.test(s);");
            } else {
                alert("Error:the 2nd argument and the 3rd argument must be number.");
                return false;
            }
        } else {
            alert("method invoke error.error arguments number.");
            return false;
        }
    }
    /**
	 * 判断是否是真实姓名
	 */
    function isRealName(s) {
        var patrn = /^([a-zA-Z0-9]|[._ ]){2,64}$/;
        // 英文名
        var p2 = /^([^\x00-\xff]|[\s]){2,32}$/;
        // 双字节名
        return patrn.test(s) || p2.test(s);
    }
    /**
	 * 电话号码 必须以数字开头，除数字外，可含有"-"
	 */
    function isTel(s) {
        // var patrn=/^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;
        var patrn = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
        var patrn2 = /^1[3|5|8]{1}[0-9]{1}[-| ]?\d{8}$/;
        var patrn3 = /^(400)[6|7|8|1|0]{1}[-| ]?\d{3}[-| ]?\d{3}$/;
        var patrn4 = /^(800)[-| ]?\d{3}[-| ]?\d{4}$/;
        var patrn5 = /^(00852)?[-| ]?[6|9]{1}\d{7}$/;
        return patrn.test(s) || patrn2.test(s) || patrn3.test(s) || patrn4.test(s) || patrn5.test(s);
    }
    /**
	 * 中国大陆地区手机号码 以13或15开头，使用时请根据变化修改 校验普通电话，除数字外，可用"-"或空格分开
	 */
    function isMobileCN(s) {
        var patrn = /^1[0-9]{1}[0-9]{1}[-| ]?\d{8}$/;
        var patrn2 = /^(00852)?[-| ]?[6|9|5]{1}\d{7}$/;
        //香港手机
        var patrn3 = /^09\d{8}$/;
        //台湾手机
        var patrn4 = /^(00886)?[-| ]?0?9\d{8}$/;
        //台湾手机
        var patrn5 = /^(00853)?[-| ]?6\d{7}$/;
        //澳门手机
        return patrn.test(s) || patrn2.test(s) || patrn3.test(s) || patrn4.test(s) || patrn5.test(s);
    }
    /**
	 * 验证手机+电话
	 */
    function isTelCN(s) {
        var str_return;
        str_return = false;
        if (isTel(s)) {
            str_return = true;
        }
        if (isMobileCN(s)) {
            str_return = true;
        }
        return str_return;
    }
    /*******************************************************************************
	 * 中国地区邮编
	 ******************************************************************************/
    function isPostalCodeCN(s) {
        var patrn = /^[0-9]\d{5}$/;
        return patrn.test(s);
    }
    /**
	 * 中国台湾地区手机号码 台湾手机10位数，皆以09起头
	 */
    function isMobileTW(s) {
        var patrn = /^09\d{8}$/;
        var patrn2 = /^(00886)?[-| ]?0?9\d{8}$/;
        return patrn.test(s) || patrn2.test(s);
    }
    /**
	 * 中国香港地区手机号码 手机8位数，皆以6 9 5起头
	 */
    function isMobileHK(s) {
        var patrn = /^(00852)?[-| ]?[6|9|5]{1}\d{7}$/;
        return patrn.test(s);
    }
    /**
	 * 中国澳门地区手机号码 手机8位数，皆以6起头
	 */
    function isMobileMC(s) {
        var patrn = /^(00853)?[-| ]?6\d{7}$/;
        return patrn.test(s);
    }
    /** Emai */
    function isEmail(s) {
        var patrn = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        return patrn.test(s);
    }
    /** URL */
    function isURL(s) {
        var patrn = /^http:\/\/([\w-]+(\.[\w-]+)+(\/[\w-   .\/\?%&=\u4e00-\u9fa5]*)?)?$/;
        return patrn.test(s);
    }
    /**
	 * IP
	 */
    function isIP(s) {
        var patrn = /^((1?\d?\d|(2([0-4]\d|5[0-5])))\.){3}(1?\d?\d|(2([0-4]\d|5[0-5])))$/;
        return patrn.test(s);
    }
    /**
	 * 是否是完整的正则表达式 只有开始标记与结束标记相匹配才为TRUE HTML Tag
	 */
    function isHtmlTag(s) {
        var patrn = /^<(.*)>.*<\/\1>|<(.*) \/>$/;
        return patrn.test(s);
    }
    /**
	 * 身份证号 这里的省与地区码还没有判断 15位
	 */
    function isIDNumber15(s) {
        var patrn = /^[\d]{6}((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229)[\d]{3}$/;
        return patrn.test(s);
    }
    /**
	 * 身份证号 这里的省与地区码还没有判断 18位
	 */
    function isIDNumber18(s) {
        var patrn = /^[\d]{6}[0-9]{4}(((0[13578]|(10|12))(0[1-9]|[1-2][0-9]|3[0-1]))|(02(0[1-9]|[1-2][0-9]))|((0[469]|11)(0[1-9]|[1-2][0-9]|30)))[\d]{3}[\d|x|X]$/;
        return patrn.test(s);
    }
    /**
	 * 中文
	 */
    function isChineseString(s) {
        var patrn = /^[\u4e00-\u9fa5]+$/;
        return patrn.test(s);
    }
    /**
	 * 双字节
	 */
    function isDoubleByteString(s) {
        var patrn = /^[^x00-xff]+$/;
        return patrn.test(s);
    }
    /**
	 * 是否包含首尾空格，如果包含，返回TRUE
	 */
    function hasHESpace(s) {
        var patrn = /^\s+|\s+$/;
        return patrn.test(s);
    }
    /**
	 * QQ，最大10位，最小5位
	 */
    function isQQ(s) {
        var patrn = /^[1-9]{1}\d{4,9}$/;
        return patrn.test(s);
    }
    /**
	 * 浮点数 如果是一个参数，那么判断是否为浮点数 如果有两个参数，那么将第二个参数作为精度限定参数 如果有三个参数，那么第三个参数是将作为数值上限
	 */
    function judgeFloat() {
        if (arguments.length == 1) {
            return isFloat(arguments[0]);
        } else if (arguments.length == 2) {
            eval("var patrn = /^-?\\d+.?\\d{0," + arguments[1] + "}$/;");
            return eval("patrn.test(arguments[0]);");
        } else if (arguments.length == 4) {
            var a3 = arguments[2];
            if (a3 == ">" || a3 == "<") {
                if (isFloat(arguments[3])) {
                    eval("var patrn = /^-?\\d+.?\\d{0," + arguments[1] + "}$/;");
                    if (eval("patrn.test(arguments[0]);")) {
                        if (a3 == "<") {
                            if (parseFloat(arguments[0]) < parseFloat(arguments[3])) return true;
                        } else {
                            if (parseFloat(arguments[0]) > parseFloat(arguments[3])) return true;
                        }
                    }
                    return false;
                }
            } else if (isFloat(a3)) {
                eval("var patrn = /^-?\\d+.?\\d{0," + arguments[1] + "}$/;");
                if (eval("patrn.test(arguments[0]);")) {
                    var f0 = parseFloat(arguments[0]);
                    var f3 = parseFloat(arguments[2]);
                    var f4 = parseFloat(arguments[3]);
                    return f0 >= f3 && f0 <= f4;
                } else {
                    return false;
                }
            } else {
                alert("the 3rd and the 4th arguments are not number.");
                return false;
            }
        }
        return false;
    }
    /**
	 * 是否是浮点数
	 */
    function isFloat(s) {
        var patrn = /^-?\d*.?\d+$/;
        return patrn.test(s);
    }
    /**
	 * 是否闰年
	 */
    function isLeapYear(y) {
        return y % 4 == 0 && y % 100 != 0 || y % 400 == 0;
    }
    /**
	 * 日期 yyyy-mm-dd格式或yyyy/mm/dd格式，年用两位表示亦可 Regex author:Michael Ash 支持1600年以后
	 */
    function isDateYMD(s) {
        var patrn = /^(?:(?:(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(\/|-|\.)(?:0?2\1(?:29)))|(?:(?:(?:1[6-9]|[2-9]\d)?\d{2})(\/|-|\.)(?:(?:(?:0?[13578]|1[02])\2(?:31))|(?:(?:0?[1,3-9]|1[0-2])\2(29|30))|(?:(?:0?[1-9])|(?:1[0-2]))\2(?:0?[1-9]|1\d|2[0-8]))))$/;
        return patrn.test(s);
    }
    /**
	 * 日期 dd-mm-yyyy格式或dd/mm/yyyy格式，年用两位表示亦可 Regex author:Marco Storti 支持1600年以后
	 */
    function isDateDMY(s) {
        var patrn = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        return patrn.test(s);
    }
    /**
	 * 日期 mm-dd-yyyy格式或mm/dd/yyyy格式，年用两位表示亦可 Regex author:Michael Ash 支持1600年以后
	 */
    function isDateMDY(s) {
        var patrn = /^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[13-9]|1[0-2])(\/|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/|-|\.)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        return patrn.test(s);
    }
    /**
	 * 日期时间：M/d/y hh:mm:ss Regex author:Michael Ash 支持1600年以后
	 */
    function isDateTimeMDY(s) {
        var patrn = /^(?=\d)(?:(?:(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})|(?:0?2(\/|-|\.)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))|(?:(?:0?[1-9])|(?:1[0-2]))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2}))($|\ (?=\d)))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\ [AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/;
        return patrn.test(s);
    }
    /**
	 * 日期时间 yyyy/mm/dd hh:mm:ss 或 yyyy-mm-dd hh:mm:ss Date Regex author:Michael Ash
	 * Modified by Shaw Sunkee 支持1600年以后
	 */
    function isDateTimeYMD(s) {
        var patrn = /^(?:(?:(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(\/|-|\.)(?:0?2\1(?:29)))|(?:(?:(?:1[6-9]|[2-9]\d)?\d{2})(\/|-|\.)(?:(?:(?:0?[13578]|1[02])\2(?:31))|(?:(?:0?[1,3-9]|1[0-2])\2(29|30))|(?:(?:0?[1-9])|(?:1[0-2]))\2(?:0?[1-9]|1\d|2[0-8]))))[ ]([0-1]?[0-9]|[2][0-3]):([0-5]?[0-9]):([0-5]?[0-9])$/;
        return patrn.test(s);
    }
    /**
	 * 时间 hh:mm:ss 24小时制 0 ~ 23 hour
	 */
    function isTime(s) {
        var patrn = /^([0-1]?[0-9]|[2][0-3]):([0-5]?[0-9]):([0-5]?[0-9])$/;
        return patrn.test(s);
    }
    function toDate(s) {
        var sd = s.split("-");
        return new Date(sd[0], sd[1], sd[2]);
    }
    /**
	 * 是否包含非特殊字符(正常字符包括字母数字，下划线，和点号，空格，@#$% 和双字节) 若包含，返回 true
	 */
    var validation_specialChars = new Array("'", '"', "\n", "\r", "	", ";", ":", "=", "<", ">", ",", "|", "\\", "<", ">", "/", "^", "~", "`", "$", "#", " ");
    function containsSpecialChar(str) {
        for (var i = 0; i < validation_specialChars.length; i++) {
            if (str.indexOf(validation_specialChars[i]) > -1) {
                return true;
            }
        }
        return false;
    }
    /**
	 * 判断是否为数字串(可在串前加"-"号，如：-123) 两种调用方式: 1.一个参数，不限制长度
	 * 2.三个参数，第二个参数表示允许的最小长度，第三个参数表示允许的最大长度
	 */
    function isDigitString() {
        return judgePattrnAndLen("-?\\d", arguments);
    }
    /**
	 * 字母串 两种调用方式： 一种是一个参数，传入要验证的值 二种是带三个参数，第二和第三个参数分别代表最小长度和最大长度
	 */
    function isLetter() {
        return judgePattrnAndLen("[A-Za-z]", arguments);
    }
    /**
	 * 大写字母 两种调用方式： 一种是一个参数，传入要验证的值 二种是带三个参数，第二和第三个参数分别代表最小长度和最大长度
	 */
    function isUpperLetter() {
        return judgePattrnAndLen("[A-Z]", arguments);
    }
    /**
	 * 小写字母 两种调用方式： 一种是一个参数，传入要验证的值 二种是带三个参数，第二和第三个参数分别代表最小长度和最大长度
	 */
    function isLowerLetter() {
        return judgePattrnAndLen("[a-z]", arguments);
    }
    /** 数字与字符串 */
    function isLetterNumString() {
        return judgePattrnAndLen("[A-Za-z0-9]", arguments);
    }
    /** 数字，字母，下划线字符串 */
    function isLNUString(s) {
        return judgePattrnAndLen("\\w", arguments);
    }
    /** 价格 **/
    function isPrice(s) {
        var ret = false;
        ret = isFloat(s) && s > 0 ? true : false;
        return ret;
    }
    /** 正整数 **/
    function isUnsignedInt(s) {
        var ret = false;
        ret = isDigit(s) && s > 0 ? true : false;
        return ret;
    }
    /**
	 * 传入一个简单的正则式串，要判定的值，传入限定最小长度和最大长度
	 * 
	 * @return
	 */
    function judgePattrnAndLen() {
        var pat = arguments[0];
        var as = arguments[1];
        if (as == null || as == undefined || as.length == 0) {
            alert("no arguments.");
            return false;
        } else if (as.length == 1) {
            eval("var patrn= /^" + pat + "+$/;");
            return eval("patrn.test(as[0]);");
        } else if (as.length == 3) {
            if (isDigit(as[1]) && isDigit(as[2])) {
                eval("patrn =" + "/^" + pat + "{" + as[1] + "," + as[2] + "}$/;");
                return eval("patrn.test(as[0]);");
            } else {
                alert("error arguments:the 2nd argument and the 3rd argument must be number.");
                return false;
            }
        } else {
            alert("error arguments number");
            return false;
        }
    }
    Array.prototype.in_array = function(e) {
        for (i = 0; i < this.length; i++) {
            if (this[i] == e) return true;
        }
        return false;
    };
    String.prototype.Trim = function() {
        return this.replace(/(^\s*)|(\s*$)/g, " ");
    };
    /**
	 * obj input_obj isAlert boolen
	 */
    function isExtName(obj, isalert, msgType, showTarget) {
        var value = obj.value;
        var ext = obj.getAttribute("ext");
        var ext_arr = ext.split(",");
        var s_num = value.lastIndexOf(".");
        var lastname = value.substring(s_num, value.length).toLowerCase();
        if (isalert) {
            if (ext_arr.in_array(lastname)) {
                return true;
            } else {
                if (msgType) {
                    tipsAppend(showTarget, lastname + "的文件格式不正确!", "error", "red");
                } else {
                    showDialog(lastname + "的文件格式不正确!", "alert", "文件格式错误", "", 0);
                }
                return false;
            }
        } else {
            if (ext_arr.in_array(lastname)) {
                return true;
            } else {
                return false;
            }
        }
    }
    // 验证页面所有input标签
    function form_valid() {
        var eles = $("input,select,textarea");
        // document.getElementsByTagName('input');
        for (i = 0; i < eles.length; i++) {
            var limit = eles[i].getAttribute("limit");
            if (limit != null && limit != "") {
                id = eles[i].getAttribute("id");
                if (id != "" && id != null) {
                    ele_valid(id);
                }
            }
        }
        return true;
    }
    // 通用元素离焦与focus验证方法
    function ele_valid(id) {
        var obj = document.getElementById(id);
        var msgArea = obj.getAttribute("msgArea");
        var msg = obj.getAttribute("msg");
        var tips = msg;
        if (tips == null) tips = "&nbsp;";
        $("#" + id).blur(function() {
            var url = obj.getAttribute("ajax");
            var caseon = obj.getAttribute("caseon");
            var value = "";
            if (caseon == "submit") {
                aa = true;
                // 验证模式为只提交验证时 跳过验证
                $("#" + msgArea).removeClass("valid_info").removeClass("valid_error");
                // 去除错误显示
                $("#" + msgArea).html("<span>" + tips + "</span>");
            } else {
                var aa = validElement(obj);
            }
            if (!aa) {
                $("#" + msgArea).removeClass("valid_info").removeClass("valid_success").addClass("valid_error");
                $("#" + msgArea).html("<span>" + tips + "</span>");
                // 提示还原
                return false;
            } else {
                // ajax验证
                if (url) {
                    value = trim($("#" + id).val());
                    if (!value.length) {
                        //$("#" + msgArea).removeClass('valid_success').removeClass('valid_error').addClass('valid_info');
                        return false;
                    }
                    url += encodeURIComponent(value);
                    $.post(url, function(data) {
                        if ($.trim(data) == true) {
                            $("#" + msgArea).removeClass("valid_info").removeClass("valid_error").addClass("valid_success");
                            $("#" + msgArea).html("<font>&nbsp;</font>");
                            $("#" + id).attr("valid", 2);
                            return true;
                        } else {
                            $("#" + msgArea).removeClass("valid_info").removeClass("valid_success").addClass("valid_error");
                            $("#" + msgArea).html("<span>" + data + "</span>");
                            $("#" + id).attr("valid", 1);
                            return false;
                        }
                    });
                } else {
                    $("#" + msgArea).removeClass("valid_info").removeClass("valid_error").addClass("valid_success");
                    $("#" + msgArea).html("<font>&nbsp;</font>");
                    return true;
                }
            }
        }).focus(function() {
            return false;
        });
    }
    // 二次验证，替换validElement
    function keke_valid(obj) {
        var msgArea = obj.getAttribute("msgArea");
        var msg = obj.getAttribute("msg");
        var tips = obj.getAttribute("tips");
        var value = "", url = "";
        url = obj.getAttribute("ajax");
        var id = obj.getAttribute("id");
        var aa = validElement(obj);
        if (!aa) {
            $("#" + msgArea).removeClass("valid_info").removeClass("valid_success").addClass("valid_error");
            $("#" + msgArea).html("<font>" + msg + "</font>");
            return false;
        } else {
            // ajax验证t
            if (url) {
                value = $(obj).val();
                url += value;
                $.post(url, function(data) {
                    if ($.trim(data) == true) {
                        $("#" + msgArea).removeClass("valid_info").removeClass("valid_error").addClass("valid_success");
                        $("#" + msgArea).html("<font>&nbsp;</font>");
                        $(obj).attr("valid", 2);
                        return true;
                    } else {
                        $("#" + msgArea).removeClass("valid_info").removeClass("valid_success").addClass("valid_error");
                        $("#" + msgArea).html("<font>" + data + "</font>");
                        $(obj).attr("valid", 1);
                        return false;
                    }
                });
            } else {
                $("#" + msgArea).removeClass("valid_info").removeClass("valid_error").addClass("valid_success");
                $("#" + msgArea).html("<font>&nbsp;</font>");
                return true;
            }
        }
    }
    // 页面加载时验证
    $(function() {
        form_valid();
    });
    module.exports = {
        form_valid: function() {
            form_valid();
        }
    };
});
