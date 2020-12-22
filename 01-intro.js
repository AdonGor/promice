// const promise = new Promise((resolve, reject) => {

//     const sucess = Math.random() > 0.5;

    // resolve('zsfgsg');
    // reject('slkgsgj');
//     setTimeout(() => {
//         if(sucess) {
//             resolve('Успех');
//         }
//         reject('Ошибка');
//     },2000);
// });

// console.log('before');

// spinner.classList.add('visible')

// promise
//     .then(result => 
//         {console.log(`%c${result}`, 'color:green');
//     })
//     .catch(error => 
//         {console.log(`%c${error}`, 'color:red');
    // }).finally(() => {
    //     spinner.classList.remove('visible')
    // });

// console.log('after');

// console.log(promise);

//чейнинг 

const promise = new Promise(resolve => {
    resolve(5);
})

promise
.then(x => {
    console.log('x: ', x);
    return x * 2;
    }).then(y => {
        console.log('y: ', y);
        return y + 50;
        }).then(z => {
            console.log('z: ', z); 
            })

//then много, cath всегда один ставиться в самом конце