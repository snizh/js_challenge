//  Примечание
// `l1` и `l2` не массив, вы не можете получить доступ к элементу по индексу `l1[0]`. 
// Это Линейный связный список – https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D1%8F%D0%B7%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA

// `l1, l2` это `ListNode` и  имеет  только `.x` и `.next`. Декларация обьекта ниже. Вы не можете вносить изменения в объект.
function ListNode(x) {
  this.value = x;
  this.next = null;
}

/**
 * mergeTwoLinkedLists(l1, l2): list
 *  Возвращает объединенный односвязный список, составленный из элементов
 *  входных списков l1 и l2 с сохранением сортировки.
 *  Изменяет содержимое исходных списков l1 и l2: после выполнения функции
 *  они также ссылаются на результирующий список.
 */
function mergeTwoLinkedLists(l1, l2) {
  const lists = { l1, l2 };

  const popFromList = (key) => {
    const elem = lists[key];
    lists[key] = lists[key].next;
    return elem;
  }

  const pickSmallest = () => {
    if (lists.l1 && lists.l2) {
      if (lists.l1.value <= lists.l2.value) {
        return popFromList('l1');
      } else {
        return popFromList('l2');
      }
    } else if (lists.l1 && !lists.l2) {
      return popFromList('l1');
    } else if (!lists.l1 && lists.l2) {
      return popFromList('l2');
    } else {
      return null
    }
  };

  const head = pickSmallest();
  let tail = head;

  while (tail) {
    tail.next = pickSmallest();
    tail = tail.next;
  }

  return head; 
}

function createList(arr) {
  const node = new ListNode(arr[0]);
  if (arr.length > 1) node.next = createList(arr.slice(1), node);
  return node;
}

function mergeTwoLinkedListsSpec() {
  const l1 = createList([1, 2, 3]);
  const l2 = createList([4, 5, 6]);
  const merged = mergeTwoLinkedLists(l1, l2);
  console.log(JSON.stringify(merged, null, 4));
  console.log(JSON.stringify(merged, null, 4));
  console.log(JSON.stringify(merged, null, 4));
  console.log(JSON.stringify(mergeTwoLinkedLists(createList([5,10,15,40]), createList([2,3,20])), null, 4));
}

mergeTwoLinkedListsSpec();