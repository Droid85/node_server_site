const chatInfo = [
    {
    name: "Leonardo",
    msg: "Hello",
    data: "12.03.2020 12:30",
    color: "#111322",
    },
    {
    name: "Raphael",
    msg: "Hi",
    data: "12.03.2020 12:34",
    color: "#222322",
    },
    {
    name: "Michelangelo",
    msg: "WhatsUp",
    data: "12.03.2020 13:00",
    color: "#333322",
    },
    {
    name: "Donatello",
    msg: "Hello everyone",
    data: "12.03.2020 13:01",
    color: "#444322",
    },
]

const chatSectionEl = document.querySelector('$chatSection');
const textEl = document.querySelector('#textMessage');
const inputEl = document.querySelector('#inputMessage');
const sendBtnEl = document.querySelector('#chatBtn');

sendBtnEl.addEventListener('click', onClickBtn);

function onClickBtn(e) {
    console.log(e.target)
}

module.exports = {
    onClickBtn
}