import { decode, encode } from "../laba3/index.js";
import readline from "readline";
// {
//     const y = 7;
//     const a = 17;
//     const p = 23;

//     let x = 0;

//     while (true) {
//         if (a ** x % p === y) {
//             break;
//         }
//         x++;
//     }

//     console.log(x);
// }

// const getRandomInt = (max) => {
//     return Math.floor(Math.random() * Math.floor(max));
// };

// {
//     const p = 179;
//     const a = 127;
//     const y = 8;
//     const m = getRandomInt(14);
//     const k = getRandomInt(14);
//     console.log("Cigan-log: k", k);
//     const bigSteps = [];
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//     }

const sign = () => {
    for (const signing of sertificates) {
        for (const signcenter of sertificates) {
            if (signing.sertificatesCenter === signcenter.name) {
                const encodeRes = encode(
                    signing.secret,
                    signcenter.publicKey,
                    signcenter.opened
                );
                signing.signature = encodeRes.encoded;
                signcenter.privateKey = encodeRes.privateKey;
                signcenter.opened = encodeRes.opened;
                console.log("Cigan-log: sign -> signcenter", signcenter);
                console.log(signing);
            }
        }
    }
};

const isSigned = (name) => {
    const checking = sertificates.find((item) => item.name === name);
    const sertificatesCenter = sertificates.find(
        (item) => item.name === checking.sertificatesCenter
    );
    if (checking && sertificatesCenter) {
        const decodeResult = decode(
            checking.signature,
            sertificatesCenter.privateKey,
            sertificatesCenter.opened
        );
        console.log("Cigan-log: isSigned -> decodeResult", decodeResult);
        if (decodeResult === checking.secret) return true;
    }
};

const sertificates = [
    {
        name: "MIT",
        sertificatesCenter: "GLobal",
        secret: "mitsecrets",
        publicKey: 223,
        privateKey: 227,
        opened: 13,
        signature: [],
    },
    {
        name: "Google",
        sertificatesCenter: "MIT",
        secret: "googlesecrets",
        publicKey: 227,
        privateKey: 13,
        opened: 5,
        signature: [],
    },
    {
        name: "SomeIO",
        sertificatesCenter: "Google",
        secret: "someiosecret",
        publicKey: 5,
        privateKey: 13,
        opened: 5,
        signature: [],
    },
];

sign();

const Qlogin = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const alwaysSigned = ["MIT"];

console.log("Cigan-log: sertificates", sertificates);

Qlogin.question("What company to check? ", (answer) => {
    if (alwaysSigned.includes(answer)) {
        console.log("Its signed");
        return;

        Qlogin.close();
    }

    if (isSigned(answer)) {
        console.log("Its signed");
    } else {
        console.log("its not signed");
    }

    Qlogin.close();
});
