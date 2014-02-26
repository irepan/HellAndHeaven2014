function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "sectionview";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.viewSection = Ti.UI.createTableViewSection({
        id: "viewSection"
    });
    $.__views.viewSection && $.addTopLevelView($.__views.viewSection);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    alert(args);
    $.viewSection.headerTitle = args.titulo;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;