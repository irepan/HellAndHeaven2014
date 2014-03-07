var _args = arguments[0] || {};

var handlers={};
handlers.click=function(e){};
var _subtitle = "";
var _detail = "";

$.subtitle.visible = false;
$.detail.visible = false;

Ti.API.info(JSON.stringify(_args));

var setArrangement = function(){
	if (_subtitle === "" && _detail === ""){
		$.subtitle.visible = false;
		$.detail.visible = false;
		$.title.top=null;
	} else if (_subtitle != "" && _detail ===""){
		$.subtitle.visible = true;
		$.detail.visible = false;
		$.title.top = 20;
		$.subtitle.top = 40;
	} else if (_detail != "" && _subtitle === ""){
		$.subtitle.visible = false;
		$.detail.visible = true;
		$.title.top = 20;
		$.detail.top = 40;
	} else {//if ( _detail != "" && _subtitle != ""){
		$.subtitle.visible = true;
		$.detail.visible = true;
		$.title.top = 12;
		$.subtitle.top = 32;
		$.detail.top = 46;
	}
};

var setImage = function(image){
	var _image = image || "";
	$.image.image = _image;
};
var setTitle = function(title){
	var _title = title || "";
	$.title.text = title;
	$.row.searchFilter = title;
	setArrangement();
};
var setSubtitle = function(subtitle){
	_subtitle = subtitle || "";
	$.subtitle.text = _subtitle;
	setArrangement();
};
var setDetail = function(detail){
	_detail = detail || "";
	$.detail.text = _detail;
	setArrangement();
};

for (key in _args){
	if (_args.hasOwnProperty(key)){
		switch (key){
			case 'image':setImage(_args[key]);
				break;
			case 'title':setTitle(_args[key]);
				break;
			case 'subtitle':setSubtitle(_args[key]);
				break;
			case 'detail':setDetail(_args[key]);
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


exports.setImage = setImage;
exports.setTitle = setTitle;
exports.setSubtitle = setSubtitle;
exports.setDetail = setDetail;


