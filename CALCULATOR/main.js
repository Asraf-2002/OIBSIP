document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (key === "Escape") {
        clearResult();
    }

    if (key === "Enter" || key === "=") {
        calculate();
    }
});

function appendToResult(value) {
    document.getElementById("expression").value += value;
}

function clearResult() {
    document.getElementById("expression").value = "";
}

function deleteLastChar() {
    const expression = document.getElementById("expression").value;
    document.getElementById("expression").value = expression.slice(0, -1);
}

calculate = () => {
    const expression = document.getElementById("expression").value;
    try {
        const answer = eval(expression);
        /////////document.getElementById("expression").value = answer;//////
        document.getElementById("answer").value = answer;
    } catch (error) {
        document.getElementById("expression").value = "Error";
    }
};
