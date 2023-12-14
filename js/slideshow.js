FULLSUS_IMAGES = [
    "/assets/bikes/fullsus-01.jpg",
    "/assets/bikes/fullsus-02.jpg",
    "/assets/bikes/fullsus-03.jpg",
    "/assets/bikes/fullsus-04.jpg"
]

GRAVEL_IMAGES = [
    "/assets/bikes/gravel-01.jpg",
    "/assets/bikes/gravel-02.jpg",
    "/assets/bikes/gravel-03.jpg",
    "/assets/bikes/gravel-04.jpg",
    "/assets/bikes/gravel-05.jpg",
    "/assets/bikes/gravel-06.jpg"
]

HARDTAIL_IMAGES = [
    "/assets/bikes/hardtail-01.jpg",
    "/assets/bikes/hardtail-02.jpg",
    "/assets/bikes/hardtail-03.jpg",
    "/assets/bikes/hardtail-04.jpg",
    "/assets/bikes/hardtail-05.jpg",
    "/assets/bikes/hardtail-06.jpg"
]

const arrowNextFS = document.querySelector("#arrow-next-fs")
const arrowPrevFS = document.querySelector("#arrow-prev-fs")
const slideFS = document.querySelector("#slideshow-img-fs")
const counterFS = document.querySelector("#counter-fs")
const dotContainerFS = document.querySelector("#dot-container-fs")

var slideIndexFS = 0
var lastSlideIndexFS = 0

const arrowNextGR = document.querySelector("#arrow-next-gr")
const arrowPrevGR = document.querySelector("#arrow-prev-gr")
const slideGR = document.querySelector("#slideshow-img-gr")
const counterGR = document.querySelector("#counter-gr")
const dotContainerGR = document.querySelector("#dot-container-gr")

var slideIndexGR = 0
var lastSlideIndexGR = 0

const arrowNextHT = document.querySelector("#arrow-next-ht")
const arrowPrevHT = document.querySelector("#arrow-prev-ht")
const slideHT = document.querySelector("#slideshow-img-ht")
const counterHT = document.querySelector("#counter-ht")
const dotContainerHT = document.querySelector("#dot-container-ht")

var slideIndexHT = 0
var lastSlideIndexHT = 0

const changeSlide = (type) => {
    imgSrc = ""
    switch (type) {
        case "FULLSUS":
            if (slideIndexFS >= FULLSUS_IMAGES.length) {
                imgSrc = FULLSUS_IMAGES[0]
                slideIndexFS = 0
            } else if (slideIndexFS <= 0) {
                slideIndexFS = FULLSUS_IMAGES.length - 1
                imgSrc = FULLSUS_IMAGES[slideIndexFS]
            } else (
                imgSrc = FULLSUS_IMAGES[slideIndexFS]
            )
            slideFS.src = imgSrc

            counterFS.textContent = `${slideIndexFS + 1} / ${FULLSUS_IMAGES.length}`

            dotContainerFS.children[slideIndexFS].classList.add("bg-black")
            dotContainerFS.children[slideIndexFS].classList.remove("bg-grey")
            dotContainerFS.children[lastSlideIndexFS].classList.remove("bg-black")
            dotContainerFS.children[lastSlideIndexFS].classList.add("bg-grey")
            lastSlideIndexFS = slideIndexFS
        case "GRAVEL":
            if (slideIndexGR >= GRAVEL_IMAGES.length) {
                imgSrc = GRAVEL_IMAGES[0]
                slideIndexGR = 0
            } else if (slideIndexGR <= 0) {
                slideIndexGR = GRAVEL_IMAGES.length - 1
                imgSrc = GRAVEL_IMAGES[slideIndexGR]
            } else (
                imgSrc = GRAVEL_IMAGES[slideIndexGR]
            )
            slideGR.src = imgSrc

            counterGR.textContent = `${slideIndexGR + 1} / ${GRAVEL_IMAGES.length}`

            dotContainerGR.children[slideIndexGR].classList.add("bg-black")
            dotContainerGR.children[slideIndexGR].classList.remove("bg-grey")
            dotContainerGR.children[lastSlideIndexGR].classList.remove("bg-black")
            dotContainerGR.children[lastSlideIndexGR].classList.add("bg-grey")
            lastSlideIndexGR = slideIndexGR
        case "HARDTAIL":
            if (slideIndexHT >= HARDTAIL_IMAGES.length) {
                imgSrc = HARDTAIL_IMAGES[0]
                slideIndexHT = 0
            } else if (slideIndexHT <= 0) {
                slideIndexHT = HARDTAIL_IMAGES.length - 1
                imgSrc = HARDTAIL_IMAGES[slideIndexHT]
            } else (
                imgSrc = HARDTAIL_IMAGES[slideIndexHT]
            )
            slideHT.src = imgSrc

            counterHT.textContent = `${slideIndexHT + 1} / ${HARDTAIL_IMAGES.length}`

            dotContainerHT.children[slideIndexHT].classList.add("bg-black")
            dotContainerHT.children[slideIndexHT].classList.remove("bg-grey")
            dotContainerHT.children[lastSlideIndexHT].classList.remove("bg-black")
            dotContainerHT.children[lastSlideIndexHT].classList.add("bg-grey")
            lastSlideIndexHT = slideIndexHT
    }
}

arrowNextFS.addEventListener("click", () => {
    slideIndexFS -= 1
    changeSlide("FULLSUS")
})

arrowPrevFS.addEventListener("click", () => {
    slideIndexFS += 1
    changeSlide("FULLSUS")
})

arrowNextGR.addEventListener("click", () => {
    slideIndexGR -= 1
    changeSlide("GRAVEL")
})

arrowPrevGR.addEventListener("click", () => {
    slideIndexGR += 1
    changeSlide("GRAVEL")
})


arrowNextHT.addEventListener("click", () => {
    slideIndexHT -= 1
    changeSlide("HARDTAIL")
})

arrowPrevHT.addEventListener("click", () => {
    slideIndexHT += 1
    changeSlide("HARDTAIL")
})