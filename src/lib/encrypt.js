const bcrypt = require ("bcryptjs")

const SALT_ROUNDS = 10;

function encrypt(txt) {
    return bcrypt.hash(txt, SALT_ROUNDS);
}

function compare(plainTxt, hash) {
    return bcrypt.compare(plainTxt,hash);

}

module.exports = {
    encrypt,
    compare
}


