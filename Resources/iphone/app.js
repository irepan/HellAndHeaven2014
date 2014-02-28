var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

<<<<<<< HEAD
Alloy.Globals.osname = Ti.Platform.osname, Alloy.Globals.version = Ti.Platform.version, 
Alloy.Globals.height = Ti.Platform.displayCaps.platformHeight, Alloy.Globals.width = Ti.Platform.displayCaps.platformWidth;

Alloy.Globals.isTablet = "ipad" === Alloy.Globals.osname || "android" === Alloy.Globals.osname && (Alloy.Globals.width > 899 || Alloy.Globals.height > 899);

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

=======
>>>>>>> 8e64bf1734c1862528287b79b4d5162b3c1c96a5
Alloy.createController("index");