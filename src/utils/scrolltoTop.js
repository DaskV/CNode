import getSize from './getSize'

let startX,
    startY = 0;

export function scrolltoTop() {

    let timer = setInterval(function () {
        let {scrollT} = getSize();
        let speed = Math.floor(-scrollT / 5);
        document.documentElement.scrollTop = document.body.scrollTop = scrollT + speed;
        if (scrollT == 0) {
            clearInterval(timer);
            document.getElementsByClassName('back')[0].style.display = 'none';
        };
    }, 30)

}

export function swipeUp(isopen = false) {

    if (isopen === true) {

        document.addEventListener('touchstart', touchstart, false)
        document.addEventListener('touchend', touchend, false)
    } else {

        document.removeEventListener('touchstart', touchstart, false)
        document.removeEventListener('touchend', touchend, false)
    }

}

function GetSlideDirection(startX, startY, endX, endY) {
    var dy = startY - endY;
    let {scrollT} = getSize();
    //var dx = endX - startX;
    let result = 0;

    if (dy > 15) { //swipe down

        result = 1;
    } else if (dy < 0 && scrollT > 500) { //swipe up
        result = 2;
    }

    return result;
}

const touchstart = (e) => {
    startX = e.touches[0].pageX;
    startY = e.touches[0].pageY;
}

const touchend = (e) => {
    let endX = e.changedTouches[0].pageX;
    let endY = e.changedTouches[0].pageY;
    var direction = GetSlideDirection(startX, startY, endX, endY);
    switch (direction) {
        case 0:
            break;
        case 1:
            //向上
            document.getElementsByClassName('back')[0].style.display = 'none';
            break;
        case 2:
            // 向下
            if (document.body.scrollTop != 0) {
                document.getElementsByClassName('back')[0].style.display = 'block';
            }
            break;
        default:
    }
}