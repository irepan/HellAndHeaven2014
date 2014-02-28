var _args = arguments[0] || {};

var handlers={};
handlers.click=function(e){};

Ti.API.info(JSON.stringify(_args));

exports.setImage = function(image){
	$.image.image = image;
};


for (key in _args){
	if (_args.hasOwnProperty(key)){
		switch (key){
			case 'image':$.image.image=_args[key];
				break;
			case 'artist':$.name.text=_args[key];
					$.row.title = _args[key];
				break;
			case 'time':$.time.text=_args[key];
				break;
			case 'type':$.type.text=_args[key];
				break;
			default:$.row[key] = _args[key];
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
