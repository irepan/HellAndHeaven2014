function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "ArtistInfo/" + s : s.substring(0, index) + "/ArtistInfo/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("ArtistInfo");
    this.__widgetId = "ArtistInfo";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        backgroundColor: "transparent",
        backgroundDisabledColor: "transparent",
        height: 80,
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.__alloyId0 = Ti.UI.createView({
        backgroundColor: "transparent",
        height: 80,
        id: "__alloyId0"
    });
    $.__views.row.add($.__views.__alloyId0);
    $.__views.image = Ti.UI.createImageView({
        top: 5,
        left: 5,
        bottom: 5,
        height: 70,
        width: 100,
        backgroundColor: "white",
        id: "image"
    });
    $.__views.__alloyId0.add($.__views.image);
    $.__views.__alloyId1 = Ti.UI.createView({
        left: 105,
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.name = Ti.UI.createLabel({
        color: "white",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        left: 10,
        top: 12,
        id: "name"
    });
    $.__views.__alloyId1.add($.__views.name);
    $.__views.time = Ti.UI.createLabel({
        color: "brown",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 12
        },
        left: 10,
        top: 32,
        id: "time"
    });
    $.__views.__alloyId1.add($.__views.time);
    $.__views.type = Ti.UI.createLabel({
        color: "brown",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 12
        },
        left: 10,
        top: 46,
        id: "type"
    });
    $.__views.__alloyId1.add($.__views.type);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var _args = arguments[0] || {};
    var handlers = {};
    handlers.click = function() {};
    Ti.API.info(JSON.stringify(_args));
    exports.setImage = function(image) {
        $.image.image = image;
    };
    for (key in _args) if (_args.hasOwnProperty(key)) switch (key) {
      case "image":
        $.image.image = _args[key];
        break;

      case "artist":
        $.name.text = _args[key];
        $.row.title = _args[key];
        break;

      case "time":
        $.time.text = _args[key];
        break;

      case "type":
        $.type.text = _args[key];
        break;

      default:
        $.row[key] = _args[key];
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;