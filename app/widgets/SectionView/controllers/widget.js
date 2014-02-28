var _args = arguments[0] || {};

var handlers={};
handlers.click=function(e){};

//Ti.API.info(JSON.stringify(_args));

for (key in _args){
	if (_args.hasOwnProperty(key)){
		switch (key){
			case 'title':$.title.text = _args[key];
				break;
			default:$.sectionView[key] = _args[key];
		}
	}

}
exports.addEventListener = function(listenerName, listenerFunction){
	switch (listenerName){
		case 'click':handlers.click = listenerFunction;
			break;
		default: Ti.API.info('algo');
	}
};

exports.getTitle = function(){
	return $.title.text;
};
exports.setTitle = function(title){
	$.title.text = title;
};
exports.add = function(row){
	$.widget.add(row);
};
