const chatInfo = [
    {
    name: "Leonardo",
    msg: "Hello",
    data: "12.03.2020 12:30",
    },
    {
    name: "Raphael",
    msg: "Hi",
    data: "12.03.2020 12:34",
    },
    {
    name: "Michelangelo",
    msg: "WhatsUp",
    data: "12.03.2020 13:00",
    },
    {
    name: "Donatello",
    msg: "Hello everyone",
    data: "12.03.2020 13:01",
    },
]

const chatSectionEl = document.querySelector('#chatSection');
const textEl = document.querySelector('#textMessage');
const inputEl = document.querySelector('#inputMessage');
const sendBtnEl = document.querySelector('#chatBtn');
const msgsEl = document.querySelector('#chatMsgs');

sendBtnEl.addEventListener('click', onClickBtn);

for (let i = 0; i < chatInfo.length; i++) {
    renderMsgs(chatInfo[i])
}

function onClickBtn(e) {
    if (inputEl.value && textEl.value) {
        const curentMas = {
        name: inputEl.value,
        msg: textEl.value,
        data: new Date().toLocaleDateString('en-US')
        }
        chatInfo.push(curentMas)
        renderMsgs(curentMas)
    }
    clearForm(textEl, inputEl);
}

function renderMsgs(obj) {
    return msgsEl.insertAdjacentHTML('beforeend', `
        <div class="msg-block">
            <div class="msg-name">${obj["name"]}</div>
            <p class="msg-text">${obj["msg"]}</p>
            <div  class="msg-date">${obj["data"]}</div>
        </div>
    `)
}

function clearForm(textArea, input) {
    textArea.value = '';
    input.value = '';
}
