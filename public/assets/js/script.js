// const ID = document.getElementById('id').value;
// const name = document.getElementById('name');
// const btn = document.getElementById('btn');
// const datas = document.querySelectorAll('.data')

const textEl = document.getElementById('text');
const text = 'खेती का नया तरीका';

let idx = 1

let speed = 180;

setTimeout(() => {
   writeText()
}, 500);

function writeText() {
   textEl.innerText = text.slice(0, idx)
   idx++

   if(idx > text.length) {
      idx = text.length;
   }
   setTimeout(() => {
    writeText()
 }, speed);
}



// btn.addEventListener('click', () => {
//     // const getCertificate = firebase.functions().httpsCallable('getCertificate');
//     // getCertificate({ id: ID }).then(result => {
//     //     console.log(result.data);
//     // })
//     datas.forEach(data => {
//         data.classList.remove('hide');
//     })
// })
