function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "scenariowindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.scenariowindow = Ti.UI.createWindow({
        id: "scenariowindow"
    });
    $.__views.scenariowindow && $.addTopLevelView($.__views.scenariowindow);
    $.__views.__alloyId0 = Ti.UI.createSearchBar({
        id: "__alloyId0"
    });
    $.__views.scenario = Ti.UI.createTableView({
        search: $.__views.__alloyId0,
        id: "scenario"
    });
    $.__views.scenariowindow.add($.__views.scenario);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    for (var index in Alloy.Globals.scenarios) {
        var scenario = Alloy.createController("sectionView", Alloy.Globals.scenarios[index]).getView();
        $.scenario.appendSection(scenario);
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;