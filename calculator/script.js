document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.btn');
    var inputBox = document.getElementById('result-box');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var btnValue = this.value;

            if (btnValue === "del") {
                inputBox.value = inputBox.value.slice(0, -1);
            } 
            else if (btnValue === "delall") {
                inputBox.value = "";
            } 
            else if (btnValue === "=") {
                try {
                    inputBox.value = eval(inputBox.value);
                } catch {
                    inputBox.value = "Error";
                }
            } 
            else if (btnValue === "%") {
                inputBox.value = ((parseFloat(inputBox.value) / 100)+"*").toString();
            }
            else {
                switch (btnValue) {
                    case "+":
                    case "-":
                    case "*":
                    case "/":
                    case ".":
                        inputBox.value += btnValue;
                        break;
                    default:
                        inputBox.value += btnValue;
                }
            }
        });
    });
});
