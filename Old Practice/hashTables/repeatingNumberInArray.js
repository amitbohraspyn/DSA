const repeatingNumberInArray = (arr, { mode = "firstMatch" } = {}) => {
  if (!arr || arr.length < 2 || typeof arr !== "object") {
    console.log("wrong input");
    return null;
  }
  let hashTable = {};
  let matchNumberList = [];
  for (var i = 0; i < arr.length; i++) {
    if (hashTable[arr[i]] === undefined) {
      hashTable[arr[i]] = i;
    } else {
      matchNumberList.push(arr[i]);
    }
  }
  var minValue = arr.length;
  var minNumber = 1000000000000000;
  for (var i = 0; i < matchNumberList.length; i++) {
    value = hashTable[matchNumberList[i]];
    if (value < minValue) {
      minNumber = matchNumberList[i];
    }
  }
  if (minNumber === 1000000000000000) {
    return null;
  }
  if (mode === "firstMatch") {
    return matchNumberList[0];
  }
  return minNumber;
};

var repeatedNumber = repeatingNumberInArray([2, 5, 5, 2], {
  mode: "firstOccurFirstMatch",
});
var repeatedNumber2 = repeatingNumberInArray([2, 5, 5, 2], {
  mode: "firstMatch",
});
console.log("firstOccurFirstMatch ", repeatedNumber);
console.log("firstMatch ", repeatedNumber2);
