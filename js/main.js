window.onscroll = function (event) {
    var headerHeight = $('header')[0].clientHeight;
    if(window.scrollY > headerHeight){
        console.log(window.scrollY);
        $('#main-content')[0].style.marginTop = "110px";
        $('#hidden-header')[0].style.top = "0px";
    }else{
        $('#main-content')[0].style.marginTop = "0px";
        $('#hidden-header')[0].style.top = "-75px";
    }
};