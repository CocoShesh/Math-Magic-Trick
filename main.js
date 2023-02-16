const ROW = 5;
const COL = 9;
const numberSet = [
  [1, 3, 5, 7, 9, 11, 13, 15, 17],
  [2, 3, 6, 7, 10, 11, 14, 15, 18],
  [4, 5, 6, 7, 12, 13, 14, 15, 20],
  [8, 9, 10, 11, 12, 13, 14, 15, 24],
  [16, 17, 18, 19, 20, 21, 22, 23, 24]
];

const isWithinSet = (set, number) => set.includes(number);

const generateRandomNumbers = (size) => {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * size) + 1);
  }
  return arr;
};

const isNumberInSet = (setIndex) => {
  const set = numberSet[setIndex - 1];
  const response = prompt(`Set ${String.fromCharCode(setIndex + 64)}: ${set}\nIs your number within this set of numbers? Enter 'Y' or 'N':`);
  return response === 'Y' || response === 'y';
};

const getUsersNumber = () => {
  const arrangement = generateRandomNumbers(5);
  const counter = new Array(31).fill(0);
  arrangement.forEach((a) => {
    if (isNumberInSet(a)) {
      numberSet[a - 1].forEach((n) => {
        counter[n]++;
      });
    }
  });
  let userNumber = 0;
  let maxCount = 0;
  for (let i = 1; i <= 30; i++) {
    if (counter[i] > maxCount) {
      maxCount = counter[i];
      userNumber = i;
    }
  }
  return userNumber;
};

let userNumber = getUsersNumber();
alert(`Okay. Let me guess, your number is ${userNumber}.`);
const again = prompt("Do you want to try again? Enter 'Y' or 'N':");

while (again.toUpperCase() === 'Y') {
  userNumber = getUsersNumber();
  alert(`Okay. Let me guess, your number is ${userNumber}.`);
  const again = prompt("Do you want to try again? Enter 'Y' or 'N':");
}

alert("Thank you for playing! Have a great day!");
