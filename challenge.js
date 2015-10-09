'use strict';

/** QUESTION 1
 *
 *	In plain English, how would you add a new HTML element
 *		to a web page without refreshing it?
 *
 *	Answer below.
 */
// ANSWER: In sublime, or another text reader, you'd add the appropriate tag, for example, a new heading tag could be
// <h2>this element</h2>.  You would have to save the html document.  Or if you did have the page open in a browser, you could go to the js console and run something like document.addElement ....

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

// ANSWER E could be a descendent of A, if we are supposed to assume that D comes after C and is a child of C.  But we don't have that information and can't assume that the person creating the stylesheet's understanding of how A, B, C, D, and E should be ordered.

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

// ANSWER  document.getElementById."E"

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

// ANSWER https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

// END ANSWER
