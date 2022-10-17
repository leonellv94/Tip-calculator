const bill = document.getElementById('bill_valor');
const people = document.querySelector('.input_people');
const person = document.getElementById('price_tip');
const totalPerson = document.getElementById('price_total_person');
const form = document.getElementById('form1');
const $tips = document.querySelectorAll('.tip_btns');
const buttons = document.getElementById('btns__tip');
const customBtn = document.querySelector('.tip_btns_2');
const btnReset = document.getElementById('btn_reset');
const zeroError = document.querySelector('.label_people_error');

form.addEventListener('input', () =>{
    const billValue = parseInt(bill.value);
    const peopleValue = parseInt(people.value);
    const division = billValue / peopleValue;
    const divisionFloat = division.toFixed(3);
    totalPerson.textContent = divisionFloat;
    if (people.value == 0) {
        zeroError.classList.remove ('hidden');
        people.classList.add ('orange_border');
    } else {
        zeroError.classList.add ('hidden');
        people.classList.remove ('orange_border');
    }
})

$tips.forEach((button, i) =>{
    button.addEventListener('click', () => {
        const tipAmount = totalPerson.textContent * $tips[i].value / 100
        person.innerHTML = tipAmount.toFixed(3)
    })
})

customBtn.addEventListener('input', () =>{
    const tipAmountCustom = totalPerson.textContent * customBtn.value / 100
    person.innerHTML = tipAmountCustom.toFixed(2)
})
