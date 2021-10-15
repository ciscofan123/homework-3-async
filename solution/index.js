// solution/index.js
module.exports = function (Homework) {

    async function reduce(asyncArray, fn, initialValue, cb) {

        const len = await new Promise(asyncArray.length);
        const isEnd = await new Promise(resolve => {
            Homework.equal(len, 0, resolve);
        });
        if (isEnd) {
            cb(initialValue);
            return;
        }
        const element = await new Promise(asyncArray.pop);
        const sum = await new Promise(resolve => {
            fn(initialValue, element, 0, asyncArray, resolve);
        });
        reduce(asyncArray, fn, sum, cb);
    }

    return (array, fn, initialValue, cb) => {
        return reduce(array, fn, initialValue, cb);
    }
}