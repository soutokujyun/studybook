// const add = (x, y) => x + y
// const square = (x) => x * x

// const compose = (...[first, ...other]) => (...args) => {
//     let ret = first(...args)
//     other.forEach(fn => {
//         ret = fn(ret)
//     })
//     return ret
// }

// const fn = compose(add, square, square)

// console.log(fn(1, 2))

function compose(middlrewares) {
    return function() {
        return dispatch(0)
        function dispatch(i) {
            let fn = middlrewares[i]
            if (!fn) {
                return Promise.resolve()
            }

            return Promise.resolve(
                fn(function next() {
                    return dispatch(i + 1)
                })
            )
        }
    }
}

async function fn1(next) {
    console.log('fn1')
    await next()
    console.log('end fn1')
}

async function fn2(next) {
    console.log('fn2')
    await next()
    console.log('end fn2')
}

async function fn3(next) {
    console.log('fn3')
}

const finalFn = compose([fn1, fn2, fn3])
finalFn()