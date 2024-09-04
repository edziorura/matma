const galleryDiv = document.querySelector('.gallery');
const input = document.querySelector('.photoNumber');
let change
document.querySelector('.photoNumber').addEventListener("keyup",timeOut)
function timeOut(){
    clearTimeout(change)
    change = setTimeout(loadImages,400)
}
function loadImages() {
    console.log(input.value)
    galleryDiv.innerHTML = '';
    galleryDiv.innerHTML+=`<div class="gallery-image${input.value}"><img src="images/${input.value}.jpg" class="img${input.value}" alt="Zdjecie${input.value}")"></div>`
}
function changePage(v){
    val = parseInt(input.value)
    val += Number(v)
    input.value=val
    loadImages()
}
let prevTouch
function handleTouchStart(event) {
    prevTouch = event.touches[0].clientX
    console.log(prevTouch)
}
function handleTouchMove(event) {
    if (event.touches.length === 1) {
        const touch = event.touches[0];
        if (touch.clientX < prevTouch) {
            const input = document.querySelector('.photoNumber');
            document.querySelector(`.img${input.value}`).animate(  [
                // keyframes
                { transform: "translateX(0px)" },
                { transform: "translateX(-100vw)" },
              ],
              {
                // timing options
                duration: 500,
              },)
            input.value = parseInt(input.value, 10) + 1;
            timeOut();

        }
        else{
            const input = document.querySelector('.photoNumber');
            document.querySelector(`.img${input.value}`).animate(  [
                // keyframes
                { transform: "translateX(0px)" },
                { transform: "translateX(100vw)" },
              ],
              {
                // timing options
                duration: 500,
              },)
            input.value = parseInt(input.value, 10) - 1;
            timeOut();
        }
    }
}
document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchmove', handleTouchMove);
window.onload = loadImages;
