import { goToPage } from '../../index.js';

const app = document.getElementById('root');

export const EndGame = (isWin, time) => {
    app.innerHTML += `
        <div class="end">
            <div class="end__wrap">
                <img class="end__image" src="./images/${
                    isWin ? 'win' : 'lose'
                }-game.png" alt="${isWin ? 'win' : 'lose'} game">
                <p class="end__status">${
                    isWin ? 'Вы выиграли!' : 'Вы проиграли!'
                }</p>
                <p class="end__time-text">Затраченое время</p>
                <p class="end__time">${time.min}.${time.sec}</p>
                <button class="end__again">Играть снова</button>
            </div>
        </div>
    `;
    document.querySelector('.end__again').addEventListener('click', () => {
        goToPage('Difficulty');
    });
};
