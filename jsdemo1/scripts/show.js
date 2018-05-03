addLoadEvent(creatinsertimage);


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

function prepare() {
    var array = document.getElementById("photo");
    var links = array.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            return showpic(this);
        }
    }
}

function showpic(para) {
    var photoshow = document.getElementById("photoshow");
    photoshow.setAttribute("src", para.getAttribute("href"));
    return false;
}


function creatinsertimage() {
    var img = document.createElement("img");
    img.setAttribute("src", "images/one.jpg");
    img.setAttribute("title", "one");
    img.setAttribute("alt", "one");
    img.setAttribute("id", "photoshow");
    var targetnode = document.getElementById("photo");
    targetnode.parentNode.insertBefore(img, targetnode);
    prepare();
    wenzi();

}

function wenzi() {
    var wenzi = document.getElementById("wenzi");
    wenzi.style.color = "black";
    wenzi.style.fontFamily = "Helvetica";
}


/*function background() {
    var table = document.getElementsByTagName("table");
    var row = table.getElementsByTagName("tr");
    var jishu = true;
    for (var i = 0; i < row.length; i++) {
        if (jishu == true) {
            row[i].style.backgroundColor("red");
            jishu = false;
        } else {
            jishu = true;
        }
    }
}*/