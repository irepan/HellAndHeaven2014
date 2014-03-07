var args = arguments[0] || {};

var launchWindow = Alloy.createWidget('GeneralWindow','widget',{
	title:L('scenarios'),
	content:$.scenario,
	leftClick:function(e){$.scenario.close();}
}).getView();


for (var index in Alloy.Globals.scenarios){
	var scenario = Alloy.createWidget("SectionView","widget",{
		title:Alloy.Globals.scenarios[index].scenario
	}).getView();
	$.scenario.appendSection(scenario);
	if (index==0){
		for (var i=0;i<3;i++){
			var artistRow = Alloy.Globals.createBandRow({
				band:"Test",
				time:"10:00",
				type:"Rock"
			});
			scenario.add(artistRow);
		}
	}
};
