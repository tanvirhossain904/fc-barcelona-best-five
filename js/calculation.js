// get or catch playersList ..
const playersList = document.getElementById("ul");

// click = add to cart
function playerList(name, this_btn) {

    const playerName = getIDInnerText(name);

    const length = playersList.children.length;


    if (length < 5) {
        const li = document.createElement('li');
        li.innerText = playerName;
        playersList.appendChild(li);
        this_btn.disabled = true;
        li.classList.add('px-5', "py-2", "text-xl");


        setTextValue("count", length + 1);
    }
    else {
        alert("Can't add more than 5 players");
    }
}


// calculate-per-player-amount

function calculate() {

    const length = playersList.children.length;

    const perPlayer = getIDValue('per-player');
    const perPlayerValue = makeFloat(perPlayer);

    if (isNaN(perPlayerValue)) {
        alert("Enter a valid number");

        setTextValue("player-expenses", "");

        setInputValue("per-player", '');

        setTextValue("total", "");
    }

    else if (perPlayerValue == 0) {
        alert(`Player-Cost => (${perPlayerValue})  can't be Zero`);

        setTextValue("player-expenses", '');

        setInputValue("per-player", '');

        setTextValue("total", "");
    }

    else if (perPlayerValue < 0) {
        alert(`Player-Cost => (${perPlayerValue})  can't be Negative`);

        setTextValue("player-expenses", '');

        setInputValue("per-player", '');

        setTextValue("total", "");
    }

    else if (length == 0) {
        alert("Please Select some Players");

        setTextValue("player-expenses", '');

        setInputValue("per-player", '');

        setTextValue("total", "");
    }

    else {
        const expenses = length * perPlayerValue;

        setTextValue("player-expenses", expenses);

        setTextValue("total", "");
    }
}


// calculate-total-amount

const calculateTotal = document.getElementById("calculate-total").addEventListener('click', function () {


    const playerExpenses = getIDInnerText('player-expenses');
    const playerExpensesValue = makeFloat(playerExpenses);

    const manager = getIDValue('manager');
    const managerValue = makeFloat(manager);

    const coach = getIDValue('coach');
    const coachValue = makeFloat(coach);

    if (isNaN(managerValue) || isNaN(coachValue)) {
        alert("Enter  for manager & coach");

        setTextValue("total", "");

        setInputValue("per-player", '');
    }

    else if (managerValue == 0) {
        alert(`Manager-Cost => (${managerValue})  can't be Zero`);

        setTextValue("total", "");

        setInputValue("per-player", '');

        setInputValue("manager", '');
    }

    else if (coachValue == 0) {
        alert(`Coach-Cost => (${coachValue})  can't be Zero`);

        setTextValue("total", "");

        setInputValue("per-player", '');

        setInputValue("coach", '');
    }

    else if (managerValue < 0) {
        alert(`Manager-Cost => (${managerValue})  can't be Negative`);

        setTextValue("total", "");

        setInputValue("per-player", '');

        setInputValue("manager", '');
    }

    else if (coachValue < 0) {
        alert(`Coach-Cost => (${coachValue})  can't be Negative`);

        setTextValue("total", "");

        setInputValue("per-player", '');

        setInputValue("coach", '');
    }

    else if (playerExpenses == "") {
        alert("Please Calculate");

        setTextValue("total", "");

        setInputValue("per-player", '');
    }

    else {
        const finalTotal = playerExpensesValue + managerValue + coachValue;
        setTextValue("total", finalTotal);

        setInputValue("per-player", '');
    }

})
