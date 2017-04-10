$(document).ready(function() {
    $(".choose span").click(function() {
        add(this.className);
    })
});

function add(classname) {
    switch (classname) {
        case "text":
            var newnode = insertBefore();
            var textnode = document.createElement("input");
            var divnode = document.createElement("div");
            divnode.className = "textnode";
            textnode.type = "text";
            textnode.name = "text";
            newnode.appendChild(divnode);
            newnode.appendChild(textnode);
            break;
        case "textarea":
            var newnode = insertBefore();
            var textareanode = document.createElement("input");
            var divnode = document.createElement("div");
            divnode.className = "textareanode";
            textareanode.type = "textarea";
            textareanode.name = "textarea";
            newnode.appendChild(divnode);
            newnode.appendChild(textareanode);
            break;
        case "singlechoose":
            var newnode = insertBefore();
            var singlechoosenode = document.createElement("input");
            var divnode = document.createElement("div");
            divnode.className = "singlechoosenode";
            textareanode.type = "radio";
            singlechoosenode.name = "radio";
            newnode.appendChild(divnode);
            newnode.appendChild(singlechoosenode);

            break;
        case "morechoose":
            var newnode = insertBefore();
            var morechoosenode = document.createElement("input");
            var divnode = document.createElement("div");
            divnode.className = "morechoosenode";
            textareanode.type = "checkbox";
            morechoosenode.name = "checkbox";
            newnode.appendChild(divnode);
            newnode.appendChild(morechoosenode);

            break;
        case "bumber":
            var newnode = insertBefore();
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
    newnode.className = "insertnode";
    newnode.insertBefore(newnode, document.getElementById("input-submit"));
    return newnode;
}