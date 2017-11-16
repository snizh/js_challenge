/**
 * houseRobber(nums: Array): number
 *  возвращает максимальную возможную сумму
 *  двух НЕ соседних элементов массива.
 */
function houseRobber(nums) {
  return Math.max(...nums
    .reduce((acc, v1, i, arr) => (arr.length > i + 2 ?
      [...acc, v1, ...arr.slice(i + 2).map(v2 => v1 + v2)] :
      [...acc, v1]), []));
}

function houseRobberSpec() {
  console.assert(houseRobber([5, 5, 5]) === 10, 'тест 1 сломался !');
  console.assert(houseRobber([1, 3, 1, 3, 100]) === 103, 'тест 2 сломался !');
}

houseRobberSpec();