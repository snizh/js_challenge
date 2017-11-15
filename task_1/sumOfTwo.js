/**
 * sumOfTwo(array1, array2, x): boolean
 *  определяет, является ли x суммой каких-либо
 *  двух элементов массивов array1 и array2
 */
function sumOfTwo(array1, array2, x) {
  return array1
    .map(v1 => array2.map(v2 => v1 + v2))
    .reduce((r, e) => [...r, ...e], [])
    .includes(x);
}

function sumOfTwoSpec() {
  const a1 = [1, 2, 3, 4, 5];
  const a2 = [100, 200, 300];

  console.assert(sumOfTwo(a1, a2, 103) === true, 'тест 1-0 сломался!');
  console.assert(sumOfTwo(a1, a2, 204) === true, 'тест 1-1 сломался!'); 
  console.assert(sumOfTwo(a1, a2, 302) === true, 'тест 1-2 сломался!'); 
  
  console.assert(sumOfTwo(a1, a2, 107) === false, 'тест 2-0 сломался!');
  console.assert(sumOfTwo(a1, a2, 1) === false, 'тест 2-1 сломался!'); 
  console.assert(sumOfTwo(a1, a2, 306) === false, 'тест 2-1 сломался!'); 
}

sumOfTwoSpec();