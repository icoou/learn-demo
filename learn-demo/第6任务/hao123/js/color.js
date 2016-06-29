var head = document.getElementById('head');
var firstTd = document.getElementById('firstTd');
var right = document.getElementById('right');

function changTheme(c) {
    if (c == "powder") {
        head.style.borderTop = "2px solid #FF8686"
        firstTd.style.background = "#FF8686";
        firstTd.style.color = "#fff";
        right.style.border = "1px solid #FF8686";
        right.className = "powderColor";
        setStorage('powder');
    } else if (c == "green") {
        head.style.borderTop = "2px solid #1DA671"
        firstTd.style.background = "#1DA671";
        firstTd.style.color = "#fff";
        right.style.border = "1px solid #1DA671";
        right.className = "greenColor";
        setStorage('green');
    } else if (c == "yellow") {
        head.style.borderTop = "2px solid #FFEA29"
        firstTd.style.background = "#FFEA29";
        firstTd.style.color = "#000";
        right.style.border = "1px solid #FFEA29";
        right.className = "yellowColor";
        setStorage('yellow');
    }
}

function setStorage(c) {
    // 设置 localStorage
    localStorage.theme = c;
}

function getStorage(c) {
    // 如果没有值就传入默认的绿色主题
    return localStorage.theme ? localStorage.theme : "green";
}

function checkCookie() {
    // 判断localStorage
    if (getStorage()) {
        changTheme(getStorage());
    }
}
