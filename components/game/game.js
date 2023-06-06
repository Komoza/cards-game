import { difficulty } from '../difficulty/difficulty-component.js';

const arrCards = [];

const fillCardsArray = (numbers) => {
    for (let i = 0; i < numbers; i++) {
        arrCards.push(
            `<img class="game__card" src="./assets/image/card/dealer-shirt.jpg" alt="card"/>`
        );
    }
};

export const Game = (app) => {

  // опции сложности
    switch (difficulty) {
        case '1':
            fillCardsArray(6);
            break;
        case '2':
            fillCardsArray(12);
            break;
        case '3':
            fillCardsArray(18);
            break;
        default:
            break;
    }

    app.innerHTML = `
    <div class="container">
    <div class="game">
        <div class="header">
            <div class="timer">
                <div class="timer__text">
                    <div class="timer__text-min">min</div>
                    <div class="timer__text-sec">sec</div>
                </div>
                <div class="timer__counter">00.00</div>
            </div>
            <button class="new-game">Начать заново</button>
        </div>

        <main class="game-wrap">
            <div class="game__field">
                ${arrCards.map((card) => card).join('')}
            </div>
        </main>
    </div>
</div>
  `;
};
