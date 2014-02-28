var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.osname = Ti.Platform.osname, Alloy.Globals.version = Ti.Platform.version, 
Alloy.Globals.height = Ti.Platform.displayCaps.platformHeight, Alloy.Globals.width = Ti.Platform.displayCaps.platformWidth;

Alloy.Globals.isTablet = "ipad" === Alloy.Globals.osname || "android" === Alloy.Globals.osname && (Alloy.Globals.width > 899 || Alloy.Globals.height > 899);

Alloy.Globals.createBandRow = function(band) {
    var _band = band || {
        image: "",
        band: "Band",
        time: "10:00",
        type: "Rock"
    };
    var self = Alloy.createWidget("FormattedViewRow", "widget", {
        image: _band.image,
        title: _band.band,
        subtitle: _band.time,
        detail: _band.type,
        band: _band
    }).getView();
    return self;
};

Alloy.Globals.createDayRow = function(day) {
    var _day = day || {
        dayId: 0,
        image: "",
        day: "Mar 15 2014",
        concerts: "10"
    };
    var self = Alloy.createWidget("FormattedViewRow", "widget", {
        image: _day.image,
        title: _day.day,
        subtitle: _day.concerts + " " + L("concerts"),
        day: _day
    }).getView();
    return self;
};

Alloy.Globals.scenarios = [ {
    scenario: "Scenario 1"
}, {
    scenario: "Scenario 2"
} ];

Alloy.Globals.artistas = [ {
    scenario: "Scenario 1",
    nombre: "Anthrax",
    tipo: "Metal",
    horario: "Horario",
    imagen: ""
} ];

Alloy.createController("index");