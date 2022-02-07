const arrowLeft = document.querySelector('.arrows__left')
const arrowRight = document.querySelector('.arrows__right')
const mainPicture = document.querySelector('.slideshow-picture__main')
const slideShowTitle = document.querySelector('.slideshow-description__title')
const slideShowDescp = document.querySelector('.slideshow-description__text')
const hamburgerIcon = document.querySelector('.menu-item')
const navBar = document.querySelector('.navbar')
const closeNav = document.querySelector('.close-btn')
let windowSize = window.matchMedia("(max-width: 1285px)")
let numberOfPicture = 0

const images = [{
    mobile : "/images/mobile-image-hero-1.jpg",
    desktop : "/images/desktop-image-hero-1.jpg",
    textTitle: "Discover innovative ways to decorate",
    textParagraph :"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
},{
    mobile : "/images/mobile-image-hero-2.jpg",
    desktop : "/images/desktop-image-hero-2.jpg",
    textTitle:"  We are available all across the globe",
    textParagraph :"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
},{
    mobile : "/images/mobile-image-hero-3.jpg",
    desktop : "/images/desktop-image-hero-3.jpg",
    textTitle:"Manufactured with the best materials",
    textParagraph :"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
}]


const showPrev = () => {

    if(numberOfPicture != 0) {
        numberOfPicture --
        if(window.innerWidth < 1285) {
            mainPicture.src =  `${images[numberOfPicture].mobile}`
        }else {
            mainPicture.src =  `${images[numberOfPicture].desktop}`
        }
        
        slideShowTitle.innerHTML = `${images[numberOfPicture].textTitle}`
        slideShowDescp.innerHTML = `${images[numberOfPicture].textParagraph}`
    }
}
const showNext = () => {

    if(numberOfPicture < images.length -1) {
        numberOfPicture ++
        if(window.innerWidth < 1285) {
            mainPicture.src = `${images[numberOfPicture].mobile}`
        }else {
            mainPicture.src = `${images[numberOfPicture].desktop}`

        }
        slideShowTitle.innerHTML = `${images[numberOfPicture].textTitle}`
        slideShowDescp.innerHTML = `${images[numberOfPicture].textParagraph}`
    }
}

const showMenu = () => {
    navBar.style.display = 'flex'
}

const closeMenu = () => {
    navBar.style.display = 'none'
}

const resizer = (x) => {
    if( window.innerWidth < 1285) {
        mainPicture.src = `${images[0].mobile}`
        return true
    }else {
        mainPicture.src = `${images[0].desktop}`
        return false
    }
}

const choosePicture = () => {
    if( window.innerWidth < 1285) {
        mainPicture.src = `${images[0].mobile}`
    }else {
        mainPicture.src = `${images[0].desktop}`
    }
}

arrowLeft.addEventListener('click',showPrev)
arrowRight.addEventListener('click',showNext)
hamburgerIcon.addEventListener('click',showMenu)
closeNav.addEventListener('click',closeMenu)
window.addEventListener('resize',resizer)
window.addEventListener('load',choosePicture)