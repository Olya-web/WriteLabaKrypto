// // v8
// // task1

// const isSimple = (number, started = 1) => {
//     let countOfDividers = 0;
//     for (started; started <= number; started++) {
//         if (number % started === 0) countOfDividers++;
//     }
//     if (countOfDividers > 2) return 0;
//     else return number;
// };

// let n = 91;
// //
// for (let index = 0; index <= n; index++) {
//     for (let j = 0; j <= n; j++) {
//         if (isSimple(j) * isSimple(index) === n)
//             console.log("digits equal = ", j, " * ", index, "=", n);
//     }
// }

// // task 2

// const maxCompareDivider = (number, number2) => {
//     const iteratorMax = number > number2 ? number : number2;
//     let maxDivider = 1;
//     for (let index = 1; index <= iteratorMax; index++) {
//         if (number % index === 0 && number2 % index === 0) maxDivider = index;
//     }
//     return maxDivider;
// };

// console.log("maxDivider =", maxCompareDivider(15, 9));

// // task 3
// (() => {
//     for (let index = 0; index < 8 * 23; index++) {
//         if ((8 * index) % 23 === 1) {
//             console.log("inversion =", index);
//             return;
//         }
//     }
// })();

// // tasks 4

// const minDivide = {
//     a: 4,
//     b: 6,
// };

// for (let index = 1; index < minDivide.a * minDivide.b; index++) {
//     if (index % minDivide.a === 0 && index % minDivide.b === 0)
//         console.log("nok = ", index);
// }

// // task 5
// console.log("is simple 31027 ", !!isSimple(31027, 2));

{
    const y = 7;
    const a = 17;
    const p = 23;

    let x = 0;

    while (true) {
        if (a ** x % p === y) {
            break;
        }
        x++;
    }

    console.log(x);
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

const step = (a, p, y) => {
    let otvet = "";
    let m;
    let k;
    while (true) {
        m = getRandomInt(14);
        k = getRandomInt(14);

        if (m * k > p) break;
    }

    for (let i = 1; i <= k; i++) {
        for (let j = 0; j < m; j++) {
            console.log(a ** (i * m) % p, "  ", (a ** j * y) % p);
            if (a ** (i * m) % p === (a ** j * y) % p) {
                otvet = i * m - j;
                break;
            }
        }
        if (!!otvet) break;
    }

    return otvet;
};

console.log("Cigan-log: step(2, 61, 45);", step(2, 61, 45));
