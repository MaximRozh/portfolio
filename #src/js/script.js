
const monone = document.querySelector('.parallax-mountain-one');
const montwo = document.querySelector('.parallax-mountain-two');
const text = document.querySelector('.parallax-text')

function scrollMountain() {
    let scroll = window.pageYOffset;
    if(scroll > 500) return
    
    monone.style.right = (40 + scroll / 10) + '%';
    montwo.style.left = (40 + scroll / 8) + '%';
    text.style.top = - scroll / 5 + '%';
}

document.addEventListener('scroll', scrollMountain);

//header/////////////////////
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    if(this.scrollY > 200) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
})
//preloader 
document.body.onload = function () {
    setTimeout(function () {
        let preloader = document.getElementById('page-preloader');

        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 1000)
}

//burger 
const burger = document.querySelector('.burger');
const headerBox = document.querySelector('.header-box-items');

burger.addEventListener("click", function () {
    burger.classList.toggle('active');
    headerBox.classList.toggle('active');

})
headerBox.addEventListener('click', function (event) {
    let target = event.target;
    
    if(target.tagName == "A") {
        headerBox.classList.remove('active');
        burger.classList.remove('active');
    }
})

//scroll to top
const btn = document.querySelector('#buttonTop');
    document.addEventListener('scroll', function () {
        if(document.documentElement.scrollTop > 250) {
            btn.classList.add('show')
        } else {
            btn.classList.remove('show')
        }
    })
    btn.addEventListener('click', function () {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth"})
    })
    //doest work on Safari

//progress bar

const cardContainer = document.querySelector('.container');
const circles = document.querySelectorAll('.progressbar');
removeDash()

function setProgress(circle, persent, circumference) {
    const offset = circumference - persent / 100 * circumference;
    circle.style.strokeDashoffset = offset
}
function getCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    return circumference
}

function setDash() {
    circles.forEach(circ => {
        const number = parseInt(circ.parentElement.nextElementSibling.firstElementChild.innerText);
        const radius = circ.r.baseVal.value;

        setProgress(circ, number, getCircumference(radius))

    })
}
function removeDash() {
        circles.forEach(item => {
            const radius = item.r.baseVal.value;
            item.style.strokeDasharray = `${getCircumference(radius)} ${getCircumference(radius)}`;
            item.style.strokeDashoffset = `${getCircumference(radius)}`;
        })
}
cardContainer.addEventListener('mouseover', setDash)
cardContainer.addEventListener('mouseout', removeDash)
