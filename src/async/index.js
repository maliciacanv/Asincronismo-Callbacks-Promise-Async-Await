const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve('do something')): reject(new Error('test error'))
    })
}

const doSomething = async() => {
    const something = await doSomethingAsync()
    console.log(something);
}

console.log('before');
doSomething();
console.log('after')

const anotherFunction = async() => {
    try {
        const something = await doSomethingAsync()
        console.log(something)
    } catch (error) {
        console.error(error)
    }
}

console.log('uno');
anotherFunction();
console.log('dos')