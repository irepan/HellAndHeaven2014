function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "WindowToolBar/" + s : s.substring(0, index) + "/WindowToolBar/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function leftClick(e) {
        handlers.leftClick(e);
    }
    function rightClick(e) {
        handlers.rightClick(e);
    }
    new (require("alloy/widget"))("WindowToolBar");
    this.__widgetId = "WindowToolBar";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.toolbar = Ti.UI.createView({
        backgroundColor: "transparent",
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
        backgroundColor: "brown",
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
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
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
    var _args = arguments[0] || {};
    var handlers = {};
    handlers.leftClick = function() {};
    handlers.rightClick = function() {};
    var containerWindow = null;
    var contentView = null;
    var _leftButton = null;
    var _rightButton = null;
    setTitle = function(title) {
        var title = title || "";
        $.title.text = title;
    };
    setContainer = function(container) {
        containerWindow = container || null;
    };
    setContent = function(content) {
        contentView = content || null;
    };
    setLeftButton = function(leftButton) {
        _leftButton = leftButton || null;
    };
    setRightButton = function(rightButton) {
        _rightButton = rightButton || null;
    };
    for (key in _args) if (_args.hasOwnProperty(key)) switch (key) {
      case "title":
        setTitle(_args[key]);
        break;

      case "leftClick":
        handlers.leftClick = _args[key];
        break;

      case "rightClick":
        handlers.rightClick = _args[key];
        break;

      case "container":
        setContainer(_args[key]);
        break;

      case "content":
        setContent(_args[key]);
        break;

      case "leftButton":
        setLeftButton(_args[key]);
        break;

      case "rightButton":
        setRightButton(_args[key]);
        break;

      default:
        $.toolbarButtons[key] = _args[key];
    }
    exports.addEventListener = function(listenerName, listenerFunction) {
        switch (listenerName) {
          case "leftClick":
            handlers.leftClick = listenerFunction;
            break;

          case "rightClick":
            handlers.rightClick = listenerFunction;
        }
    };
    contentView.top = 30;
    if ("iphone" === Alloy.Globals.osname || "ipad" === Alloy.Globals.osname) {
        $.iostop.height = 20;
        contentView.top += 20;
        $.iostop.visible = true;
    } else $.iostop.visible = false;
    exports.getTitle = function() {
        return $.title.text;
    };
    exports.setTitle = setTitle;
    exports.setContainer = setContainer;
    exports.setContent = setContent;
    exports.setLeftButton = setLeftButton;
    exports.setRightButton = setRightButton;
    __defers["$.__views.leftButton!click!leftClick"] && $.__views.leftButton.addEventListener("click", leftClick);
    __defers["$.__views.rightButton!click!rightClick"] && $.__views.rightButton.addEventListener("click", rightClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;