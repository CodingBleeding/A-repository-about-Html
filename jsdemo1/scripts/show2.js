addLoadEvent(highlight);

function addLoadEvent(func) {
    var oldonLoad = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

function highlight() {
    var tr = document.getElementsByTagName("tr");
    for (var i = 0; i < tr.length; i++) {
        tr[i].onmouseover = function() {

            this.style.fontWeight = "bold";
        }
        tr[i].onmouseout = function() {
            this.style.fontWeight = "normal";
        }
    }
}