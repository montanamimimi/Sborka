import { printError, printResult } from './output.js';
import calcDatesDiff from './calcDatesDiff.js';
import { addSwitcher } from './switcher.js';
import { greatTimer } from './timer.js';
import bundlerPic from '../picture.jpg';
import '../css/main.scss';




const pic = document.createElement('img');
pic.src = bundlerPic;
pic.onload = () => {
    document.body.appendChild(pic)
};


const form = document.getElementById('calcDate');

addSwitcher();
greatTimer();

form.onsubmit = function (event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);

    const dateFrom = formData.get('dateFrom');
    const dateTo = formData.get('dateTo');

    if (!dateFrom || !dateTo) {
        printError(`Fill both date fields`);
        return
    }

    const datesDiff = calcDatesDiff(dateFrom, dateTo);

    printResult(datesDiff);
}



