function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "FormattedViewRow/" + s : s.substring(0, index) + "/FormattedViewRow/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("FormattedViewRow");
    this.__widgetId = "FormattedViewRow";
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
    $.__views.__alloyId1 = Ti.UI.createView({
        backgroundColor: "transparent",
        height: 80,
        id: "__alloyId1"
    });
    $.__views.row.add($.__views.__alloyId1);
    $.__views.image = Ti.UI.createImageView({
        top: 5,
        left: 5,
        bottom: 5,
        height: 70,
        width: 100,
        color: "transparent",
        id: "image"
    });
    $.__views.__alloyId1.add($.__views.image);
    $.__views.__alloyId2 = Ti.UI.createView({
        left: 105,
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.title = Ti.UI.createLabel({
        color: "white",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        left: 10,
        id: "title"
    });
    $.__views.__alloyId2.add($.__views.title);
    $.__views.subtitle = Ti.UI.createLabel({
        color: "brown",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 12
        },
        left: 10,
        id: "subtitle"
    });
    $.__views.__alloyId2.add($.__views.subtitle);
    $.__views.detail = Ti.UI.createLabel({
        color: "brown",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 12
        },
        left: 10,
        id: "detail"
    });
    $.__views.__alloyId2.add($.__views.detail);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var _args = arguments[0] || {};
    var handlers = {};
    handlers.click = function() {};
    var _subtitle = "";
    var _detail = "";
    $.subtitle.visible = false;
    $.detail.visible = false;
    Ti.API.info(JSON.stringify(_args));
    var setArrangement = function() {
        if ("" === _subtitle && "" === _detail) {
            $.subtitle.visible = false;
            $.detail.visible = false;
            $.title.top = null;
        } else if ("" != _subtitle && "" === _detail) {
            $.subtitle.visible = true;
            $.detail.visible = false;
            $.title.top = 20;
            $.subtitle.top = 40;
        } else if ("" != _detail && "" === _subtitle) {
            $.subtitle.visible = false;
            $.detail.visible = true;
            $.title.top = 20;
            $.detail.top = 40;
        } else {
            $.subtitle.visible = true;
            $.detail.visible = true;
            $.title.top = 12;
            $.subtitle.top = 32;
            $.detail.top = 46;
        }
    };
    var setImage = function(image) {
        var _image = image || "";
        $.image.image = _image;
    };
    var setTitle = function(title) {
        $.title.text = title;
        $.row.searchFilter = title;
        setArrangement();
    };
    var setSubtitle = function(subtitle) {
        _subtitle = subtitle || "";
        $.subtitle.text = _subtitle;
        setArrangement();
    };
    var setDetail = function(detail) {
        _detail = detail || "";
        $.detail.text = _detail;
        setArrangement();
    };
    for (key in _args) if (_args.hasOwnProperty(key)) switch (key) {
      case "image":
        setImage(_args[key]);
        break;

      case "title":
        setTitle(_args[key]);
        break;

      case "subtitle":
        setSubtitle(_args[key]);
        break;

      case "detail":
        setDetail(_args[key]);
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
    exports.setImage = setImage;
    exports.setTitle = setTitle;
    exports.setSubtitle = setSubtitle;
    exports.setDetail = setDetail;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;