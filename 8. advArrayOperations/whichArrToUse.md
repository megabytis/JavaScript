```js
// ===== MUTATING ARRAY METHODS =====
// Adding Elements
arr.push(element) // Add to end
arr.unshift(element) // Add to start

// Removing Elements
arr.pop() // Remove from end
arr.shift() // Remove from start
arr.splice(start, count) // Remove from any position

// Other Mutating Methods
arr.reverse() // Reverse order
arr.sort() // Sort elements
arr.fill(value) // Fill with value

// ===== NON-MUTATING METHODS =====
// Transformation
const newArr = arr.map(callback) // Transform each element
const filtered = arr.filter(callback) // Filter elements
const sliced = arr.slice(start, end) // Extract portion

// ES2023+ Immutable Methods
const reversed = arr.toReversed() // Reversed copy
const sorted = arr.toSorted() // Sorted copy
const spliced = arr.toSpliced() // Safe splice
const updated = arr.with(index, val) // Replace element

// Combining Arrays
const combined = arr.concat(arr2) // Join arrays
const flattened = arr.flat(depth) // Flatten nested
const flatMapped = arr.flatMap(cb) // Map + flat

// ===== SEARCHING ARRAYS =====
// By Value
arr.indexOf(value) // First index of value
arr.lastIndexOf(value) // Last index of value
arr.includes(value) // True/false if contains

// By Condition
arr.find(callback) // First matching element
arr.findLast(callback) // Last matching element
arr.findIndex(callback) // Index of first match
arr.findLastIndex(cb) // Index of last match

// ===== TESTING ARRAYS =====
arr.some(callback) // True if any pass test
arr.every(callback) // True if all pass test

// ===== AGGREGATION =====
arr.reduce(callback, initial) // Reduce to single value
arr.join(separator) // Convert to string

// ===== ITERATION =====
arr.forEach(callback) // Loop without return

// ===== SPECIAL ACCESS =====
arr.at(index) // Get element (supports -1)

// ===== ADVANCED TECHNIQUES =====
// Grouping (ES2023+)
const grouped = Object.groupBy(array, item => item.category)

// Array Creation
const seq = Array.from({length:5}, (\_,i)=>i) // [0,1,2,3,4]
const empty = new Array(3) // [empty × 3]

// Unique Values
const unique = [...new Set(array)]

// Array Intersection
const common = arr1.filter(x => arr2.includes(x))

// Matrix Creation
const matrix = Array.from({length:3}, ()=>new Array(3).fill(0))

// ===== BEST PRACTICES =====
// Chain methods for complex operations:
const result = arr
.filter(x => x > 0)
.map(x => x \* 2)
.toSorted()

// Always prefer non-mutating methods for:
// - React state updates
// - Redux reducers
// - Anywhere immutability matters
```
