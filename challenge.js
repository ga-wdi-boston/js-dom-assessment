'use strict';

/** QUESTION 1
 *
 *	In plain English, how would you add a new HTML element
 *		to a web page without refreshing it?
 *
 *	Answer below.
 */

// ANSWER
//I would inspect element within the browser, and open up the console tab. Then using javascript, I would identify a parent element name using it's ID; then add a new element under that parent, much the same way you would add a new attribute to an object in JS.

// END ANSWER

/** QUESTION 2
 *
 *	We have 5 HTML elements, A, B, C, D, and E.
 *
 *	B, C, and D are siblings.
 *	C is a child of A.
 *	E is a child of D.
 *
 *	Describe E's relationship to A.
 *
 *	Answer below.
 */

// ANSWER
//E is a second generation descendent of A. A is the parent node of D, and D is the parent node of E.

// END ANSWER

/** QUESTION 3
 *
 *	Using the same HTML elements as above...
 *
 *	Suppose A is the body element, B, C, and D are all divs,
 *		and E is a p.
 *
 *	Write a CSS selector that can be used to retrieve E from the DOM.
 *
 *	Answer below.
 */

// ANSWER
<body id ="a">
  <div id ="d">
    <p1 id="e"></p>
  </div>
</body>

document.getElementbyId("e");

// END ANSWER

/** QUESTION 4
 *
 *	Suppose you want to attach an element to the DOM as a child
 *		to an element you have a reference for in JavaScript.
 *
 *	Use Google to search MDN for the appropriate method you can
 *		use to achieve this.
 *
 *	Paste the URL of the MDN page below.
 */

// ANSWER
https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
// END ANSWER
