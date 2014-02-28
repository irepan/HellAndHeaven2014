function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "WindowToolBar/" + s : s.substring(0, index) + "/WindowToolBar/" + s.substring(index + 1);
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
    priority: 10000.0007,
    key: "toolbarButton",
    style: {
        height: 20,
        width: 20,
        top: 5,
        backgroundColor: "white"
    }
}, {
    isClass: true,
    priority: 10000.001,
    key: "toolbarText",
    style: {
        font: {
            fontSize: 12,
            fontWeight: "bold"
        }
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "iostop",
    style: {
        backgroundColor: "gray",
        top: 0,
        left: 0,
        right: 0,
        height: 20
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "toolbarButtons",
    style: {
        backgroundColor: "brown",
        height: 30,
        top: 20,
        left: 0,
        right: 0
    }
}, {
    isId: true,
    priority: 100000.0006,
    key: "toolbar",
    style: {
        backgroundColor: "transparent"
    }
}, {
    isId: true,
    priority: 100000.0008,
    key: "leftButton",
    style: {
        left: 5
    }
}, {
    isId: true,
    priority: 100000.0009,
    key: "rightButton",
    style: {
        right: 5
    }
} ];