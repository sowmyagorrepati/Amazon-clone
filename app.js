
const sec1Slide = document.querySelector('.sec1 .imagelist');
const imageItems = document.querySelectorAll('.sec1 .imageitems');

let currentSlide = 0;
const totalSlides = imageItems.length;

function updateSlidePosition() {
    const slideWidth = imageItems[0].clientWidth;
    sec1Slide.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function moveL() {
    if (currentSlide === 0) {
        currentSlide = totalSlides - 1;
        sec1Slide.style.transition = 'none'; 
        updateSlidePosition();
        setTimeout(() => {
            sec1Slide.style.transition = ''; 
        }, 0);
    } else {
        currentSlide--;
        updateSlidePosition();
    }
}

function moveR() {
    if (currentSlide === totalSlides - 1) {
        currentSlide = 0;
        sec1Slide.style.transition = 'none'; 
        updateSlidePosition();
        setTimeout(() => {
            sec1Slide.style.transition = ''; 
        }, 0);
    } else {
        currentSlide++;
        updateSlidePosition();
    }
}

document.querySelector('.sec1 .btnl').addEventListener('click', moveL);
document.querySelector('.sec1 .btnr').addEventListener('click', moveR);


const sec2Slide = document.querySelector('.sec2 .product-slide');
const sec3Slide = document.querySelector('.sec3 .product-slide2');
const sec5Slide = document.querySelector('.sec5 .product-slide3');

function moveLeft(slide) {
    slide.scrollLeft -= 500; 
}

function moveRight(slide) {
    slide.scrollLeft += 500; 
}


document.querySelector('.sec2 .left').addEventListener('click', function() {
    moveLeft(sec2Slide);
});

document.querySelector('.sec2 .right').addEventListener('click', function() {
    moveRight(sec2Slide);
});

document.querySelector('.sec3 .left').addEventListener('click', function() {
    moveLeft(sec3Slide);
});

document.querySelector('.sec3 .right').addEventListener('click', function() {
    moveRight(sec3Slide);
});

document.querySelector('.sec5 .left').addEventListener('click', function() {
    moveLeft(sec5Slide);
});

document.querySelector('.sec5 .right').addEventListener('click', function() {
    moveRight(sec5Slide);
});

