'use strict';
const NUMBER_OF_OBJECTS = 4;
const setup = document.querySelector(`.setup`);
const setupSimilar = setup.querySelector(`.setup-similar`);
const similarList = setup.querySelector(`.setup-similar-list`);

setup.classList.remove(`hidden`);

const firstNames = [
  `Иван`,
  `Хуан Себастьян`,
  `Мария`,
  `Кристоф`,
  `Виктор`,
  `Юлия`,
  `Люпита`,
  `Вашингтон`
];

const lastNames = [
  `да Марья`,
  `Верон`,
  `Мирабелла`,
  `Вальц`,
  `Онопко`,
  `Топольницкая`,
  `Нионго`,
  `Ирвинг`
];

const coatColors = [
  `rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`
];

const eyesColors = [
  `black`,
  `red`,
  `blue`,
  `yellow`,
  `green`
];

const getRandom = (arr) => {
  const randomInt = Math.floor(Math.random() * Math.floor(arr.length));
  return arr[randomInt];
};

const generateObject = () => {
  const object = {};
  object.name = getRandom(firstNames) + ` ` + getRandom(lastNames);
  object.coatColor = getRandom(coatColors);
  object.eyesColor = getRandom(eyesColors);
  return object;
};

let randomWizards = [];
const generateArray = () => {
  for (let i = 0; i < NUMBER_OF_OBJECTS; i++) {
    randomWizards.push(generateObject());
  }
  return randomWizards;
};

generateArray();

const wizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

const renderWizard = (randomWizard) => {
  const wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = randomWizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = randomWizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = randomWizard.eyesColor;
  return wizardElement;
};

const fragment = document.createDocumentFragment();
for (let i = 0; i < randomWizards.length; i++) {
  fragment.appendChild(renderWizard(randomWizards[i]));
}
similarList.appendChild(fragment);
setupSimilar.classList.remove(`hidden`);
