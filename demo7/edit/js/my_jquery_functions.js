$(document).ready(function() {
    $(".choose span").click(function() {
        add(this.className);
    })
});

function add(classname) {
    switch (classname) {
        case "text":
            var newnode = insertbefore();
            newnode.id = "inserttext";
            var textnode = document.createElement("input");
            var divnode = document.createElement("div");
            divnode.className = "textnode";
            divnode.innerHTML = "未命名";
            textnode.type = "text";
            textnode.name = "text";
            $("#inserttext").append(divnode, textnode);
            break;
        case "textarea":
            var newnode = insertbefore();
            newnode.id = "inserttextarea";
            var textareanode = document.createElement("textarea");
            var divnode = document.createElement("div");
            divnode.innerHTML = "未命名";
            divnode.className = "textareanode";
            textareanode.wrap = "physical";
            $("#inserttextarea").append(divnode, textareanode);
            break;
        case "singlechoose":
            var newnode = insertbefore();
            newnode.id = "insertsingle";
            var singlechoose = document.createElement("input");
            var divhead = document.createElement("div");
            var container = document.createElement("div");
            var input_container = document.createElement("div");
            var option = document.createElement("div");
            singlechoose.type = "radio";
            singlechoose.name = "radio";
            option.innerHTML = "选项";
            divhead.innerHTML = "未命名";
            divhead.className = "singlechoosenode";
            input_container.appendChild(singlechoose);
            container.append(input_container, option);
            $("#insertsingle").append(divnode, container);
            break;
        case "morechoose":
            var newnode = insertbefore();
            newnode.id = "insertmore";
            var morechoosenode = document.createElement("input");
            var divhead = document.createElement("div");
            var container = document.createElement("div");
            var input_container = document.createElement("div");
            var option = document.createElement("div");
            option.innerHTML = "选项";
            divhead.className = "morechoosenode";
            divhead.innerHTML = "未命名";
            morechoosenode.type = "checkbox";
            morechoosenode.name = "checkbox";
            input_container.append(morechoosenode);
            container.append(input_container, option);
            newnode.append(divhead, container, container, container);
            break;
        case "bumber":
            var newnode = insertbefore();
            var numbernode = document.createElement("input");
            var divnode = document.createElement("div");
            divnode.className = "numbernode";
            numbernode.type = "number";
            numbernode.name = "number";
            newnode.appendChild(divnode);
            newnode.appendChild(numbernode);
            break;
    }
}

function insertbefore() {
    var newnode = document.createElement("div");
    document.getElementById("form").insertBefore(newnode, document.getElementsByClassName("form-submit")[0]);
    return newnode;
}