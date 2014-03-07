function doClick(e) {
    alert($.label.text);
}
var scenario = Alloy.createController('schedulewindow').getView();
scenario.open();
//$.index.open();
