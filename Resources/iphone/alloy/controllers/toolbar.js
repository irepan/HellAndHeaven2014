function Controller() {
    function leftClick(e) {
        leftClick(e);
    }
    function rightClick(e) {
        rightClick(e);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "toolbar";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.toolbar = Ti.UI.createView({
        id: "toolbar"
    });
    $.__views.toolbar && $.addTopLevelView($.__views.toolbar);
    $.__views.iostop = Ti.UI.createView({
        backgroundColor: "gray",
        top: 0,
        left: 0,
        right: 0,
        height: 20,
        id: "iostop"
    });
    $.__views.toolbar.add($.__views.iostop);
    $.__views.toolbarButtons = Ti.UI.createView({
        backgroundColor: "red",
        height: 30,
        top: 20,
        left: 0,
        right: 0,
        id: "toolbarButtons"
    });
    $.__views.toolbar.add($.__views.toolbarButtons);
    $.__views.leftButton = Ti.UI.createImageView({
        height: 20,
        width: 20,
        top: 5,
        backgroundColor: "white",
        left: 5,
        id: "leftButton"
    });
    $.__views.toolbarButtons.add($.__views.leftButton);
    leftClick ? $.__views.leftButton.addEventListener("click", leftClick) : __defers["$.__views.leftButton!click!leftClick"] = true;
    $.__views.title = Ti.UI.createLabel({
        id: "title"
    });
    $.__views.toolbarButtons.add($.__views.title);
    $.__views.rightButton = Ti.UI.createImageView({
        height: 20,
        width: 20,
        top: 5,
        backgroundColor: "white",
        right: 5,
        id: "rightButton"
    });
    $.__views.toolbarButtons.add($.__views.rightButton);
    rightClick ? $.__views.rightButton.addEventListener("click", rightClick) : __defers["$.__views.rightButton!click!rightClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    args.container || null;
    var contentView = args.content || null;
    args.leftButton || null;
    var leftClick = args.leftClick || function() {};
    args.rightButton || null;
    var rightClick = args.rightClick || function() {};
    var title = args.title || "";
    $.toolbar.setTitle = function(title) {
        var title = title || "";
        $.title.text = title;
    };
    $.toolbar.setTitle(title);
    contentView.top = 30;
    if ("android" != Alloy.Globals.osname) {
        $.iostop.height = 20;
        contentView.top += 20;
        $.iostop.visible = true;
    } else $.iostop.visible = false;
    __defers["$.__views.leftButton!click!leftClick"] && $.__views.leftButton.addEventListener("click", leftClick);
    __defers["$.__views.rightButton!click!rightClick"] && $.__views.rightButton.addEventListener("click", rightClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;