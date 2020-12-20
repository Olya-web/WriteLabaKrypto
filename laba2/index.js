const decodeToVernam = require("./vernam-decode");
const encodeFromVernam = require("./vernam-encode");

const fs = require("fs");

const word = fs.readFileSync("./word");
console.log("Cigan-log: word", word);

const key = fs.readFileSync("./key");

const decode = decodeToVernam(word, key);
console.log("Cigan-log: decodeToVernam(word, key);", decode);

console.log(
    "Cigan-log: encodeFromVernam(decodeToVernam(word, key), key);",
    encodeFromVernam(decode, key)
);

// xxtea

const xxtea = require("xxtea");
// to encrypt
const encrypted = xxtea.encrypt("LONDON", "test");
console.log("Cigan-log: encrypted", encrypted);

// to decrypt
const decrypted = xxtea.decrypt(encrypted, "test");
console.log("Cigan-log: decrypted", decrypted);
