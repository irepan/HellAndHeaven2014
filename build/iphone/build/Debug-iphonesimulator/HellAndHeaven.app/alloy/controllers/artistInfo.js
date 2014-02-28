function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "artistInfo";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.artistInfo = Ti.UI.createTableViewRow({
        backgroundColor: "transparent",
        backgroundDisabledColor: "transparent",
        id: "artistInfo"
    });
    $.__views.artistInfo && $.addTopLevelView($.__views.artistInfo);
    $.__views.image = Ti.UI.createImageView({
        id: "image"
    });
    $.__views.artistInfo.add($.__views.image);
    $.__views.name = Ti.UI.createLabel({
        id: "name"
    });
    $.__views.artistInfo.add($.__views.name);
    $.__views.time = Ti.UI.createlabel({
        id: "time"
    });
    $.__views.artistInfo.add($.__views.time);
    $.__views.type = Ti.UI.createLabel({
        id: "type"
    });
    $.__views.artistInfo.add($.__views.type);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    args.artist || "";
    args.time || "";
    args.type || "";
    "" | args.image;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;