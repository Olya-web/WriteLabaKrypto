const bcrypt = require("bcrypt");
const fs = require("fs");
const readline = require("readline");

const Qlogin = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let userLogin;
let userPassword;
Qlogin.question("Sign up or sign in?(1, 2)", (answer) => {
    switch (answer) {
        case "1":
            Qlogin.question("login: ", (login) => {
                userLogin = login;
                Qlogin.question("password: ", (password) => {
                    userPassword = password;
                    createUser(userLogin, userPassword);
                    Qlogin.close();
                });
            });

            break;
        case "2":
            Qlogin.question("login: ", (login) => {
                userLogin = login;
                Qlogin.question("password: ", (password) => {
                    userPassword = password;
                    loginFunc(userLogin, userPassword);
                    Qlogin.close();
                });
            });
            break;
        default:
            Qlogin.close();
            break;
    }
});
const users = require("./users.json");
const createUser = (login, password) => {
    bcrypt.hash(password, 10, function (err, hash) {
        users.push({ login, hash });
        fs.writeFileSync("./users.json", JSON.stringify(users));
    });
    console.log("user created");
};

const loginFunc = (login, password) => {
    const match = users.find((item) => item.login === login);

    bcrypt.compare(password, match.hash, function (err, result) {
        if (result) console.log("logged in");
        else console.error("incorect creadentials");
    });
};
