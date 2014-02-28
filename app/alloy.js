// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};


Alloy.Globals.osname = Ti.Platform.osname,
Alloy.Globals.version = Ti.Platform.version,
Alloy.Globals.height = Ti.Platform.displayCaps.platformHeight,
Alloy.Globals.width = Ti.Platform.displayCaps.platformWidth;
	
	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
Alloy.Globals.isTablet = Alloy.Globals.osname === 'ipad' || (Alloy.Globals.osname === 'android' && (Alloy.Globals.width > 899 || Alloy.Globals.height > 899));

Alloy.Globals.createBandRow = function(band){
	var _band = band||{image:"",band:"",time:"",type:""};
	var self = Alloy.createWidget('FormattedViewRow',"widget",{
		image:_band.image,
		title:_band.band,
		subtitle:_band.time,
		detail:_band.type,
		band:_band
	}).getView();
	return self;
};
Alloy.Globals.createDayRow = function(day){
	var _day = day||{dayId:0,image:"",day:"Mar 15 2014",concerts:"10"};
	var self = Alloy.createWidget('FormattedViewRow',"widget",{
		image:_day.image,
		title:_day.day,
		subtitle:_day.concerts+" "+L("concerts"),
		day:_day
	}).getView();
	return self;
};


Alloy.Globals.scenarios = [
	{scenario:"Scenario 1"},
	{scenario:"Scenario 2"}
];
Alloy.Globals.artistas = [
	{scenario:"Scenario 1",
	 nombre:"Anthrax",
	 tipo:"Metal",
	 horario:"Horario",
	 imagen:""
	}
];
