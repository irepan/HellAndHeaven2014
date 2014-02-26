var args = arguments[0] || {};

for (var index in Alloy.Globals.scenarios){
	var scenario = Alloy.createController('sectionView', {titulo:Alloy.Globals.scenarios[index].scenario}).getView();
	$.scenario.appendSection(scenario);
};
