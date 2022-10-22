let operand1 = "";
let operand2 = "";
let operator = "";
let cavab = "";
$(".reqem").on("click", function () {
    if (cavab) {
        return
    }
    if (!operator) {
        operand1 += this.value
    } else {
        operand2 += this.value
    }
    display()
})

$(".emeliyyatci").on("click", function () {
    if (operand2) {
        return
    }
    operator = this.value
    display()
})

$(".beraber").on("click", function () {
    if (operator == "/") {
        cavab = parseInt(operand1) / parseInt(operand2)
    } else if (operator == "+") {
        cavab = parseInt(operand1) + parseInt(operand2)
    } else if (operator == "-") {
        cavab = parseInt(operand1) - parseInt(operand2)
    } else if (operator == "*") {
        cavab = parseInt(operand1) * parseInt(operand2)
    }
    display()
})


$(".temizle").on("click", function () {
    operand1 = "";
    operand2 = "";
    operator = "";
    cavab = "";
    display()
})

function display() {
    $("#screen").html(operand1 + operator + operand2)
    $("#cavab").html(cavab)
}