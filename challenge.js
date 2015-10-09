'use strict';

/** QUESTION 1
 *
 *	In plain English, how would you add a new HTML element
 *		to a web page without refreshing it?
 *
 *	Answer below.
 */

// ANSWER
// To add a new html element to the web page, you could open up the web browser console and add the element through that, rather than having to work through the actual file and saving and refreshing the page.
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
// I'm not completely sure about this, but if B, C, and D are 'siblings' and A is the parent of C while E is the child of D, would A be the 'grandparent' of E?
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
// In the case of needing to refer to it from the DOM, would the parent method need to be used twice in order to reach A from E (.parent().parent())?
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
// To attach an element as a child of an element, you would refer to the element you want to add it to and use the method .appendChild. (element.appendChild(<elementYouWantToAttach>))(?)
// END ANSWER
