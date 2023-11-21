const X = 'X';

function getIsPointChecked(arr, i, j) {
  return arr.some(item => item[0] === i && item[1] === j);
}

function landPerimeter(arr) {
  let totalPerimeter = 0;

  const arrChecked = [];

  function findSiblingsAndCountX(i, j) {
    let perimeter = 4;

    if (j - 1 >= 0 && arr[i][j - 1] === X) {
      perimeter -= 1;
      if (!getIsPointChecked(arrChecked, i, j - 1)) {
        arrChecked.push([i, j - 1]);
        perimeter += findSiblingsAndCountX(i, j - 1);
      }
    }

    if (i - 1 >= 0 && arr[i - 1][j] === X) {
      perimeter -= 1;
      if (!getIsPointChecked(arrChecked, i - 1, j)) {
        arrChecked.push([i - 1, j]);
        perimeter += findSiblingsAndCountX(i - 1, j);
      }
    }

    if (j + 1 < arr[i].length && arr[i][j + 1] === X) {
      perimeter -= 1;
      if (!getIsPointChecked(arrChecked, i, j + 1)) {
        arrChecked.push([i, j + 1]);
        perimeter += findSiblingsAndCountX(i, j + 1);
      }
    }

    if (i + 1 < arr.length && arr[i + 1][j] === X) {
      perimeter -= 1;
      if (!getIsPointChecked(arrChecked, i + 1, j)) {
        arrChecked.push([i + 1, j]);
        perimeter += findSiblingsAndCountX(i + 1, j);
      }
    }

    return perimeter;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (getIsPointChecked(arrChecked, i, j)) continue;
      arrChecked.push([i, j]);

      if (arr[i][j] !== X) continue;

      const perimeter = findSiblingsAndCountX(i, j);
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
