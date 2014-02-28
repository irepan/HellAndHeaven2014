function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "generalWindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.generalWindow = Ti.UI.createWindow({
        backgroundImage: "img/background.jpg",
        id: "generalWindow"
    });
    $.__views.generalWindow && $.addTopLevelView($.__views.generalWindow);
    $.__views.toolbar = Ti.UI.createView({
        id: "toolbar"
    });
    $.__views.generalWindow.add($.__views.toolbar);
    $.__views.content = Ti.UI.createView({
        left: 0,
        right: 0,
        id: "content"
    });
    $.__views.generalWindow.add($.__views.content);
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
        container: $.generalWindow,
        content: $.content,
        leftButton: leftButton,
        leftClick: leftClick,
        rightButton: rightButton,
        rightClick: rightClick
    }).getView();
    $.toolbar.add(toolbar);
    $.generalWindow.setContent = function(content) {
        if (null != content) {
            $.content.add(content);
            content.open = function() {
                $.generalWindow.open();
            };
            content.close = function() {
                $.generalWindow.close();
            };
        }
    };
    $.generalWindow.setContent(content);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;