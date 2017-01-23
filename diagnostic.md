## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
These are four selectors and their ID's or CLASS names.
  body, with a class of "logged-in"
  div, with an id of "js-pjax-loader-bar"
  a button, with a class of "flash-close js-flash-close js-ajax-error-dismiss"
  an unordered list, with a class of "pagehead-actions"
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$('ol').find('li').get();

$('ol').find('li').each();

<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$('listerItem').end()

NOTE: couldn't figure out what it meant by navigating backwards in the
DOM, tried google for "traversing in jquery" didn't help

<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
using .text() can be used to GET plain text.
using  .html() can be used to get html content.

<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM is like an interface where you can see what is happening with your code
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
the Console and the source code
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->

.find(parameter)
dont understand traverses..

<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->

<!-- your answer ends here -->
