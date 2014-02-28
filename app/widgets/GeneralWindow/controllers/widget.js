var args = arguments[0] || {};

var title = args.title || "";
var content = args.content || null;
var leftButton = args.leftButton || null;
var leftClick = args.leftClick || function(e){};
var rightButton = args.rightButton || null;
var rightClick = args.rightClick || function(e){};

var toolbar = Alloy.createWidget('WindowToolBar','widget',{
	title:title,
	container:$.window,
	content:$.content,
	leftButton:leftButton,
	leftClick:leftClick,
	rightButton:rightButton,
	rightClick:rightClick
}).getView();

$.toolbar.add(toolbar);

var setContent = function(content){
	if (content!=null){
		$.content.add(content);
		content.open = function(e){$.window.open();};
		content.close = function(e){$.window.close();};
	}
};
var setTitle = function(title){
	toolbar.setTitle(title);
};
setContent(content);

exports.setContent=setContent;
exports.setTitle=setTitle;
