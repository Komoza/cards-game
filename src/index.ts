import { DifficultyPage } from './components/difficulty/difficulty-component';
import { Game } from './components/game/game';
import './styles/index.scss';

const app: HTMLElement | null = document.getElementById('root');
let page = 'Difficulty';

export const goToPage = (newPage: string) => {
    page = newPage;
    renderApp();
};

const renderApp = () => {
    switch (page) {
        case 'Difficulty':
            if (app) {
                DifficultyPage(app);
            }
            break;
        case 'Game':
            if (app) {
                Game(app);
            }
            break;
        default:
            console.log('404');
            break;
    }
};

// start
renderApp();
