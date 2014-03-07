function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "schedulewindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.dates = Ti.UI.createTableView({
        backgroundColor: "transparent",
        backgroundDisabledColor: "transparent",
        id: "dates"
    });
    $.__views.dates && $.addTopLevelView($.__views.dates);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    Alloy.createWidget("GeneralWindow", "widget", {
        title: L("dates"),
        content: $.dates,
        leftClick: function() {
            $.dates.close();
        }
    }).getView();
    for (var index in Alloy.Globals.days) {
        var dayRow = Alloy.Globals.createDayRow(Alloy.Globals.days[index]);
        $.dates.appendRow(dayRow);
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;