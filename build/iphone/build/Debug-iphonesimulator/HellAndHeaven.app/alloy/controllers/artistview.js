function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "artistview";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.artistView = Ti.UI.createTableViewRow({
        backgroundColor: "transparent",
        backgroundDisabledColor: "transparent",
        id: "artistView"
    });
    $.__views.artistView && $.addTopLevelView($.__views.artistView);
    $.__views.imagen = Ti.UI.createImageView({
        id: "imagen"
    });
    $.__views.artistView.add($.__views.imagen);
    $.__views.artista = Ti.UI.createLabel({
        id: "artista"
    });
    $.__views.artistView.add($.__views.artista);
    $.__views.horario = Ti.UI.createLabel({
        id: "horario"
    });
    $.__views.artistView.add($.__views.horario);
    $.__views.tipo = Ti.UI.createLaberl({
        id: "tipo"
    });
    $.__views.artistView.add($.__views.tipo);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.imagen.image = args.imagen;
    $.artista.text = args.nombre;
    $.horario.text = args.horario;
    $.tipo.text = args.tipo;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;