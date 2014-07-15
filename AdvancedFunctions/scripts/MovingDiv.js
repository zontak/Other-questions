function module() {

    //properties
    var DIV_WIDTH = 50;
    var DIV_HEIGHT = 50;
    var DIV_BORDER_WIDTH = 1;

    // rect possition
    var MIN_TOP_RECTANGLE_POSSITION = 50;
    var MAX_TOP_RECTANGLE_POSSITION = 200;
    var MIN_LEFT_RECTANGLE_POSSITION = 50;
    var MAX_LEFT_RECTANGLE_POSSITION = 200;

    //circle possition
    var LEFT_MOVEMENT = 500;
    var TOP_MOVEMENT = 200;

    var LEFT_START_POSSTION = 650;
    var TOP_START_POSSITION = 200;
    //Move interval
    var MOVE_INTERVAL = 10;

    function CreateDiv() {
        var div = document.createElement("div");
        div.style.width = DIV_WIDTH + "px";
        div.style.height = DIV_HEIGHT+"px";
        div.style.color = generateRandomColor();
        div.style.border = DIV_BORDER_WIDTH + " solid " + generateRandomColor();
        div.style.backgroundColor = generateRandomColor();
        div.style.position = "absolute";
        div.innerText = div.tagName;
        div.style.textAlign = "center";

        //Generating random integer in range [min; max]
        function getRandomInt(min, max) {
            var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            return randomNumber;
        }

        function generateRandomColor() {
            var color="rgb(" + getRandomInt(1, 255) +
                         "," + getRandomInt(1, 255) +
                         "," + getRandomInt(1, 255) +
                         ")";
            return color;
        }

        return div;
    }

    function addRect() {
        var div = CreateDiv();
        document.body.appendChild(div);
        moveRect(div);
    }

    function addCircle() {
        var div = CreateDiv();

        document.body.appendChild(div);
        moveInCircle(div);
    }

    function moveRect(element) {
        var top = MIN_TOP_RECTANGLE_POSSITION;
        var left = MIN_LEFT_RECTANGLE_POSSITION;

        setInterval(function () {
            if (top <= MAX_TOP_RECTANGLE_POSSITION && left == MIN_LEFT_RECTANGLE_POSSITION) {
                top++;
            }
            else if (left <= MAX_LEFT_RECTANGLE_POSSITION && top >= MAX_TOP_RECTANGLE_POSSITION) {
                left++;
            }
            else if (left >= MAX_LEFT_RECTANGLE_POSSITION && top >= MIN_TOP_RECTANGLE_POSSITION) {
                top--;
            }

            else if (top <= MIN_TOP_RECTANGLE_POSSITION && left >= MIN_LEFT_RECTANGLE_POSSITION) {
                left--;
            }
            element.style.top = top + "px";
            element.style.left = left + "px";
        }, MOVE_INTERVAL);
    }

    function moveInCircle(element) {
        element.setAttribute("angleAttr", "0");
        element.style.left = LEFT_START_POSSTION + "px";
        element.style.top = TOP_START_POSSITION + "px";

        setInterval(function () {
            var angleInRadians = (element.getAttribute("angleAttr")) * (Math.PI / 180);
            var left = 150 * Math.cos(angleInRadians) + LEFT_MOVEMENT;
            var top = 150 * Math.sin(angleInRadians) + TOP_MOVEMENT;
            console.log(angleInRadians);
            element.style.left = left + "px";
            element.style.top = top + "px";
            element.attributes.angleAttr.nodeValue++;
        }, MOVE_INTERVAL);
    }

    function add(string) {
        if (string == "rectangle") {
            addRect();
        }
        if (string == "circle") {
            addCircle();
        }
    }

    return {
        add: add
    }
}