import { printError, printResult } from './output.js';
import calcDatesDiff from './calcDatesDiff.js';
import { addSwitcher } from './switcher.js';
import { greatTimer } from './timer.js';
import '../css/main.scss';
import { Howl } from 'howler';
import music1 from '../sound.mp3';

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



