xdegrees = 0;
ydegrees = 0;

(function(){
    height = $(document).height();
    boxSize = (height - 300) + 'px';
    boxSizeByTwo = (height - 150) / 2 + 'px';
    $('.cube').css('height', boxSize);
    $('.cube').css('width', boxSize); 
    $('.face').css('height', boxSize);
    $('.face').css('width', boxSize);
    setTransform('.face-left',0,-90,boxSizeByTwo);
    setTransform('.face-right',0,90,boxSizeByTwo);
    setTransform('.face-front',0,0,boxSizeByTwo);
    setTransform('.face-back',0,180,boxSizeByTwo);
})();

function setTransform(element, rotationX, rotationY, translateZ){
    var property = 'rotationX(' + rotationX + 'deg) ';
    property += 'rotationY(' + rotationY + 'deg) ';
    property += 'translateZ(' + translateZ + ') ';
    console.log(property);
    $(element).css('transform', property);
}