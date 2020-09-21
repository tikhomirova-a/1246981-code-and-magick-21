'use strict';

const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const SHADOW_GAP = 10;
const BAR_WIDTH = 40;
const MAX_HEIGHT = 150;
const GAP = 50;
const HALF_GAP = 25;
const TEXT_GAP = 15;

const renderCloud = (ctx, color, x, y) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = (arr) => {
  let maxElement = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (maxElement < arr[i]) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = (ctx, names, times) => {
  renderCloud(ctx, `rgba(0, 0, 0, 0.7)`, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP);
  renderCloud(ctx, `white`, CLOUD_X, CLOUD_Y);
  ctx.fillStyle = `black`;
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  ctx.fillText(`Ура вы победили!`, CLOUD_X + HALF_GAP, CLOUD_Y + HALF_GAP);
  ctx.fillText(`Список результатов:`, CLOUD_X + HALF_GAP, CLOUD_Y + GAP);
  const maxTime = getMaxElement(times);
  for (let i = 0; i < names.length; i++) {
    ctx.fillStyle = `black`;
    ctx.fillText(names[i], CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - TEXT_GAP);
    const barHeight = MAX_HEIGHT * times[i] / maxTime;
    ctx.fillText(`${Math.round(times[i])}`, CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - HALF_GAP - barHeight - TEXT_GAP);
    if (names[i] === `Вы`) {
      ctx.fillStyle = `hsl(0, 100%, 50%)`;
    } else {
      const lightness = Math.floor(Math.random() * 101);
      ctx.fillStyle = `hsl(240, 100%, ${lightness}%)`;
    }
    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - HALF_GAP - barHeight, BAR_WIDTH, barHeight);
  }
};
