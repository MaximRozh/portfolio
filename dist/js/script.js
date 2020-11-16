//scroll
var monone = document.getElementById('monone')
scroll = window.pageYOffset;
document.addEventListener('scroll', function (e) {
    var offset = window.pageYOffset;
    scroll = offset;
    monone.style.width = (100 + scroll/5) + '%';
});

var montwo = document.getElementById('montwo')
scroll = window.pageYOffset;
document.addEventListener('scroll', function (e) {
    var offset = window.pageYOffset;
    scroll = offset;
    montwo.style.width = (100 + scroll/5) + '%';
    montwo.style.left = scroll/50 + '%';
});
var text = document.getElementById('text')
scroll = window.pageYOffset;
document.addEventListener('scroll', function (e) {
    var offset = window.pageYOffset;
    scroll = offset;
    montwo.style.width = (100 + scroll/5) + '%';
    text.style.top = - scroll/20 + '%';
});

//header/////////////////////
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.header').addClass("sticky");
        }else{
            $('.header').removeClass("sticky");
        }
    })
});
//preloader 
document.body.onload = function() {
    setTimeout(function () {
    var preloader = document.getElementById('page-preloader');
    if( !preloader.classList.contains('done') )
    {
        preloader.classList.add('done');
    }
    }, 1000)
}