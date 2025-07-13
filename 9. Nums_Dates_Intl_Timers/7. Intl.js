"use strict";

// The Internationalization API (Intl)

/* ==============================================
   IMPORTANT NOTES ABOUT Intl API
   ----------------------------------------------
   1. BUILT-IN STANDARDIZATION:
   - Intl is part of the ECMAScript Internationalization API
   - No external API calls - runs entirely client-side
   - Data comes from the browser/Node.js environment

   2. STRICT OPTIONS HANDLING:
   - Only pre-defined keys are recognized (invalid keys are silently ignored)
   - Only specific values work for each key (invalid values fall back to defaults)
   - All options are CASE-SENSITIVE

   3. RESERVED KEYS & VALID VALUES:
   (Must use exactly these spellings)
   
   Key           | Valid Values
   --------------|--------------------------------
   weekday       | 'long', 'short', 'narrow'
   year          | 'numeric', '2-digit'
   month         | 'numeric', '2-digit', 'long', 
                 | 'short', 'narrow'
   day           | 'numeric', '2-digit'
   hour          | 'numeric', '2-digit'
   minute        | 'numeric', '2-digit' 
   second        | 'numeric', '2-digit'
   hour12        | true, false
   timeZoneName  | 'short', 'long'
   dateStyle     | 'full', 'long', 'medium', 'short'
   timeStyle     | 'full', 'long', 'medium', 'short'

   4. DEFAULT BEHAVIOR:
   - Missing options → sensible locale defaults
   - Invalid values → fallback to 'numeric'/'short'
   - No errors thrown for bad inputs (fails silently)

   5. PERFORMANCE TIP:
   - Construct formatters ONCE and reuse them
   - Creating new Intl objects is expensive:
     ✅ Good: const formatter = new Intl...(); reuse
     ❌ Bad: new Intl...() inside loops
   ============================================== */

// ######### Intl.DateTimeFormat ############
// For formatting dates and times
console.log(new Intl.DateTimeFormat("hi-IN").format(new Date()));
console.log(new Intl.DateTimeFormat("pt-PT").format(new Date()));

const options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  day: "numeric",
  month: "numeric",
  weekday: "long",
};
console.log(new Intl.DateTimeFormat("en-IN", options).format(new Date()));

// ########### Intl.NumberFormat #############
// For formatting numbers and currencies
const amount = 5492390.24;

// Basic Number formatting
console.log(`in Rupees: ${new Intl.NumberFormat("en-IN").format(amount)}`);

// Currency formatting
const currencyOptions = {
  style: "currency",
  currency: "INR",
};
console.log(new Intl.NumberFormat("en-IN", currencyOptions).format(amount));

// ------or-----
console.log(
  `in britsh pound: ${new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GBP",
  }).format(49494200)}`
);

console.log(
  `browser: ${new Intl.NumberFormat(navigator.language).format(3595002)}`
);
