let segments = ['1', '2', '3', '4','5','6', '7', '8', '9']
var rotate = 0
var time = -10

for(let i = 0; i < segments.length; i++){
    var segment = document.createElement("div");

    segment.innerHTML = segments[i];
    segment.classList.add('segment');
    segment.style.transform = 'rotate('+360/segments.length*i+'deg)';
    document.getElementById('circle').appendChild(segment);
}

function slowDown(){
    time = time + 2
    setTimeout(slowDown, 500)
}

function rotating(){
    rotate++
    if(rotate == '360'){
        rotate = 0;
    }
    document.getElementById('circle').style.transform = 'rotate('+rotate+'deg)';
console.log(time)
    if(time <= 32){
        setTimeout(rotating, time)
    }
}

function start(){
    time = -10
    rotating()
    slowDown()
}

