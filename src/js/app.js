/**
 * Функция для создания нового персонажа
 *
 * @param {string} name - имя персонажа
 * @param {string} type - вид персонажа
 * @throws <описание генерируемой ошибки>
 */
export default function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40;
}

Character.prototype.damage = function damage(points) {
  const damageCorrect = points * (1 - this.defence / 100);
  this.health -= damageCorrect;
};

const player = new Character('Rick', 'Magician');

console.log(player);
player.damage(20);
console.log(player);
