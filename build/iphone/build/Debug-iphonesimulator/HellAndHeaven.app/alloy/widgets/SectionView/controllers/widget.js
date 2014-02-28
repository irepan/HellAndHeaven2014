function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "SectionView/" + s : s.substring(0, index) + "/SectionView/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("SectionView");
    this.__widgetId = "SectionView";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.sectionView = Ti.UI.createView({
        backgroundColor: "brown",
        id: "sectionView"
    });
    $.__views.title = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "title"
    });
    $.__views.sectionView.add($.__views.title);
    $.__views.widget = Ti.UI.createTableViewSection({
        backgroundColor: "brown",
        headerView: $.__views.sectionView,
        id: "widget"
    });
    $.__views.widget && $.addTopLevelView($.__views.widget);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var _args = arguments[0] || {};
    var handlers = {};
    handlers.click = function() {};
    for (key in _args) if (_args.hasOwnProperty(key)) switch (key) {
      case "title":
        $.title.text = _args[key];
        break;

      default:
        $.sectionView[key] = _args[key];
    }
    exports.addEventListener = function(listenerName, listenerFunction) {
        switch (listenerName) {
          case "click":
            handlers.click = listenerFunction;
            break;

          default:
            Ti.API.info("algo");
        }
    };
    exports.getTitle = function() {
        return $.title.text;
    };
    exports.setTitle = function(title) {
        $.title.text = title;
    };
    exports.add = function(row) {
        $.widget.add(row);
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;