export  function scrolltoTop() {
   let timer = setInterval(function () {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop;

        let speed = Math.floor(-osTop / 5);

        document.documentElement.scrollTop =document.body.scrollTop = osTop + speed;
        if (osTop == 0) {        
            clearInterval(timer);
            document.getElementsByClassName('back')[0].style.display = 'none';
        };
    }, 30)

}

export function swipeUp() {
    let startX,
        startY = 0;
    document.addEventListener('touchstart', function (e) {
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
    }, false)
    document.addEventListener('touchend', function (e) {

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
                document.getElementsByClassName('back')[0].style.display = 'block';
                break;
            default:
        }
    }, false)
}

function GetSlideDirection(startX, startY, endX, endY) {
    var dy = startY - endY;
    //var dx = endX - startX;
    var result = 0;
    if (dy > 15) { //向上滑动
        result = 1;
    } 
    else if(dy<0) { //向下滑动
        result = 2;
    }
    return result;
}