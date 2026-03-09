function tagFunction(array, ...args) {
  console.log(array);
  console.log(args);
}

test("tag function", () => {
  const name = "M Elham Abdussalam";

  tagFunction(`Hello ${name}!, how are you?`);
  tagFunction`Bye ${name}!`;
});

test("tag function sql", () => {
  const name = "Elham";
  const age = 30;

  tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
});
