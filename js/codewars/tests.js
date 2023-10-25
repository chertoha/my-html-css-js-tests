// function hamming(a, b) {
//   return a.split('').reduce((acc, val, i) => (b.charAt(i) !== val ? ++acc : acc), 0);
// }

// console.log(hamming('I like turtles', 'I like turkeys'));
// console.log(hamming('Hello World', 'Hello World'));
// console.log(hamming('hello world', 'hello tokyo'));
// console.log(hamming('a man a plan a canal', 'a man a plan sobanal'));
// console.log(hamming('hamming and cheese', 'Hamming and Cheese'));
// console.log(hamming('espresso', 'Expresso'));
// console.log(hamming('old father, old artificer', 'of my soul the uncreated '));

const X = 'X';

function getIsPointChecked(arr, i, j) {
  return arr.some(item => item[0] === i && item[1] === j);
}

function landPerimeter(arr) {
  let totalPerimeter = 0;

  const arrChecked = [];

  function findSiblingsAndCountX(i, j) {
    // let count = 0;

    let perimeter = 4;
    // console.log('recursion');

    //left
    // if (j - 1 > 0 && arr[i][j - 1] === X && !getIsPointChecked(arrChecked, i, j - 1)) {
    //   arrChecked.push([i, j - 1]);
    //   count += findSiblingsAndCountX(i, j - 1);
    // }

    if (j - 1 > 0 && arr[i][j - 1] === X) {
      perimeter -= 1;
      if (!getIsPointChecked(arrChecked, i, j - 1)) {
        arrChecked.push([i, j - 1]);
        perimeter += findSiblingsAndCountX(i, j - 1);
      }
    }

    //top
    // if (i - 1 > 0 && arr[i - 1][j] === X && !getIsPointChecked(arrChecked, i - 1, j)) {
    //   arrChecked.push([i - 1, j]);
    //   count += findSiblingsAndCountX(i - 1, j);
    // }

    if (i - 1 > 0 && arr[i - 1][j] === X) {
      perimeter -= 1;
      if (!getIsPointChecked(arrChecked, i - 1, j)) {
        arrChecked.push([i - 1, j]);
        perimeter += findSiblingsAndCountX(i - 1, j);
      }
    }

    //right
    // if (j + 1 < arr[i].length && arr[i][j + 1] === X && !getIsPointChecked(arrChecked, i, j + 1)) {
    //   arrChecked.push([i, j + 1]);
    //   count += findSiblingsAndCountX(i, j + 1);
    // }
    if (j + 1 < arr[i].length && arr[i][j + 1] === X) {
      perimeter -= 1;
      if (!getIsPointChecked(arrChecked, i, j + 1)) {
        arrChecked.push([i, j + 1]);
        perimeter += findSiblingsAndCountX(i, j + 1);
      }
    }

    // bottom
    // if (i + 1 < arr.length && arr[i + 1][j] === X && !getIsPointChecked(arrChecked, i + 1, j)) {
    //   arrChecked.push([i + 1, j]);
    //   count += findSiblingsAndCountX(i + 1, j);
    // }

    if (i + 1 < arr.length && arr[i + 1][j] === X) {
      perimeter -= 1;
      if (!getIsPointChecked(arrChecked, i + 1, j)) {
        arrChecked.push([i + 1, j]);
        perimeter += findSiblingsAndCountX(i + 1, j);
      }
    }

    // return count + 1;
    return perimeter;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (getIsPointChecked(arrChecked, i, j)) continue;
      arrChecked.push([i, j]);

      if (arr[i][j] !== X) continue;

      //   console.log('X');

      //   const countX = findSiblingsAndCountX(i, j);
      const perimeter = findSiblingsAndCountX(i, j);
      //   console.log(countX);
      //   const perimeter = countX * 4 - (countX - 1) * 2;
      totalPerimeter += perimeter;
    }
  }

  return `Total land perimeter: ${totalPerimeter}`;
}

console.log(
  landPerimeter([
    'OXOOOX',
    'OXOXOO',
    'XXOOOX',
    'OXXXOO',
    'OOXOOX',
    'OXOOOO',
    'OOXOOX',
    'OOXOOO',
    'OXOOOO',
    'OXOOXX',
  ]),
);
console.log(landPerimeter(['XOOO', 'XOXO', 'XOXO', 'OOXX', 'OOOO']));
console.log(landPerimeter(['XOOXO', 'XOOXO', 'OOOXO', 'XXOXO', 'OXOOO']));
console.log(landPerimeter(['XXXXXOOO', 'OOXOOOOO', 'OOOOOOXO', 'XXXOOOXO', 'OXOXXOOX']));
console.log(
  landPerimeter(['XOOOXOO', 'OXOOOOO', 'XOXOXOO', 'OXOXXOO', 'OOOOOXX', 'OOOXOXX', 'XXXXOXO']),
);
console.log(landPerimeter(['OOOOXO', 'XOXOOX', 'XXOXOX', 'XOXOOO', 'OOOOOO', 'OOOXOO', 'OOXXOO']));
