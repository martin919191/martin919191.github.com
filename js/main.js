window.onscroll = function (event) {
    var headerHeight = $('header')[0].clientHeight;
    if(window.scrollY > headerHeight-50){
        var hiddenHeaderHeight = $('#hidden-header')[0].clientHeight + 15;
        var h = hiddenHeaderHeight + "px";
        //console.log(window.scrollY + ':' + $('#main-content')[0].clientHeight);
        //$('#main-content')[0].style.marginTop = h;
        $('#hidden-header')[0].style.top = "0px";
    }else{
        //$('#main-content')[0].style.marginTop = "0px";
        $('#hidden-header')[0].style.top = "-75px";
    }
    //background-position-y: -10px
    $('#studies')[0].style.backgroundPositionY = Math.round(window.scrollY / 10) + 'px';
    //console.log(Math.round(window.scrollY / 10));
};


//var studiesHeight = $('#studies').clientHeight + 100;
//var studiesBackgroundSize = studiesHeight + "px, " + studiesHeight + "px";
//$('#studies')[0].style.backgroundSize = studiesBackgroundSize;