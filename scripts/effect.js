var myAnimation = new hoverEffect({
    parent: document.querySelector('.hero-container'),
    intensity: 0.3,
    image1: '/assets/backgrounds/ganesh.webp',
    image2: '/assets/backgrounds/diwali3.webp',
    displacementImage: './assets/displacement-images/heightMap.png', 
    hover: true, 
    imagesRatio: 1080/1920
});


setInterval(() => {
    changeImage();
}, 6000);

let isNext = false;
function changeImage() {
    if (isNext) {
        myAnimation.previous();
        myAnimation.displacementImage = "/assets/displacement-images/stripe1.png";
        isNext = false;
    } else {
        myAnimation.next();
        isNext = true;
    }
}