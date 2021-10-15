module.exports = function (Homework) {
    const {less,add} = Homework;
    const reduce  = async (array, fn, initialValue, cb) => {
        const asyncArray = new Homework.AsyncArray(array);
        const len = await new Promise(asyncArray.length);
        for (
            let i = 0;
            await new Promise((resolve) => less(i, len, resolve));
            i = await new Promise((resolve) => add(i, 1, resolve))
        ) {
            const curValue = await new Promise((resolve) => asyncArray.get(i, resolve));
            initialValue = await new Promise((resolve) => fn(initialValue, curValue, i, asyncArray, resolve));
        }
        cb(initialValue);
    }
    return (array, fn, initialValue, cb) => {
        return reduce(array, fn, initialValue, cb);
    }
}