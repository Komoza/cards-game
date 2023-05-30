export const difficultyPage = () => {
  return `
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
      <button class="difficulty__start">Старт</button>
    </form>
  </div>
`;
};
