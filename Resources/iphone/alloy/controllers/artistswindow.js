function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "artistswindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.artistswindow = Ti.UI.createTableViewRow({
        id: "artistswindow"
    });
    $.__views.artistswindow && $.addTopLevelView($.__views.artistswindow);
    $.__views.imagen = Ti.UI.createImageView({
        id: "imagen"
    });
    $.__views.artistswindow.add($.__views.imagen);
    $.__views.artista = Ti.UI.createLabel({
        id: "artista"
    });
    $.__views.artistswindow.add($.__views.artista);
    $.__views.horario = Ti.UI.createLabel({
        id: "horario"
    });
    $.__views.artistswindow.add($.__views.horario);
    $.__views.tipo = Ti.UI.createLaberl({
        id: "tipo"
    });
    $.__views.artistswindow.add($.__views.tipo);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;