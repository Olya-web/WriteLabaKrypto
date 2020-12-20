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
    console.log("task 1");
    console.log("answer is =", x);
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

{
    const p = 179;
    const a = 127;
    const y = 8;
    console.log("task 2");
    const step = (a, p, y) => {
        let otvet = "";
        let m;
        let k;
        while (true) {
            m = getRandomInt(20);
            k = getRandomInt(20);

            if (m * k > p) break;
        }

        for (let i = 1; i <= k; i++) {
            for (let j = 0; j < m; j++) {
                console.log(
                    Number(BigInt(BigInt(a) ** (BigInt(i) * BigInt(m)))) % p,
                    "  ",
                    Number(BigInt(a) ** (BigInt(j) * BigInt(y))) % p
                );
                if (
                    Number(BigInt(a) ** (BigInt(i) * BigInt(m))) % p ===
                    Number(BigInt(a) ** (BigInt(j) * BigInt(y))) % p
                ) {
                    otvet = i * m - j;
                    break;
                }
            }
            if (!!otvet) break;
        }

        console.log("answer is = ", otvet);
    };
    step(a, p, y);
}

{
    console.log("task 3");
    let p = 3569000000;
    console.log("p= ", p);
    console.log("Действий методом полного перебора: ", (p - 3) / 2);

    console.log(
        "Действий шагом младенца-великана: ",
        Math.sqrt(p - 3) * Math.log2((p - 3) ** 2)
    );

    let x = [];
    p = p - 3 / 2;
    while (Math.floor(p) !== 1) {
        x.push(p % 2);
        p = p / 2;
    }

    console.log(
        "Действий умножения алгоритмом быстрого возведения в степень по модулю: ",
        x.length
    );
}

{
    const maxCompareDivider = (number, number2) => {
        const iteratorMax = number > number2 ? number : number2;
        let maxDivider = 1;
        for (let index = 1; index <= iteratorMax; index++) {
            if (number % index === 0 && number2 % index === 0)
                maxDivider = index;
        }
        return maxDivider;
    };
    let p = 89;
    let Ca = 47;
    let Cb = 13;
    let Alpha = 64;
    let Beta = 70;
    let Gamma = 66;
    let Da = 1;
    let Db = 1;

    while ((Ca * Da) % (p - 1) != 1 || maxCompareDivider(Ca, Da) != 1) {
        Da = Da + 1;
    }
    console.log("Da = ", Da);

    while ((Cb * Db) % (p - 1) != 1 || maxCompareDivider(Cb, Db) != 1) {
        Db = Db + 1;
    }

    console.log("Db = ", Db);

    let u = Array(3);

    // Алиса вычисляет числа
    u[0] = Number(BigInt(Alpha) ** BigInt(Ca) % BigInt(p));
    u[1] = Number(BigInt(Beta) ** BigInt(Ca) % BigInt(p));
    u[2] = Number(BigInt(Gamma) ** BigInt(Ca) % BigInt(p));
    console.log("u = ", u);

    // Боб выбирает случайное
    let i = getRandomInt(2);
    if (i == 0) {
        console.log("Алиса - Alpha");
    }
    if (i == 1) {
        console.log("Алиса - Beta");
    }
    if (i == 2) {
        console.log("Алиса - Gamma");
    }

    // оставшиеся 2
    let v = Array(3);
    for (let k = 0; k < 3; k++) {
        v[k] = Number(BigInt(u[k]) ** BigInt(Cb) % BigInt(p));
    }
    v.splice(i, 1);

    console.log("v = ", v);

    // Алиса выбирает случайное
    let j = getRandomInt(0, 1);
    let w = v[j] ** Da % p;
    let z = Number(BigInt(w) ** BigInt(Db) % BigInt(p));
    if (z === Alpha) {
        console.log("Боб - Alpha");
    }
    if (z === Beta) {
        console.log("Боб - Beta");
    }
    if (z === Gamma) {
        console.log("Боб - Gamma");
    }
}

