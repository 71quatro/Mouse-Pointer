const dot = document.querySelector('.dot');

var dotArray = [];

function addDots(){
    for(let i = 0; i < 5; i++){
        dotArray.push(dot)
    }
}
function moveDot(){
    onmousemove = (e) => {
        dot.style.left = e.x+'px';
        dot.style.top = e.y + 'px';
    }
}
moveDot()
