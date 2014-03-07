function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "FormattedViewRow/" + s : s.substring(0, index) + "/FormattedViewRow/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0001,
    key: "Window",
    style: {
        backgroundImage: "img/background.jpg"
    }
}, {
    isApi: true,
    priority: 1000.0002,
    key: "SearchBar",
    style: {
        opacity: .2,
        backgroundColor: "transparent",
        backgroundSelectedColor: "transparent"
    }
}, {
    isApi: true,
    priority: 1000.0003,
    key: "TableView",
    style: {
        backgroundColor: "transparent",
        backgroundDisabledColor: "transparent"
    }
}, {
    isApi: true,
    priority: 1000.0004,
    key: "TableViewRow",
    style: {
        backgroundColor: "transparent",
        backgroundDisabledColor: "transparent"
    }
}, {
    isApi: true,
    priority: 1000.0011,
    key: "Label",
    style: {
        color: "brown",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 12
        },
        left: 10
    }
}, {
    isClass: true,
    priority: 10000.0005,
    key: "section",
    style: {
        backgroundColor: "brown"
    }
}, {
    isClass: true,
    priority: 10000.0006,
    key: "content",
    style: {
        left: 0,
        right: 0
    }
}, {
    isClass: true,
    priority: 10000.0012,
    key: "formattedViewRow",
    style: {
        backgroundColor: "transparent",
        height: 80
    }
}, {
    isClass: true,
    priority: 10000.0013,
    key: "formattedLabelView",
    style: {
        left: 105
    }
}, {
    isId: true,
    priority: 100000.0014,
    key: "image",
    style: {
        top: 5,
        left: 5,
        bottom: 5,
        height: 70,
        width: 100,
        color: "transparent"
    }
}, {
    isId: true,
    priority: 100000.0015,
    key: "title",
    style: {
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "white"
    }
}, {
    isId: true,
    priority: 100000.0016,
    key: "subtitle",
    style: {}
}, {
    isId: true,
    priority: 100000.0017,
    key: "detail",
    style: {}
} ];