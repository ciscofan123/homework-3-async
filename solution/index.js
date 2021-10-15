// solution/index.js
module.exports = function (Homework) {
    return async (array, fn, initialValue, cb) => {
        const len = await new Promise(array.length);
        for (
            let i = await new Promise((resolve) => Homework.add(0, 0, resolve));
            await new Promise((resolve) => Homework.less(i, len, resolve));
            i = await new Promise((resolve) => Homework.add(i, 1, resolve))
        ) {
            const curValue = await new Promise((resolve) => array.get(i, resolve));
            initialValue = await new Promise((resolve) => fn(initialValue, curValue, i, array, resolve));
        }
        cb(initialValue);
    }
}