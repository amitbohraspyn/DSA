const mergeSortedArray = (arr1, arr2) => {
  if (arr1.length === 0) {
    return arr2;
  } else {
    if (arr2.length === 0) {
      return arr1;
    } else {
      var outlist = [];
      var pointer1 = 0;
      var pointer2 = 0;
      console.log("total length ", arr1.length + arr2.length);
      while (true) {
        if (pointer1 === arr1.length) {
          if (pointer2 !== arr2.length) {
            var element2 = arr2[pointer2];
            outlist.push(element2);
            pointer2++;
            continue;
          } else {
            break;
          }
        } else if (pointer2 === arr2.length) {
          if (pointer1 !== arr1.length) {
            var element1 = arr1[pointer1];
            outlist.push(element1);
            pointer1++;
            continue;
          } else {
            break;
          }
        } else {
          var element1 = arr1[pointer1];
          var element2 = arr2[pointer2];
          if (element1 <= element2) {
            outlist.push(element1);
            pointer1++;
          } else {
            outlist.push(element2);
            pointer2++;
          }
        }
      }
      return outlist;
    }
  }
};

const mergedArray = mergeSortedArray([1, 1, 3], [2, 3, 6]);
console.log("mergedArray ", mergedArray);
