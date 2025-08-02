# 📘 JavaScript Basics: Variables, Data Types, and Basic Operations

## 📝 Topic Summary

### 1. Variables

Variables store data values. In JavaScript, you can declare them using:

| Keyword | Scope         | Reassignment | Notes                                |
|---------|---------------|--------------|--------------------------------------|
| `let`   | Block-scoped  | ✅ Yes       | Preferred for variables that change  |
| `const` | Block-scoped  | ❌ No        | Use for constants                    |
| `var`   | Function-scoped| ✅ Yes       | ⚠️ Avoid in modern JS                |

---

### 2. Data Types

| Type       | Example                              |
|------------|--------------------------------------|
| **Number** | `let age = 25;`                      |
| **String** | `let name = "Alice";`                |
| **Boolean**| `let isActive = true;`               |
| **Null**   | `let user = null;`                   |
| **Undefined** | `let result;`                     |
| **Object** | `let person = { name: "Bob" };`      |
| **Array**  | `let colors = ["red", "green"];`     |
| **Symbol** | `let id = Symbol("unique");` *(rare)*|

---

### 3. Basic Operations

- **Arithmetic**: `+`, `-`, `*`, `/`, `%`  
- **String Concatenation**: Using `+` to join strings  
- **Assignment**: `=`
- **Comparison Operators**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`

---

## 📌 Syntax Examples

```js
let score = 10;           // Number
const username = "Zoe";   // String
let isMember = false;     // Boolean
let nothing = null;       // Null
let notSet;               // Undefined

// Arithmetic
let sum = 5 + 7;          // 12
let doubled = sum * 2;    // 24

// String Concatenation
let greeting = "Hi, " + username + "!";  // "Hi, Zoe!"
