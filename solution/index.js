module.exports = function (Homework) {
    const reduce  = async (array, fn, initialValue, cb) => {
        const len = await new Promise(array.length);
        for (
            let i = 0;
            await new Promise((resolve) => Homework.less(i, len, resolve));
            i = await new Promise((resolve) => Homework.add(i, 1, resolve))
        ) {
            const curValue = await new Promise((resolve) => array.get(i, resolve));
            initialValue = await new Promise((resolve) => fn(initialValue, curValue, i, array, resolve));
        }
        cb(initialValue);
    }
    return (array, fn, initialValue, cb) => {
        return reduce(array, fn, initialValue, cb);
    }
}