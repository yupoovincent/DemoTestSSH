//X = Area and Y = Perimeter

function getCircle(){
    let r = parseFloat(document.getElementById('radius').value);
    let X = Math.PI * r**2;
    let Y = 2 * Math.PI * r;
    document.getElementById('area').innerHTML = X;
    document.getElementById('perimeter').innerHTML = Y;
}

function getTriangle(){
    let a = parseFloat(document.getElementById('sideA').value);
    let b = parseFloat(document.getElementById('base').value);
    let c = parseFloat(document.getElementById('sideC').value);
    let h = parseFloat(document.getElementById('height').value);
    let X = 0.5 * b * h;
    let Y = a + b + c;
    document.getElementById('area').innerHTML = X;
    document.getElementById('perimeter').innerHTML = Y;
}

function getRectangle() {
    let l = parseFloat(document.getElementById('length').value);
    let w = parseFloat(document.getElementById('width').value);
    let X = l * w;
    let Y = 2 * (l + w);
    document.getElementById('area').innerHTML = X;
    document.getElementById('perimeter').innerHTML = Y;
}

function getSquare() {
    let s = parseFloat(document.getElementById('side').value);
    let X = s**2;
    let Y = 4 * s;
    document.getElementById('area').innerHTML = X;
    document.getElementById('perimeter').innerHTML = Y;
}

function getParallelogram() {
    let a = parseFloat(document.getElementById('sideA').value);
    let b = parseFloat(document.getElementById('base').value);
    let h = parseFloat(document.getElementById('height').value);
    let X = b * h;
    let Y = 2 * (a + b);
    document.getElementById('area').innerHTML = X;
    document.getElementById('perimeter').innerHTML = Y;
}

function getTrapezoid() {
    let a = parseFloat(document.getElementById('sideA').value);
    let b1 = parseFloat(document.getElementById('base1').value);
    let b2 = parseFloat(document.getElementById('base2').value);
    let c = parseFloat(document.getElementById('sideC').value);
    let h = parseFloat(document.getElementById('height').value);
    let X = [(b1 + b2) / 2] * h;
    let Y = a + b1 +b2 + c;
    document.getElementById('area').innerHTML = X;
    document.getElementById('perimeter').innerHTML = Y;
}

function getPentagon() {
    let s = parseFloat(document.getElementById('side').value);
    let X = 0.25 * Math.sqrt(5 * [5 + 2 * Math.sqrt(5)]) * s**2;
    let Y = 5 * s;
    document.getElementById('area').innerHTML = X;
    document.getElementById('perimeter').innerHTML = Y;
}

function getHexagon() {
    let s = parseFloat(document.getElementById('side').value);
    let X = ([3 * Math.sqrt(3)] / 2) * s**2;
    let Y = 6 * s;
    document.getElementById('area').innerHTML = X;
    document.getElementById('perimeter').innerHTML = Y;
}

function getOctagon() {
    let s = parseFloat(document.getElementById('side').value);
    let X = 2 * [1 + Math.sqrt(2)] * s**2;
    let Y = 8 * s;
    document.getElementById('area').innerHTML = X;
    document.getElementById('perimeter').innerHTML = Y;
}

function getKite() {
    let a = parseFloat(document.getElementById('sideA').value);
    let b = parseFloat(document.getElementById('sideB').value);
    let h = parseFloat(document.getElementById('height').value);
    let w = parseFloat(document.getElementById('width').value);
    let X = (h * w) / 2
    let Y = 2 * (a + b)
    document.getElementById('area').innerHTML = X;
    document.getElementById('perimeter').innerHTML = Y;
}