# 🔄 Conditional Statements & Loops

This topic covers how JavaScript makes decisions and repeats actions using **conditionals** and **loops** — essential tools for building logic and control flow in any program.

---

## 📘 Topic Summary

### ✅ 1. Conditional Statements

Conditional logic helps your code make decisions and run specific blocks of code depending on conditions.

#### 🔹 `if / else if / else`
```js
if (condition) {
  // runs if condition is true
} else if (anotherCondition) {
  // runs if the above condition is false but this one is true
} else {
  // fallback if none above matched
}
```

**Example:**
```js
let age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

#### 🔹 Ternary Operator
A shorter way to write `if-else`.

```js
let msg = age >= 18 ? "Adult" : "Minor";
```

#### 🔹 Switch Statement
Useful when checking a variable against multiple values.

```js
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Red");
    break;
  case "banana":
    console.log("Yellow");
    break;
  default:
    console.log("Unknown");
}
```

---

### 🔁 2. Loops

Loops are used to repeat actions multiple times.

#### 🔹 `for` loop
Best when you know how many times to repeat.
```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

#### 🔹 `while` loop
Repeats *while* the condition is true.
```js
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

#### 🔹 `do...while` loop
Runs at least once, then checks the condition.
```js
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);
```

#### 🔹 `for...of` loop
Used to iterate over **arrays**, **strings**, etc.
```js
for (let char of "JS") {
  console.log(char);
}
```

#### 🔹 `for...in` loop
Used to iterate over **object keys**.
```js
const obj = { a: 1, b: 2 };

for (let key in obj) {
  console.log(key, obj[key]);
}
```

---

## ⚠️ Edge Cases / Tips

- 🔁 Avoid infinite loops like `while (true)` unless needed (and always with a `break`).
- 🔁 Check for **off-by-one errors**, especially with array lengths.
- 🔁 Nesting `if` inside loops is very common in real-world logic.
- 🛑 Use `break` to exit a loop early, and `continue` to skip to the next iteration.

---

> ✅ Mastering conditionals and loops is a key part of writing real-world logic in JavaScript. Practice combining them to build interactive and dynamic applications!
