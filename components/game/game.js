import { difficulty } from "../difficulty/difficulty-component.js";

export const Game = (app) => {
  app.innerHTML = `
  <div class="container">
    <h1 style="color: white"> Экран игры. Сложность: ${difficulty}</h1>
  </div>
  `;
};
