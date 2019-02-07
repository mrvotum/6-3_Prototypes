import Character from '../js/app';

test('Урон 20, по формуле = 12', () => {
  const inputName = 'Rick';
  const inputType = 'Magician';

  const playerReceived = new Character(inputName, inputType);

  const expected = { // ожидает
    name: 'Rick',
    type: 'Magician',
    health: 88,
    attack: 10,
    defence: 40,
  };

  playerReceived.damage(20); // получает
  expect(playerReceived).toEqual(expected); // сравнивает
});
