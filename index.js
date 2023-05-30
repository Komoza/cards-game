import { difficultyPage } from "./components/difficulty/difficulty-component.js";

const app = document.getElementById("root");

const renderApp = () => {
  app.innerHTML = `
    <div class="container">
        ${difficultyPage()}
    </div>`;
};

renderApp();
