var slide = 0;
const numSlides = 2;

function toRight() {
    if (slide < numSlides) {
        slide++;
    } else {
        slide = 0;
    }
    console.log(slide)
    displaySlide();
}

function toLeft() {
    if (slide > 0) {
        slide --;
    } else {
        slide = numSlides
    }
    console.log(slide)
    displaySlide();
}

function displaySlide() {
    for (let i = 0; i < numSlides+1; i++) {
        x = document.getElementById("cont"+i)
        if (slide == i) {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
}