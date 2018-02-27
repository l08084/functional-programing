const map = transform => {
    return array => {
        return array.reduce((accumulator, item) => {
            return accumulator.concat((transform(item)));
        }, []);
    };
};

const succ = item => {
    return item += 1;
}

console.log(map(succ)([1, 3, 5]));