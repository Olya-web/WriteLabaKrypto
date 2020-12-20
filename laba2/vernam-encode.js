let xor = require("buffer-xor");
module.exports = function (secret, key) {
    let enc_buff = Buffer.from(secret);
    let key_buff = Buffer.from(key);
    let result = xor(enc_buff, key_buff);
    return [result.toString(), key_buff.toString()];
};
