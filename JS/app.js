
let d = document,
btn = d.querySelector('.botton'),
mensaje =  d.querySelector('.mensaje'),
title = d.querySelector('.title');

    btn.addEventListener('click', e =>{
        fetch('https://api.adviceslip.com/advice')
        .then(res =>res.json())
        .then(data => {
            mensaje.innerHTML = '"'+data.slip.advice+'"'
            title.innerHTML = data.slip.id
        });
    })






    





