import { goToPage } from '../../index.js';
import { difficulty } from '../difficulty/difficulty-component.js';
import dealerShirt from '../../assets/image/card/dealer-shirt.jpg';

// карты
import aceOfClubs from '../../assets/image/card/ace-of-clubs.jpg';
import aceOfDiamonds from '../../assets/image/card/ace-of-diamonds.jpg';
import aceOfHearts from '../../assets/image/card/ace-of-hearts.jpg';
import aceOfSpades from '../../assets/image/card/ace-of-spades.jpg';
import kingOfClubs from '../../assets/image/card/king-of-clubs.jpg';
import kingOfDiamonds from '../../assets/image/card/king-of-diamonds.jpg';
import kingOfHearts from '../../assets/image/card/king-of-hearts.jpg';
import kingOfSpades from '../../assets/image/card/king-of-spades.jpg';
import queenOfClubs from '../../assets/image/card/queen-of-clubs.jpg';
import queenOfDiamonds from '../../assets/image/card/queen-of-diamonds.jpg';
import queenOfHearts from '../../assets/image/card/queen-of-hearts.jpg';
import queenOfSpades from '../../assets/image/card/queen-of-spades.jpg';
import jackOfClubs from '../../assets/image/card/jack-of-clubs.jpg';
import jackOfDiamonds from '../../assets/image/card/jack-of-diamonds.jpg';
import jackOfHearts from '../../assets/image/card/jack-of-hearts.jpg';
import jackOfSpades from '../../assets/image/card/jack-of-spades.jpg';
import tenOfClubs from '../../assets/image/card/ten-of-clubs.jpg';
import tenOfDiamonds from '../../assets/image/card/ten-of-diamonds.jpg';
import tenOfHearts from '../../assets/image/card/ten-of-hearts.jpg';
import tenOfSpades from '../../assets/image/card/ten-of-spades.jpg';
import nineOfClubs from '../../assets/image/card/nine-of-clubs.jpg';
import nineOfDiamonds from '../../assets/image/card/nine-of-diamonds.jpg';
import nineOfHearts from '../../assets/image/card/nine-of-hearts.jpg';
import nineOfSpades from '../../assets/image/card/nine-of-spades.jpg';
import eightOfClubs from '../../assets/image/card/eight-of-clubs.jpg';
import eightOfDiamonds from '../../assets/image/card/eight-of-diamonds.jpg';
import eightOfHearts from '../../assets/image/card/eight-of-hearts.jpg';
import eightOfSpades from '../../assets/image/card/eight-of-spades.jpg';
import sevenOfClubs from '../../assets/image/card/seven-of-clubs.jpg';
import sevenOfDiamonds from '../../assets/image/card/seven-of-diamonds.jpg';
import sevenOfHearts from '../../assets/image/card/seven-of-hearts.jpg';
import sevenOfSpades from '../../assets/image/card/seven-of-spades.jpg';
import sixOfClubs from '../../assets/image/card/six-of-clubs.jpg';
import sixOfDiamonds from '../../assets/image/card/six-of-diamonds.jpg';
import sixOfHearts from '../../assets/image/card/six-of-hearts.jpg';
import sixOfSpades from '../../assets/image/card/six-of-spades.jpg';

let arrCards = [];
const getSuit = (num) => {
    switch (num) {
        case 1:
            return 'spades';
        case 2:
            return 'hearts';
        case 3:
            return 'diamonds';
        case 4:
            return 'clubs';
        default:
            return 'error';
    }
};
const getRank = (num) => {
    switch (num) {
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        case 10:
            return 'ten';
        case 11:
            return 'jack';
        case 12:
            return 'queen';
        case 13:
            return 'king';
        case 14:
            return 'ace';
        default:
            return 'error';
    }
};
const checkTheWin = () => {
    const cards = document.querySelectorAll('.game__card');
    for (let card of cards) {
        if (card.dataset.status !== 'open') {
            return false;
        }
    }
    return true;
};
const checkTheCuple = (firstOpenCard, secondOpenCard) => {
    if (firstOpenCard.value !== secondOpenCard.value) {
        alert('Вы проиграли');
        goToPage('Difficulty');
    } else {
        firstOpenCard.nod.setAttribute('data-status', 'open');
        secondOpenCard.nod.setAttribute('data-status', 'open');

        if (checkTheWin()) {
            alert('Вы победили');
            goToPage('Difficulty');
        } else {
            firstOpenCard.value = '';
            firstOpenCard.nod = null;

            secondOpenCard.value = '';
            secondOpenCard.nod = null;
        }
    }
};

