'use strict';

/** QUESTION 1
 *
 *	In plain English, how would you add a new HTML element
 *		to a web page without refreshing it?
 *
 *	Answer below.
 */

// ANSWER
// Use the inspector in the web browser to find the id of the element you want to change. Use the console to alter the style sheet of that element.
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
// E is a child of D which (because it is a sibling of C) is a child of A
// So A is E's great-aunt/uncle in a sense... (just kidding)
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
// document.querySelector("p")
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
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// END ANSWER
