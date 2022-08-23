// input-value
function getIDValue(valueId) {
    const elemntId = document.getElementById(valueId);
    const idValueString = elemntId.value;
    return idValueString;
}

// innerText
function getIDInnerText(innerTextId) {
    const elemntId = document.getElementById(innerTextId);
    const idTextString = elemntId.innerText;
    return idTextString;
}

// makeFloat
function makeFloat(str) {
    const float = parseFloat(parseFloat(str).toFixed(2));
    // console.log(float);
    return float;
}


// setTextValue
function setTextValue(id, newValue) {
    const textElementId = document.getElementById(id);
    textElementId.innerText = newValue;
}

// setInputValue (should be into Empty)
function setInputValue(id, empty) {
    const inputId = document.getElementById(id);
    inputId.value = empty;
}
