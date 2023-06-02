import { goToPage } from "../../index.js";

export let difficulty = 0;

export const DifficultyPage = (app) => {
  app.innerHTML += `
  <div class="container">
    <div class="difficulty">
      <h2 class="difficulty__text">Выбери сложность</h2>
      <form class="difficulty__form">
        <div class="difficulty__value-wrap">
          <label class="difficulty__value">
            <input type="radio" name="difficulty" value="1">
            <span>1</span>
          </label>
          <label class="difficulty__value">
            <input type="radio" name="difficulty" value="2">
            <span>2</span>
          </label>
          <label class="difficulty__value">
            <input type="radio" name="difficulty" value="3">
            <span>3</span>
          </label>
        </div>
        <button type="submit" class="difficulty__start">Старт</button>
      </form>
      </div>
  </div>
`;

  // Перехватываем событие отправки формы
  document
    .querySelector(".difficulty__form")
    .addEventListener("submit", (event) => {
      // Отменяем стандартное поведение формы
      event.preventDefault();

      const radioButtons = document.querySelectorAll(
        '.difficulty__value input[type="radio"]'
      );
      for (let radioButton of radioButtons) {
        if (radioButton.checked) {
          difficulty = radioButton.value;
          goToPage("Game");
          break;
        }
      }
      if (!difficulty) {
        console.log("выберите сложность");
      }
    });

  // Рисуем видимость выбраного компонента
  const difValues = document.querySelectorAll(".difficulty__value");
  difValues.forEach((difValue) => {
    difValue.addEventListener("click", () => {
      document
        .querySelector(".difficulty__value--active")
        ?.classList.remove("difficulty__value--active");
      difValue.classList.add("difficulty__value--active");
    });
  });
};
