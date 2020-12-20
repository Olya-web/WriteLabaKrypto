//rsa
const maxCompareDivider = (number, number2) => {
    const iteratorMax = number > number2 ? number : number2;
    let maxDivider = 1;
    for (let index = 1; index <= iteratorMax; index++) {
        if (number % index === 0 && number2 % index === 0) maxDivider = index;
    }
    return maxDivider;
};

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

const findD = (res) => {
    let randomInt = getRandomInt(res);
    while (maxCompareDivider(res, randomInt) !== 1) {
        randomInt = getRandomInt(res);
    }
    return randomInt;
};

const findE = (d, res) => {
    for (let index = 0; index <= res; index++) {
        if ((index * d) % res === 1) return index;
    }
};

const mainPart = (p, q) => {
    let n = p * q;
    const res = (p - 1) * (q - 1);
    const d = findD(res);
    const e = findE(d, res);

    return { e, n, d };
};

export const encode = (message, publicKey, opened) => {
    const { e, n, d } = mainPart(publicKey, opened);
    const newStr = [];
    for (let symbol of message) {
        newStr.push(
            Number(BigInt(symbol.charCodeAt() - 96) ** BigInt(e) % BigInt(n))
        );
    }
    return { encoded: newStr, privateKey: d, opened: n };
};

export const decode = (encodedArr, privateKey, opened) => {
    const r = encodedArr.map((item) => {
        return String.fromCharCode(
            Number(BigInt(item) ** BigInt(privateKey) % BigInt(opened)) + 96
        );
    });

    return r.join("");
};
const { encoded, privateKey, opened } = encode("test", 223, 277);
console.log("Cigan-log: opened", opened);
console.log("Cigan-log: privateKey", privateKey);
console.log("Cigan-log: encoded", encoded);

console.log(
    "Cigan-log: decode(encoded, privateKey, opened)",
    decode(encoded, privateKey, opened)
);
