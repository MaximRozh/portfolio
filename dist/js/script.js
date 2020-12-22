//scroll
var monone = document.getElementById('monone')
scroll = window.pageYOffset;
document.addEventListener('scroll', function (e) {
    var offset = window.pageYOffset;
    scroll = offset;
    monone.style.width = (100 + scroll/4) + '%';
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
    text.style.top = - scroll/6 + '%';
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

//burger 
$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger, .header-box-items').toggleClass('active');
    });
});
//scroll to top
var btn = $('#buttonTop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 250) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

