const ID = document.getElementById('id').value;
const name = document.getElementById('name');
const btn = document.getElementById('btn');
const datas = document.querySelectorAll('.data')

btn.addEventListener('click', () => {
    // const getCertificate = firebase.functions().httpsCallable('getCertificate');
    // getCertificate({ id: ID }).then(result => {
    //     console.log(result.data);
    // })
    datas.forEach(data => {
        data.classList.remove('hide');
    })
})
