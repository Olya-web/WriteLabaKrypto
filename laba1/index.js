const key = document.querySelector("#key");
const str = document.querySelector("#str");
const btn = document.querySelector("#submit");

const decodeKey = document.querySelector("#decodeKey");
const decodeStr = document.querySelector("#decodeStr");
const decodeBtn = document.querySelector("#decodeSubmit");

btn.addEventListener("click", () => {
    let resultStr = "";
    for (let index = 0; index < str.value.length; index++) {
        resultStr += String.fromCharCode(
            str.value[index].charCodeAt() + +key.value
        );
    }
    alert(resultStr);
});

decodeBtn.addEventListener("click", () => {
    let resultStr = "";
    for (let index = 0; index < decodeStr.value.length; index++) {
        resultStr += String.fromCharCode(
            decodeStr.value[index].charCodeAt() - +decodeKey.value
        );
    }
    alert(resultStr);
});
