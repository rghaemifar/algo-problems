const FIRST_POS = 1;
const LAST_POS = 100;

const getRandom = () => Math.ceil(Math.random() * 100);
const jumpRight = () => pos++;
const jumpLeft = () => pos--;

let pos = getRandom();

const jump = () => {
  if (pos === FIRST_POS) jumpRight();
  if (pos === LAST_POS) jumpLeft();

  const jumpsLeft = getRandom() % 2;
  jumpsLeft ? jumpLeft() : jumpRight();
};

const guess = (index) => {
  return pos === index;
};

let found = false;

for (let i = 1; i <= 100; i++) {
  jump();

  console.log("first loop", { pos, index: i });
  found = guess(i);
  if (found) {
    console.log("Found in first loop & pos:", pos);
    break;
  }
}

if (!found)
  for (let i = 0; i <= 100; i++) {
    jump();

    console.log("second loop", { pos, index: i });
    found = guess(i);
    if (found) {
      console.log("Found in second loop & pos:", pos);
      break;
    }
  }

if (!found) console.log("Not found.. 404");
