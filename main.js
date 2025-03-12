// const arr = new Map([[1,2], [2,3]]);
// // arr.forEach(console.log)
//
// const a = {
//     b: 1,
//     c: 2,
//     __proto__ : {
//         forEach(cb) {
//             for(const key in this) {
//                 if(!Object.hasOwn(this, key)) {
//                     continue;
//                 }
//                 cb(this[key], key, this);
//             }
//         }
//     }
// }
//
// a.forEach(console.log);

const a = {
    b: 1,
    c: 2,
    [Symbol.iterator]() { // Iterable
        let cursor = 0;
        const values = Object.values(this);
        return {
            [Symbol.iterator]() {
              return this;
            }, // IterableIterator
            next() {
                const res = {
                    value: values[cursor],
                    done: cursor >= values.length,
                }

                cursor++;

                return res;
            }
        }
    }

}

// for(const el of a) {
//     console.log(el)
// }

// const iter = arr[Symbol.iterator]();
// const iter2 = arr[Symbol.iterator]();
//
// const aIter = a[Symbol.iterator]();
//
// console.log(...aIter);

const arr = [3,1,5,6,2,4,7];

function take (iterableObj, count) {
    const iterator = iterableObj[Symbol.iterator]();

    return {
        [Symbol.iterator]() {
            return this;
        },

        next() {
            count -= 1;

            return {
                value: count < 0 ? undefined : iterator.next().value,
                done: count < 0
            }
        }
    }
}

function* take1(iterableObj, count) {
    const iterator = iterableObj[Symbol.iterator]();

    while(count--) {
        yield iterator.next().value;
    }
}

function filter(iterableObj, cb) {
    const iterator = iterableObj[Symbol.iterator]();

    return {
        [Symbol.iterator]() {
            return this;
        },

        next() {
            let res = iterator.next();

            while(!cb(res.value) && !res.done) {
                res = iterator.next();
            }

            return res;
        }
    }
}



// function* bla() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
//
// const i = bla();
//
// console.log(i.next())
// console.log(i.next())
// console.log(i.next())
// console.log(i.next())
// console.log(i.next())

// const mainBtn = document.querySelector('#mainBtn');
//
// let total = 0;
// const bigArr = [1];
//
// function click() {
//     // bigArr.forEach((el) => {
//     //     total++;
//     // });
//     // bigArr.forEach((el) => {
//     //     total++;
//     // });
//     // bigArr.forEach((el) => {
//     //     total++;
//     // });
//     // bigArr.forEach((el) => {
//     //     total++;
//     // });
//
//     forEach(bigArr, () => {
//         total++;
//     }).then(() => {
//         console.log('done', total);
//     })
// }
//
// function forEach(iterable, cb) {
//     return new Promise((resolve, reject) => {
//         let time = Date.now();
//
//         const MAX = 50;
//         const DELAY = 50;
//
//         // Синхронный код
//         // Микротаски
//         // Макротаски - браузерное API
//
//         function* iter(){
//             let i = 0;
//
//             for(const el of iterable) {
//                 try{
//                     cb(el, i++, iterable);
//                 } catch (err) {
//                     reject(err);
//                     return;
//                 }
//                 if(Date.now() - time > MAX) {
//                     setTimeout(() => {
//                         time = Date.now();
//                         worker.next();
//                     }, DELAY);
//                     yield;
//                 }
//             }
//             resolve();
//         }
//
//         const worker = iter();
//         worker.next();
//     })
// }

// mainBtn.addEventListener('click', click);
// const a2 = [1,2,3];
// a2[Symbol.asyncIterator];
//
// console.log(...'🗿👽🙊')
// console.log('🗿👽🙊'.split(''))\

// Синхронный код
//         // Микротаски .then .catch .finally
//         // Макротаски - браузерное API

console.log(1);

const a3 = new Promise((res, rej) => {
    console.log(2);
    res(4);
})



setTimeout(() => {
    console.log(3);
}, 10);

a3.then(console.log);





