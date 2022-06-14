var counter = 1;
const slide = document.querySelector('.slide');
setInterval(() => {
    slide.classList.toggle('first')
    console.log(slide.classList.contains('first'));
}, 5000);

// function changeSlide() {
//     if(slide.classList.contains('first')) {
//         slide.classList.remove('first');
//     } else {
//         slide.classList.add('first');
//     }
// }