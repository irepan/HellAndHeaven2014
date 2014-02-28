function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "GeneralWindow/" + s : s.substring(0, index) + "/GeneralWindow/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("GeneralWindow");
    this.__widgetId = "GeneralWindow";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.window = Ti.UI.createWindow({
        backgroundImage: "img/background.jpg",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "window"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    $.__views.toolbar = Ti.UI.createView({
        id: "toolbar"
    });
    $.__views.window.add($.__views.toolbar);
    $.__views.content = Ti.UI.createView({
        left: 0,
        right: 0,
        id: "content"
    });
    $.__views.window.add($.__views.content);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var title = args.title || "";
    var content = args.content || null;
    var leftButton = args.leftButton || null;
    var leftClick = args.leftClick || function() {};
    var rightButton = args.rightButton || null;
    var rightClick = args.rightClick || function() {};
    var toolbar = Alloy.createWidget("WindowToolBar", "widget", {
        title: title,
        container: $.window,
        content: $.content,
        leftButton: leftButton,
        leftClick: leftClick,
        rightButton: rightButton,
        rightClick: rightClick
    }).getView();
    $.toolbar.add(toolbar);
    var setContent = function(content) {
        if (null != content) {
            $.content.add(content);
            content.open = function() {
                $.window.open();
            };
            content.close = function() {
                $.window.close();
            };
        }
    };
    var setTitle = function(title) {
        toolbar.setTitle(title);
    };
    setContent(content);
    exports.setContent = setContent;
    exports.setTitle = setTitle;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;