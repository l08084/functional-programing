// forEachメソッドによるsum関数の定義
const sum_a = array => {
    // 結果を格納する変数
    let result = 0;
    // 反復した回数を格納する変数
    let index = 0;
    while (index < array.length) {
        // 変数resultを代入で更新する
        result = result + array[index];
        // 反復回数を更新する
        index = index + 1;
    }
    return result;
};

// reduceメソッドによるsum関数の定義
const sum = array => {
    return array.reduce(
        (accumulator, item) => {
            return accumulator + item; // 足し算を実行する
        }, 0);
}

console.log(sum_a([1, 2, 3]));
console.log(sum([1, 2, 3]));