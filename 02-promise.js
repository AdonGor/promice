//работало раньше:

const fetchUser = (userName) => {

const promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() > 0.3;
    
            if(success) {
                const user = { name: userName, age: 26, posts: 74 };
            }
    
                const error = 'Error Error Attention!';
        }, 1000);
    })

    return promise;
};

fetchUser('Sergijj')
    .then(onFetchUserSuccess)
    .cath(onFetchUserError);

function onFetchUserSuccess(user) {
    console.log(`%c${user}`, 'color:green');
}
function onFetchUserError(error) {
    console.log(`%c${error}`, 'color:red');
}

