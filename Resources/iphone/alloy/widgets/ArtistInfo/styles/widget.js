function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "ArtistInfo/" + s : s.substring(0, index) + "/ArtistInfo/" + s.substring(index + 1);
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
    priority: 1000.0002,
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
    isClass: true,
    priority: 10000.0003,
    key: "artistInfoView",
    style: {
        backgroundColor: "transparent",
        height: 80
    }
}, {
    isClass: true,
    priority: 10000.0004,
    key: "artistInfoLabelView",
    style: {
        left: 105
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
    isId: true,
    priority: 100000.0005,
    key: "image",
    style: {
        top: 5,
        left: 5,
        bottom: 5,
        height: 70,
        width: 100,
        backgroundColor: "white"
    }
}, {
    isId: true,
    priority: 100000.0006,
    key: "name",
    style: {
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "white",
        top: 12
    }
}, {
    isId: true,
    priority: 100000.0007,
    key: "time",
    style: {
        top: 32
    }
}, {
    isId: true,
    priority: 100000.0008,
    key: "type",
    style: {
        top: 46
    }
} ];