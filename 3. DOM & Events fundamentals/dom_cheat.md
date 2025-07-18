███████████████████████████████████████████████████████████████████████
DOM MANIPULATION BRAHMASTRA (v3.0)  
 Everything You'll Ever Need (From Zero to Ninja)  
███████████████████████████████████████████████████████████████████████

■ 1. SELECTORS (Nuke Elements Like Thanos)  
 ► document.querySelector('.class') // First match  
 ► document.querySelectorAll('div') // All matches (NodeList)  
 ► document.getElementById('id') // Old but gold  
 ► document.getElementsByClassName('btn') // Live HTMLCollection  
 ► form.elements // All form controls

■ 2. ELEMENT PROPERTIES (The Real Power Stones)  
 ► el.textContent = 'text' // SAFE text update  
 ► el.innerHTML = '<b>Boom!</b>' // DANGER (XSS risk)  
 ► el.value // Input/Select/Textarea  
 ► el.checked // Checkbox/Radio state  
 ► el.href = 'https://...' // Links  
 ► el.src = 'image.jpg' // Media elements  
 ► el.dataset._ // Access data-_ attributes
 ► el.insertAdjacentElement('option',htmlElement) // to insert an entire HTML code to web via js :)
   // here 'option' can be; 'afterbegin','afterend','beforebegin','beforeend'
   // then, htmlElement means, whatever HTML script we wanna push into webpage through js code


► el.createElement('HTML-tag');
   where 'HTML-tag'can be div, p, article anything...

■ 3. CLASS & STYLE (Make It Pretty)  
 ► el.classList.add('active') // Add class  
 ► el.classList.remove('hidden') // Remove class  
 ► el.classList.toggle('dark-mode') // Toggle class  
 ► el.style.backgroundColor = 'red' // Inline styles  
 ► window.getComputedStyle(el) // Final rendered styles

■ 4. DYNAMIC ELEMENTS (Create/Destroy Worlds)  
 ► document.createElement('div') // Birth an element  
 ► parent.append(el) // Add to end  
 ► parent.prepend(el) // Add to start  
 ► el.cloneNode(true) // Deep clone  
 ► el.remove() // Delete forever
 ► el.before(messege) // places the messege before el
 ► el.after(messege) // places the messege after el

■ 5. EVENTS (Make It Alive)  
 ► el.addEventListener('click', handler) // Attach event  
 ► el.removeEventListener('click', handler) // Detach event  
 ► e.preventDefault() // Stop form submit/page reload  
 ► e.stopPropagation() // Prevent bubbling  
 ► Common Event types:
click, submit, input, change, mouseover, keydown

       Event	    Trigger
      'click'	    Mouse/tap
      'input'	    Typing in text fields
      'submit'	  Form submission
      'keydown'	  Keyboard key press
      'mouseover'	Hovering over element

■ 6. FORM CONTROL (User Data Nuke)  
 ► form.reset() // Clear all fields  
 ► input.focus() // Move cursor to field  
 ► input.blur() // Remove focus  
 ► select.options // Access dropdown options  
 ► textarea.value // Multi-line text

■ 7. TRAVERSING (DOM Navigation)  
 ► el.parentElement // Direct parent  
 ► el.children // Child elements  
 ► el.nextElementSibling // Next sibling  
 ► el.previousElementSibling // Previous sibling  
 ► el.closest('.class') // Nearest ancestor match

■ 8. ATTRIBUTES (Element Metadata)  
 ► el.getAttribute('href') // Get any attribute  
 ► el.setAttribute('target', '\_blank') // Set attribute  
 ► el.hasAttribute('disabled') // Check existence  
 ► el.removeAttribute('title') // Delete attribute

■ 9. SPECIAL WEAPONS (Pro Techniques)  
 // Event Delegation (For dynamic content)  
 parent.addEventListener('click', (e) => {  
 if (e.target.matches('.delete-btn')) {  
 e.target.closest('.item').remove();  
 }  
 });

// Debouncing Input (Performance)  
 let timeout;  
 input.addEventListener('input', () => {  
 clearTimeout(timeout);  
 timeout = setTimeout(() => console.log(input.value), 500);  
 });

███████████████████████████████████████████████████████████████████████  
 WHEN TO USE WHAT (STRATEGY GUIDE)  
███████████████████████████████████████████████████████████████████████

1. 80% of your work:

   - querySelector/querySelectorAll
   - addEventListener + classList
   - textContent/value

2. 15% Advanced:

   - Event delegation
   - Dynamic element creation

3. 5% Niche:
   - getElementsByClassName (legacy)
   - attribute methods (except data-\*)

███████████████████████████████████████████████████████████████████████  
Debugging : - console.dir(el) + Breakpoints in DevTools (F12 → Sources)

xTra help :
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
&
https://developer.mozilla.org/en-US/docs/Web/Events
