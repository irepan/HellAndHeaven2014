function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "sectionview";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId3 = Ti.UI.createView({
        backgroundColor: "brown",
        id: "__alloyId3"
    });
    $.__views.title = Ti.UI.createLabel({
        id: "title"
    });
    $.__views.__alloyId3.add($.__views.title);
    $.__views.viewSection = Ti.UI.createTableViewSection({
        backgroundColor: "brown",
        headerView: $.__views.__alloyId3,
        id: "viewSection"
    });
    $.__views.viewSection && $.addTopLevelView($.__views.viewSection);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.viewSection.headerTitle = args.titulo;
    exports.add = function(row) {
        alert(alerta);
        $.viewSection.add(row);
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;