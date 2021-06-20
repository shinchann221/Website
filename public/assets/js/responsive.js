function myFunction(x) {
  
  if (x.matches) { // If media query matches
    console.log("HERE");
    document.getElementById('nishant').innerHTML = 'Director, C.F.O & Head (R&D)';

    // var farmImgs1 = document.querySelectorAll('.farmImgs1');
    // var farmImgs2 = document.querySelectorAll('.farmImgs2');

    // farmImgs1.forEach(img => {
    //   img.classList.add('hide')
    // })
    // farmImgs2.forEach(img => {
    //   img.classList.remove('hide')
    // })
  } else {
    
  }
}

var x = window.matchMedia("(max-width: 767px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)