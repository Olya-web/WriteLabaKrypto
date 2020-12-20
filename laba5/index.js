// v8
// task1

console.log("Задание 1");
const isSimple = (number, started = 1) => {
    let countOfDividers = 0;
    for (started; started <= number; started++) {
        if (number % started === 0) countOfDividers++;
    }
    if (countOfDividers > 2) return 0;
    else return number;
};

let n = 91;
//
for (let index = 0; index <= n; index++) {
    for (let j = 0; j <= n; j++) {
        if (isSimple(j) * isSimple(index) === n)
            console.log("digits equal 91 = ", j, " * ", index, "=", n);
    }
}

// task 2

console.log("Задание 2");

const maxCompareDivider = (number, number2) => {
    const iteratorMax = number > number2 ? number : number2;
    let maxDivider = 1;
    for (let index = 1; index <= iteratorMax; index++) {
        if (number % index === 0 && number2 % index === 0) maxDivider = index;
    }
    return maxDivider;
};

console.log("maxDivider 15 and 9 =", maxCompareDivider(15, 9));

console.log("Задание 3");
// task 3
(() => {
    for (let index = 0; index < 8 * 23; index++) {
        if ((8 * index) % 23 === 1) {
            console.log("inversion =", index);
            return;
        }
    }
})();

// tasks 4

console.log("Задание 4");

const minDivide = {
    a: 4,
    b: 6,
};

for (let index = 1; index < minDivide.a * minDivide.b; index++) {
    if (index % minDivide.a === 0 && index % minDivide.b === 0)
        console.log("nok 4*6 = ", index);
}

console.log("Задание 5");

// task 5
console.log("is simple 31027 ", !!isSimple(31027, 2));
