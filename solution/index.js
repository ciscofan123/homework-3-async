// solution/index.js
module.exports = function (Homework) {

    async function reduce(asyncArray, fn, initialValue, cb) {

        const len = await new Promise(asyncArray.length);
        if (len === 0) {
            cb(initialValue);
            return;
        }
        const element = await new Promise(asyncArray.pop);
        const sum = await new Promise(resolve => {
            fn(initialValue, element, resolve);
        });

        reduce(asyncArray, fn, sum, cb);

    }

    return (array, fn, initialValue, cb) => {
        return reduce(array, Homework.add, initialValue, cb);
    }
}