// Создание приложения
const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundAlpha: 0,
});
document.body.append(app.view);

const sprites = {};

// Функция установки размеров основных спрайтов по ширине окна
function setSpriteSize(sprite) {
  sprite.width = window.innerWidth;
  sprite.height = window.innerHeight;
}

// Добавление Background
sprites.background = PIXI.Sprite.from("./images/background.jpg");
setSpriteSize(sprites.background);
app.stage.addChild(sprites.background);

// Добавление градиента
sprites.gradient = PIXI.Sprite.from("./images/gradient.svg");
setSpriteSize(sprites.gradient);
app.stage.addChild(sprites.gradient);

// Добавление карточки
sprites.card = PIXI.Sprite.from("./images/card.png");
sprites.card.width = 300;
sprites.card.height = 300;
// Добавление тени
const dropShadowFilter = new PIXI.filters.DropShadowFilter();
dropShadowFilter.color = 0x000000;
dropShadowFilter.alpha = 0.7;
dropShadowFilter.blur = 6;
dropShadowFilter.distance = 10;
sprites.card.filters = [dropShadowFilter];
app.stage.addChild(sprites.card);
