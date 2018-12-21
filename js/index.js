xdegrees = 0;
ydegrees = 0;
zdegrees = 0;

(function () {
    height = $(document).height();
    boxSize = (height - 400) + 'px';
    boxSize2 = (height - 400) * 1.25 + 'px';
    boxSizeByTwo = (height - 400) / 2 + 'px';
    $('.cube').css('height', boxSize);
    $('.cube').css('width', boxSize);
    $('.face').css('height', boxSize);
    $('.face').css('width', boxSize);
    $('.cube-container').css('perspective', boxSize2);
    setTransform('.face-left', 0, -90, 0, boxSizeByTwo);
    setTransform('.face-right', 0, 90, 0, boxSizeByTwo);
    setTransform('.face-front', 0, 0, 0, boxSizeByTwo);
    setTransform('.face-back', 0, 180, 0, boxSizeByTwo);
    setTransform('.face-up', 90, 0, 0, boxSizeByTwo);
    setTransform('.face-down', -90, 0, 0, boxSizeByTwo);

})();

function setTransform(element, rotationX, rotationY, rotationZ, translateZ) {
    var property = 'rotateX(' + rotationX + 'deg) ';
    property += 'rotateY(' + rotationY + 'deg) ';
    property += 'rotateZ(' + rotationZ + 'deg) ';
    property += 'translateZ(' + translateZ + ') ';
    console.log(element + " : " + property);
    $(element).css('transform', property);
}

function rotate(orientation) {
    switch (orientation) {
        case 'RIGHT':
            ydegrees += 90;
            break;
        case 'LEFT':
            ydegrees -= 90;
            break;
        case 'UP':
            xdegrees += 90;
            break;
        case 'DOWN':
            xdegrees -= 90;
            break;
    }
    setTransform('.cube', xdegrees, ydegrees, zdegrees, 0);
}

function showFace(face) {
    switch (face) {
        case 'left':
            setTransform('.cube', 0, 90, 0, 0);
            break;
        case 'right':
            setTransform('.cube', 0, -90, 0, 0);
            break;
        case 'back':
            setTransform('.cube', 0, 180, 0, 0);
            break;
        case 'up':
            setTransform('.cube', -90, 0, 0, 0);
            break;
        case 'down':
            setTransform('.cube', 90, 0, 0, 0);
            break;
        case 'front':
            setTransform('.cube', 0, 0, 0, 0);
            break;
    }
}