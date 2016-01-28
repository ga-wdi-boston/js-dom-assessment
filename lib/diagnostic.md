## Question 1

Using `inspect element`, write four selectors found on the main page for this GitHub repo.

<!-- your answer starts here -->
a#raw-url.btn.btn-sm
div.branch-infobar
a.user-mention
a.muted-link
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file (also in the `assets` folder), what are two ways
you could return ALL list items (`li`) using jQuery? This is intentionally vague. (Assume starting at the `OL` DOM node).

// ***I'm assuming that h1 and form are sublings of ol, not children***
<!-- your answer starts here -->
```$('ol').children();
$('ol').find();```
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to the `form`
DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
```$('li.listerItem').parent().siblings('form')```
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter methods.

<!-- your answer starts here -->
getter: .val(), .text()
setter: .val(value), .append()
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM is an abstraction of HTML code which turns the HTML into a structure of
nodes and objects, each with properties and methods. It allows javascript and
jQuery (and probably other languages/libraries) to act on the HTML elements
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
1. HTML code
2. the render tree
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

<!-- your answer starts here -->
```$('#lister').parents('body').hide();```
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
```$('div').on('click', function {...} )```
<!-- your answer ends here -->