const startGame = () => {
    let firstOpenCard = {
        value: '',
        nod: null,
    };
    let secondOpenCard = {
        value: '',
        nod: null,
    };
    // актвируем кнопку Начать заново
    const newGame = document.querySelector('.new-game');
    newGame.classList.add('new-game--active');
    newGame.addEventListener('click', () => {
        goToPage('Difficulty');
    });

    // запуск таймера
    const min = document.querySelector('.timer__counter--min');
    const sec = document.querySelector('.timer__counter--sec');

    let second = '';
    let minute = '';
    setInterval(() => {
        second = Number(sec.innerHTML) + 1;
        if (second < 60) {
            sec.innerHTML = Number(second) < 10 ? '0' + second : second;
        } else {
            minute = Number(min.innerHTML) + 1;
            min.innerHTML = Number(minute) < 10 ? '0' + minute : minute;
            sec.innerHTML = '00';
        }
    }, 1000);

    // Ивент на клик карты
    const cards = document.querySelectorAll('.game__card');
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            // проверка, чтобы ивент не отрабатывал на уже открытые карты
            if (card.dataset.status !== 'open') {
                card.setAttribute('src', getImageCard(card.dataset.value));
                // если первая карта открыта переворачиваем вторую и проверяем пара ли это
                if (!firstOpenCard.value) {
                    firstOpenCard.value = card.dataset.value;
                    firstOpenCard.nod = card;
                } else {
                    secondOpenCard.value = card.dataset.value;
                    secondOpenCard.nod = card;
                    checkTheCuple(firstOpenCard, secondOpenCard);
                }
            }
        });
    });
};

const getImageCard = (nameCard) => {
    switch (nameCard) {
        case 'ace of clubs':
            return aceOfClubs;
        case 'ace of diamonds':
            return aceOfDiamonds;
        case 'ace of hearts':
            return aceOfHearts;
        case 'ace of spades':
            return aceOfSpades;
        case 'king of clubs':
            return kingOfClubs;
        case 'king of diamonds':
            return kingOfDiamonds;
        case 'king of hearts':
            return kingOfHearts;
        case 'king of spades':
            return kingOfSpades;
        case 'queen of clubs':
            return queenOfClubs;
        case 'queen of diamonds':
            return queenOfDiamonds;
        case 'queen of hearts':
            return queenOfHearts;
        case 'queen of spades':
            return queenOfSpades;
        case 'jack of clubs':
            return jackOfClubs;
        case 'jack of diamonds':
            return jackOfDiamonds;
        case 'jack of hearts':
            return jackOfHearts;
        case 'jack of spades':
            return jackOfSpades;
        case 'ten of clubs':
            return tenOfClubs;
        case 'ten of diamonds':
            return tenOfDiamonds;
        case 'ten of hearts':
            return tenOfHearts;
        case 'ten of spades':
            return tenOfSpades;
        case 'nine of clubs':
            return nineOfClubs;
        case 'nine of diamonds':
            return nineOfDiamonds;
        case 'nine of hearts':
            return nineOfHearts;
        case 'nine of spades':
            return nineOfSpades;
        case 'eight of clubs':
            return eightOfClubs;
        case 'eight of diamonds':
            return eightOfDiamonds;
        case 'eight of hearts':
            return eightOfHearts;
        case 'eight of spades':
            return eightOfSpades;
        case 'seven of clubs':
            return sevenOfClubs;
        case 'seven of diamonds':
            return sevenOfDiamonds;
        case 'seven of hearts':
            return sevenOfHearts;
        case 'seven of spades':
            return sevenOfSpades;
        case 'six of clubs':
            return sixOfClubs;
        case 'six of diamonds':
            return sixOfDiamonds;
        case 'six of hearts':
            return sixOfHearts;
        case 'six of spades':
            return sixOfSpades;
        default:
            return '404';
    }
};
const fillCardsArray = (numbers) => {
    console.log(aceOfClubs);
    // генерация карт
    let rank = '';
    let suit = '';
    for (let i = 0; i < numbers / 2; i++) {
        // проверка на больше одной пары одинаковых карт в игре
        do {
            rank = getRank(Math.floor(Math.random() * 9) + 6);
            suit = getSuit(Math.floor(Math.random() * 4) + 1);
        } while (
            arrCards.includes(
                `<img data-value="${rank} of ${suit}" class="game__card" src=${getImageCard(
                    `${rank} of ${suit}`
                )} alt="card"/>`
            )
        );

        let card = `<img data-value="${rank} of ${suit}" class="game__card" src=${getImageCard(
            `${rank} of ${suit}`
        )} alt="card"/>`;
        arrCards.push(card);

        // добавляем пару
        let index = Math.floor(Math.random() * numbers) + 1;

        // поиск случайного места для пары
        let isFindSlot = false;
        while (!isFindSlot) {
            if (!arrCards[index]) {
                arrCards[index] = card;
                isFindSlot = true;
            } else if (index === numbers) {
                index = 1;
            } else {
                index++;
            }
        }
    }

    // переворачиваем карты, рубашкой вверх
    setTimeout(() => {
        const cards = document.querySelectorAll('.game__card');
        cards.forEach((card) => {
            card.setAttribute('src', dealerShirt);
        });
    }, 5000);
};

export const Game = (app) => {
    // опции сложности
    arrCards = [];
    switch (difficulty) {
        case '1':
            fillCardsArray(6);
            break;
        case '2':
            fillCardsArray(12);
            break;
        case '3':
            fillCardsArray(36);
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
                    <div class="timer__counter">
                    <span class="timer__counter--min">00</span>.<span class="timer__counter--sec">00</span></div>
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

    // Запуск игры, активность кнопок и запуск таймера после предпоказа карт
    setTimeout(startGame, 5000);
};
