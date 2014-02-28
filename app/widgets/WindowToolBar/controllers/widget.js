var _args = arguments[0] || {};

var handlers={};
handlers.leftClick=function(e){};
handlers.rightClick=function(e){};

var containerWindow = null;
var contentView = null;
var _leftButton = null;
var _rightButton = null;
//Ti.API.info(JSON.stringify(_args));


setTitle = function(title){
	var title = title || "";
	$.title.text = title;
};
setContainer = function(container){
	containerWindow = container || null;
};
setContent = function(content){
	contentView = content || null;
};
setLeftButton = function(leftButton){
	_leftButton = leftButton || null;;
};
setRightButton = function(rightButton){
	_rightButton = rightButton || null;
};

for (key in _args){
	if (_args.hasOwnProperty(key)){
		switch (key){
			case 'title':setTitle(_args[key]);
				break;
			case 'leftClick':handlers.leftClick = _args[key];
				break;
			case 'rightClick':handlers.rightClick = _args[key];
				break;
			case 'container':setContainer(_args[key]);
				break;
			case 'content':setContent(_args[key]);
				break;
			case 'leftButton':setLeftButton(_args[key]);
				break;
			case 'rightButton':setRightButton(_args[key]);
				break;
			default:$.toolbarButtons[key] = _args[key];
		}
	}

}
exports.addEventListener = function(listenerName, listenerFunction){
	switch (listenerName){
		case 'leftClick':handlers.leftClick = listenerFunction;
			break;
		case 'rightClick':handlers.rightClick = listenerFunction;
			break;
	}
};


var leftButtonVisible = leftButton!=null?true:false;
var rightButtonVisible = rightButton!=null?true:false;

contentView.top = 30;
if (Alloy.Globals.osname === "iphone" || Alloy.Globals.osname==="ipad"){
	$.iostop.height=20;
	contentView.top += 20;
	$.iostop.visible=true;
} else {
	$.iostop.visible=false;	
}

function leftClick(e){
	handlers.leftClick(e);	
};
function rightClick(e){
	handlers.rightClick(e);
};

exports.getTitle=function(){return $.title.text;};
exports.setTitle = setTitle;
exports.setContainer = setContainer;
exports.setContent = setContent;
exports.setLeftButton = setLeftButton;
exports.setRightButton = setRightButton;

