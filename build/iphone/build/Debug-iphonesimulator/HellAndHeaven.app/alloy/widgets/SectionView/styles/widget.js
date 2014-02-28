function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "SectionView/" + s : s.substring(0, index) + "/SectionView/" + s.substring(index + 1);
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
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE
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
} ];