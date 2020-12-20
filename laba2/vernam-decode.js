let xor = require('buffer-xor');

module.exports = function(enc, key) {
    let msg_buff = Buffer.from(enc);
    let key_buff = Buffer.from(key);
    let dec = xor(msg_buff, key_buff);
    return dec.toString();    
};
