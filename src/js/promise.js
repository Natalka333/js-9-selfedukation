const promise = new Promise((resolve, reject) => {
    setTimeout(() => {

        let canFullFil = Math.random() > 0.5;
        if (canFullFil) {
            resolve('RESOLVE');
        }
        reject('REJECT');
    }, 2000);
});

promise
    .then(
        result => {
            console.log(result);
            // throw new Error('ERRORRR')
            return 5
        })
    .then(x => {
        console.log(x);

    })
    .then(y => {
        console.log(y);
    })
    .catch(error => console.log(error))
    .finally(() => {
        console.log(`%c ВСЕ БУДЕТ ХОРОШО. В ЛЮБОМ СЛУЧАЕ`,
            'color: red; font-size: 16px;')
    })

// const makePromise = () => {
//   return new Promise((resolve, reject) => {
//     resolve('hello');
//   })
// };

// makePromise().then(result => console.log(result));