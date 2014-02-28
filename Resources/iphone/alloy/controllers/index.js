function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
<<<<<<< HEAD
        backgroundImage: "img/background.jpg",
=======
        backgroundColor: "white",
        backgroundImage: "img/background.jpg",
        width: "100%",
        layout: "horizontal",
>>>>>>> 8e64bf1734c1862528287b79b4d5162b3c1c96a5
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.day = Ti.UI.createView({
<<<<<<< HEAD
=======
        width: "33%",
        backgroundColor: "white",
        top: "10",
>>>>>>> 8e64bf1734c1862528287b79b4d5162b3c1c96a5
        id: "day"
    });
    $.__views.index.add($.__views.day);
    $.__views.artist = Ti.UI.createView({
<<<<<<< HEAD
=======
        width: "33%",
        backgroundColor: "red",
        top: "10",
>>>>>>> 8e64bf1734c1862528287b79b4d5162b3c1c96a5
        id: "artist"
    });
    $.__views.index.add($.__views.artist);
    $.__views.schedule = Ti.UI.createView({
<<<<<<< HEAD
=======
        width: "33%",
        backgroundColor: "black",
        top: "10",
>>>>>>> 8e64bf1734c1862528287b79b4d5162b3c1c96a5
        id: "schedule"
    });
    $.__views.index.add($.__views.schedule);
    exports.destroy = function() {};
    _.extend($, $.__views);
<<<<<<< HEAD
    var scenario = Alloy.createController("scenariowindow").getView();
    scenario.open();
=======
    $.index.open();
>>>>>>> 8e64bf1734c1862528287b79b4d5162b3c1c96a5
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;