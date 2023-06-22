const calculateTemp = () => {
    const inputTemp = document.getElementById('inputNumber').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    // Calculation Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Calculation Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    // Show the result
    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = inputTemp + " * (9/5) + 32 = " + celToFah(inputTemp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = inputTemp + " - 32 * (5/9) = " + fahToCel(inputTemp) + "&#176; Celsius";
    }
}