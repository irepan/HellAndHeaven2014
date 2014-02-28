var args = arguments[0] || {};

/*var launchWindow = Alloy.createController('generalWindow',{
	title:L('scenarios'),
	content:$.scenario,
	leftClick:function(e){$.scenario.close();}
}).getView();*/
var launchWindow = Alloy.createWidget('GeneralWindow','widget',{
	title:L('scenarios'),
	content:$.scenario,
	leftClick:function(e){$.scenario.close();}
}).getView();

//launchWindow.setContent($.scenario);

for (var index in Alloy.Globals.scenarios){
	var scenario = Alloy.createWidget("SectionView","widget",{
		title:Alloy.Globals.scenarios[index].scenario
	}).getView();
	$.scenario.appendSection(scenario);
	if (index==0){
		for (var i=0;i<3;i++){
			var artistRow = Alloy.createWidget('ArtistInfo',"widget",{
				artist:"Test",
				time:"10:00",
				type:"Rock"
			}).getView();
			scenario.add(artistRow);
		}
	}
};
/*$.scenario.open = function(e){
	launchWindow.open();
};
*/