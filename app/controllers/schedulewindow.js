var args = arguments[0] || {};

var launchWindow = Alloy.createWidget('GeneralWindow','widget',{
	title:L('dates'),
	content:$.dates,
	leftClick:function(e){$.dates.close();}
}).getView();


for (var index in Alloy.Globals.days){
	var dayRow = Alloy.Globals.createDayRow(
		Alloy.Globals.days[index]
	);
	$.dates.appendRow(dayRow);
};
