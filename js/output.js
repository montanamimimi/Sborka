const output = document.getElementById('output');

export function printError(errorText) {
    output.innerText = errorText;
    output.style.color = 'red';
}

export function printResult(diff) {
    output.innerText = `Years: ${-diff.years}, months: ${-diff.months}, days: ${-diff.days}`;
    output.style.color = 'black';
}