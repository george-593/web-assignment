FULLSUS_IMAGES = [
    "/assets/bikes/fullsus-01.jpg",
    "/assets/bikes/fullsus-02.jpg",
    "/assets/bikes/fullsus-03.jpg",
    "/assets/bikes/fullsus-04.jpg"
]

const arrowNextFS = document.querySelector("#arrow-next")
const arrowPrevFS = document.querySelector("#arrow-prev")
const slideFS = document.querySelector("#slideshow-img")

var slideIndex = 0

const changeSlide = (type) => {
    imgSrc = ""
    switch (type) {
        case "FULLSUS":
            if (slideIndex >= FULLSUS_IMAGES.length) {
                imgSrc = FULLSUS_IMAGES[0]
                slideIndex = 0
            } else if (slideIndex <= 0) {
                slideIndex = FULLSUS_IMAGES.length - 1
                imgSrc = FULLSUS_IMAGES[slideIndex]
            } else (
                imgSrc = FULLSUS_IMAGES[slideIndex]
            )
            slideFS.src = imgSrc
    }


    console.log(imgSrc)
    console.log(slideIndex)
}

arrowNextFS.addEventListener("click", () => {
    slideIndex -= 1
    changeSlide("FULLSUS")
})

arrowPrevFS.addEventListener("click", () => {
    slideIndex += 1
    changeSlide("FULLSUS")
})