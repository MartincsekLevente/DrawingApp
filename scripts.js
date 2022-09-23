let canvas;
let ctx;
const horizontal_canvas_size_corrector = 20;
const vertical_canvas_size_corrector = 310;
const x_corrector = 298;
const y_corrector = 10;

let brushSlider;
let brushSliderValue = 5;
let brushSliderValueDisplay;
let brushColor = "black";
let currentColor;

let inCanvas = false;
let isPainting = false;

let colorButton1;
let colorButton2;
let colorButton3;
let colorButton4;
let colorButton5;
let colorButton6;
let colorButton7;
let colorButton8;
let colorButton9;


window.addEventListener("load", () => {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    brushSlider = document.getElementById("slider");
    brushSliderValueDisplay = document.getElementById("sizeValue");
    colorButton1 = document.getElementById("color1");
    colorButton2 = document.getElementById("color2");
    colorButton3 = document.getElementById("color3");
    colorButton4 = document.getElementById("color4");
    colorButton5 = document.getElementById("color5");
    colorButton6 = document.getElementById("color6");
    colorButton7 = document.getElementById("color7");
    colorButton8 = document.getElementById("color8");
    colorButton9 = document.getElementById("color9");
    currentColor = document.getElementById("currentColorButton");

    canvasSizeSetter();
    drawingListeners();
    brushSettings();

});


window.addEventListener("resize", () => {
    canvasSizeSetter();
});

function brushSettings(){
    brushSlider.oninput = function changingSlider() {
        brushSliderValue = this.value;
        brushSliderValueDisplay.innerText = this.value;
    }

    colorButton1.onclick = function asd(){
        brushColor = "black";
        currentColor.style.backgroundColor="black";
    }
    colorButton2.onclick = function asd(){
        brushColor = "red";
        currentColor.style.backgroundColor="red";
    }
    colorButton3.onclick = function asd(){
        brushColor = "green";
        currentColor.style.backgroundColor="green";
    }
    colorButton4.onclick = function asd(){
        brushColor = "blue";
        currentColor.style.backgroundColor="blue";
    }
    colorButton5.onclick = function asd(){
        brushColor = "orange";
        currentColor.style.backgroundColor="orange";
    }
    colorButton6.onclick = function asd(){
        brushColor = "yellow";
        currentColor.style.backgroundColor="yellow";
    }
    colorButton7.onclick = function asd(){
        brushColor = "pink";
        currentColor.style.backgroundColor="pink";
    }
    colorButton8.onclick = function asd(){
        brushColor = "purple";
        currentColor.style.backgroundColor="purple";
    }
    colorButton9.onclick = function asd(){
        brushColor = "white";
        currentColor.style.backgroundColor="white";
    }


}

function canvasSizeSetter() {
    canvas.height = window.innerHeight - horizontal_canvas_size_corrector;
    canvas.width = window.innerWidth - vertical_canvas_size_corrector;
}

function drawingListeners() {
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", endPosition);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseleave",mouseLeave);
    canvas.addEventListener("mouseenter",mouseEnter);
}

function mouseEnter() {
    inCanvas = true;

}

function mouseLeave() {
    inCanvas = false;
    isPainting = false;
}
function startPosition(e) {
    isPainting = true;
    ctx.beginPath();
    draw(e);
}

function endPosition() {
    isPainting = false;

}

function draw(e) {
    if (isPainting) {
        ctx.strokeStyle = brushColor;
        ctx.lineWidth = brushSliderValue;
        ctx.lineCap = "round";
        ctx.lineTo(e.clientX-x_corrector, e.clientY-y_corrector);
        ctx.stroke();

        //for line smoothing
        ctx.beginPath();
        ctx.moveTo(e.clientX-x_corrector, e.clientY-y_corrector);
    } else {
        ctx.moveTo(e.clientX-x_corrector, e.clientY-y_corrector);
    }

}



