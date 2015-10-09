'use strict';

/** QUESTION 1
 *
 *	In plain English, how would you add a new HTML element
 *		to a web page without refreshing it?
 *
 *	Answer below.
 */

// ANSWER

You would run a JS function that calls the document.createElement() method.

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
<a>
  <b>
  <c>
  <d>
    <e>

    E is a child of D, which in turn is a child of A. In laymans terms, E is a grand child of A.

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

<body class='a'>
  <div class='b'>
  <div class='c'>
  <div class='d'>
    <p class='e'>

Selector:

Specific class selector:
.e {

}

Or you could call a less specific element selector since it is the only <p>

p {

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

"http://www.w3schools.com/jsref/met_node_appendchild.asp"

// END ANSWER
