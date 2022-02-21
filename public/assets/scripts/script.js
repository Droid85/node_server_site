const rootNumbersEl = document.querySelector('#averagesBtn');
const inputEl = document.querySelector('#averagesInput');
const resultsEl = document.querySelector('#root_numbers');

let lastNum = 0;
const numberArr = []

rootNumbersEl.addEventListener('click', onButtonClick);

function onButtonClick(e) {
    const curentNumsArr = [lastNum];
    let i = +inputEl.value;
    if (!isNaN(parseFloat(i)) && isFinite(i)) {
        curentNumsArr.push(i);
        let j = curentNumsArr.reduce((acc, curent) => {
            return (acc + curent);
        })
        let average = j / curentNumsArr.length;
        curentNumsArr.push(average);
        numberArr.push(curentNumsArr)
        lastNum = i;
        resultsRender(curentNumsArr)
    }
    inputEl.value = '';
}

function resultsRender(arr) {
    return resultsEl.insertAdjacentHTML('beforeend', `
        <tr>
            <td class="tabcell">${arr[0]}</td>
            <td class="tabcell">${arr[1]}</td>
            <td class="tabcell">${arr[2]}</td>
        </tr>
    `)
}
