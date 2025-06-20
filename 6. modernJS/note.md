Other languages have many Data structure like array, set, map, stack, queue, linkedlist, hash tables ........
but...but...but...

JavaScript had only ARRAY & OBJECTs
--> so, later SET & MAP have added .

###### Data Structures Overview

**_ Sources of Data _**

1. From the program itself: Data written directly in source code (e.g., status messages).
2. From the UI: Data input from the user or data written in DOM (e.g., tasks in todo app).
3. From external sources: Data fetched, for example, from web API (e.g., recipe objects).

Q. How to choose that which DS to use ?

- if there r collection of data (Simple List ?) → use Arrays or Sets
- if Key/Value Pairs -> then use Objects or Maps

**_ Notes _**

- Application Programming Interface (API): The JSON data format is an example of how data is structured when fetched from external sources.
- Keys allow us to describe values: In key-value pairs (e.g., Objects or Maps), keys provide context or metadata about the values they are associated with.

###### ARRAYS VS. SETS AND OBJECTS VS. MAPS

## ARRAYS

- **Example:** `tasks = ['code', 'Eat', 'Code']`  
  // Result: `["Code", 'Eat', 'Code']`
- **Use when:**
  - You need ordered list of values (might contain duplicates)
  - You need to manipulate data

## SETS

- **Example:**
  ```js
  tasks = new Set(['Code', 'Eat', 'Code']);
  ```
  // Result: `["Code", 'Eat']`
- **Use when:**
  - You need to work with unique values
  - High-performance is really important
  - You need to remove duplicates from arrays

---

## OBJECTS

- **Example:**

  ```javascript
  task = {
    task: 'Code',
    date: 'today',
    repeat: true,
  };
  ```

- **Use when:**
  - You need to include functions (methods)
  - Working with JSON (can convert to map)

## MAPS

```js
task = new Map([
  ['task', 'Code'],
  ['date', 'today'],
  [false, 'Start coding!'],
]);
```

- **Use when:**
  - You simply need to map key to values
  - You need keys that are not strings
