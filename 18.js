let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join(" ");
    },
  },
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";
for (const dictionaryKey in dictionary) {
  console.log(dictionaryKey);
}
console.log(dictionary);
console.log(dictionary.toString());
