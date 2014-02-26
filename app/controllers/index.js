function doClick(e) {
    alert($.label.text);
}
var scenario = Alloy.createController('scenariowindow').getView();
scenario.open();
//$.index.open();
