function moveElement(ElementId, final_x, final_y, interval) {
    var element = document.getElementById(ElementId);

    var x = parseInt(element.style.left);
    var y = parseInt(element.style.top);
    if (x == final_x && y == final_y) {
        return true;
    }
    if (x < final_x) {
        x++;
    }
    if (x > final_x) {
        x--;
    }
    if (y < final_y) {
        y++;
    }
    if (y > final_y) {
        y--;
    }
    element.style.left = x + "px";
    element.style.top = y + "px";
    movement = setTimeout("moveElement('" + ElementId + "'," +
        final_x + "," +
        final_y + "," +
        interval + ")");
}

function setposition() {
    var element = document.getElementById("message");
    element.style.position = "absolute";
    if (!element.style.top) {
        element.style.top = "5px";

    }
    if (!element.style.left) {
        element.style.left = "50px";
    }
    moveElement("message", 300, 400, 100);
}