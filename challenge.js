'use strict';

/** QUESTION 1
 *
 *	In plain English, how would you add a new HTML element
 *		to a web page without refreshing it?
 *
 *	Answer below.
 */

// ANSWER
If I was doing this on-the-fly *just* to test the immediate effect of adding a new div element as the first child element of the body on a web page without refreshing it, I would type the following in the console:

var body = document.getElementsByTagName('body');
body.document.createElement('div');

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
In semantic terms, E is a descendant of A. Meaning, E is a grandchild of A, because E is nested inside D, which is a sibling of C, which is a child of A.
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
A > D > E {
  [ property: attribute; pair here]
}
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
var body = document.getElementsByTagName('body');
var div = body.document.createElement('div');
var p = body.document.createElement('p');
div.appendChild(p);
// END ANSWER
