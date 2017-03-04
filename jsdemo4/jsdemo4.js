function onmouse() {

    var movejpg = document.getElementById("movejpg");
    var li = movejpg.getElementsByTagName("li");
    li[0].onmouseover = function() {
        moveElement("preview", 0, 0, 10);
    }
    li[1].onmouseover = function() {
        moveElement("preview", -500, 0, 10);
    }
    li[2].onmouseover = function() {
        moveElement("preview", -1000, 0, 10);
    }
    li[3].onmouseover = function() {
        moveElement("preview", -1500, 0, 10);
    }
}

function moveElement(ElementId, final_x, final_y, interval) {
    var element = document.getElementById(ElementId);
    element.style.position = "absolute";
    if (!element.style.top) {
        element.style.top = "0px";

    }
    if (!element.style.left) {
        element.style.left = "0px";
    }
    if (element.movement) {
        clearTimeout(element.movement);
    }
    var x = parseInt(element.style.left);
    var y = parseInt(element.style.top);
    var differencex = Math.ceil((Math.abs(x - final_x)) / 10);
    var differencey = Math.ceil((Math.abs(y - final_y)) / 10);
    if (x == final_x && y == final_y) {
        return true;
    }
    if (x < final_x) {
        x += differencex;
    }
    if (x > final_x) {
        x -= differencex;
    }
    if (y < final_y) {
        y += differencey;
    }
    if (y > final_y) {
        y -= differencey;
    }
    element.style.left = x + "px";
    element.style.top = y + "px";
    var action = "moveElement('" + ElementId + "'," +
        final_x + "," +
        final_y + "," +
        interval + ")";
    element.movement = setTimeout(action, interval);
}