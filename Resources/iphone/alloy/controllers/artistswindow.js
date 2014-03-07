function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "artistswindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId3 = Ti.UI.createSearchBar({
        opacity: .2,
        backgroundColor: "transparent",
        backgroundSelectedColor: "transparent",
        id: "__alloyId3"
    });
    $.__views.artist = Ti.UI.createTableView({
        backgroundColor: "transparent",
        backgroundDisabledColor: "transparent",
        search: $.__views.__alloyId3,
        id: "artist",
        filterAttribute: "searchFilter"
    });
    $.__views.artist && $.addTopLevelView($.__views.artist);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    Alloy.createWidget("GeneralWindow", "widget", {
        title: L("bands"),
        content: $.artist,
        leftClick: function() {
            $.artist.close();
        }
    }).getView();
    for (var index in Alloy.Globals.scenarios) {
        var scenario = Alloy.createWidget("SectionView", "widget", {
            title: Alloy.Globals.scenarios[index].scenario
        }).getView();
        $.scenario.appendSection(scenario);
        if (0 == index) for (var i = 0; 3 > i; i++) {
            var artistRow = Alloy.Globals.createBandRow({
                band: "Test",
                time: "10:00",
                type: "Rock"
            });
            scenario.add(artistRow);
        }
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;