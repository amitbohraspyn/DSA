function reverseString(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    console.log("not good");
  }
  var outlist = [];
  for (i = str.length - 1; i >= 0; i--) {
    outlist.push(str[i]);
  }
  return outlist.join("");
}

console.log(reverseString("amit bohra"));
