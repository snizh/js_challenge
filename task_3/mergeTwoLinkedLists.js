//  Примечание
// `l1` и `l2` не массив, вы не можете получить доступ к элементу по индексу `l1[0]`. 
// Это Линейный связный список – https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D1%8F%D0%B7%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA

// `l1, l2` это `ListNode` и  имеет  только `.x` и `.next`. Декларация обьекта ниже. Вы не можете вносить изменения в объект.
function ListNode(x) {
  this.value = x;
  this.next = null;
}


function mergeTwoLinkedLists(l1, l2) {
  const pickSmallest = (bothLists) => {
    let sm;

    if (!bothLists.l2 || bothLists.l1 && bothLists.l1.value <= bothLists.l2.value) {
      sm = bothLists.l1;
      bothLists.l1 = bothLists.l1.next;
    } else {
      sm = bothLists.l2;
      bothLists.l2 = bothLists.l2.next;
    };

    return sm;
  };

  let lists = { l1, l2 };
  const head = pickSmallest(lists);

  let tail = head;

  while (lists.l1 || lists.l2) {
    tail.next = pickSmallest(lists);
    tail = tail.next;
  }

  return head; 
}

function createList(arr) {
  const node = new ListNode(arr[0]);
 
  if (arr.length > 1) {
    node.next = createList(arr.slice(1), node)
  };
  
  return node;
}

function mergeTwoLinkedListsSpec() {
  console.log(JSON.stringify(mergeTwoLinkedLists(createList([1, 2, 3]), createList([4, 5, 6])), null, 4));
  console.log(JSON.stringify(mergeTwoLinkedLists(createList([5,10,15,40]), createList([2,3,20])), null, 4));
}

mergeTwoLinkedListsSpec();