let letters = new Set(["a", "d", "e", "a", "d", "b"]);

console.log(letters);
console.log(letters.size);
letters.add("f");
console.log(letters);
console.log(letters.has("b"));
console.log(letters.has("z"));
