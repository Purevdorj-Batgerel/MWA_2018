Array.prototype.even = function () {
    process.nextTick(() => {
        console.log(
            this.filter((num) => (num + 1) % 2)
        );
    });
}

Array.prototype.odd = function () {
    process.nextTick(() => {
        console.log(
            this.filter((num) => num % 2)
        );
    });
}

console.log('start');
[1, 2, 3, 4, 5, 6, 7, 8].even();
[1, 2, 3, 4, 5, 6, 7, 8].odd();
console.log('end');