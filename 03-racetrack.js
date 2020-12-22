const horses = [
    'Eclipse',
    'Yoda',
    'Ashoka',
    'Fox',
    'Seastar',
];

const getRandomTime = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const run = horse => {
    return new Promise( resolve => {
        const time = getRandomTime(2000, 3500);

        setTimeout(() => {
            resolve({horse, time})
        }, time);
    });
};

console.log('%c Заезд начался', 'color: orange');
const promises = horses.map(horse => run(horse));
console.log(promises);


Promise.race(promises).then(winner => {
    console.log(`%c win: ${horse}, finish at ${time}`,'color:green');
})

Promise.all(promises)
    .then(results => {
    console.log('заезд окончен');
    console.table(results);
})
.catch(console.log);
// run(horses[0]).then(result => {
//     console.log(result);
// });

