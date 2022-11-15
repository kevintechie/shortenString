const shortenString = (str) => {
  if (typeof str !== 'string') {
    throw Error('Input must be a string.');
  }

  const charMap = [];
  let currentChar;
  let prevChar;

  [...str].forEach((element) => {
    if (element !== prevChar) {
      prevChar = element;

      if (currentChar !== undefined) {
        charMap.push(currentChar);
      }

      currentChar = {};
      currentChar = {
        char: element,
        qty: 0,
      };
    }

    currentChar.qty += 1;
  });

  charMap.push(currentChar);

  const outString = charMap.map(element => element.char + element.qty).join('');

  return outString;
};

// test with non-repeating sets
console.log(shortenString('aaabbbcccddddd'));

// test with repeating sets
console.log(shortenString('aaadddaaadddddaaaaaadddddddd'));

// test with all unique
console.log(shortenString('asdf'));
