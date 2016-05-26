## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
Icon, content, js-navigation-item, facebox

<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
One method is to return all 'li' items in the 'ol' parent element, for example
using something like (li.ol).show() and the other would be to use a method
that will automatically return all the descendants of a specified parent element,
for example (.ol).text(), which would return all the descendants including 'li',
'h1', and 'form'.

<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->

<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
Two getter methods are .find() and .show(), two setter methods are .append()
and .prepend().

<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM, or the Document Object Model, is basically a tree that represents how your
HTML code is broken up and organized, which parts relate to which, and can
be manipulated using jQuery.

<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
The raw HTML code is often confused for the DOM as well as the view source.

<!-- your answer ends here -->

## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

<!-- your answer starts here -->

<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$(".div").on('click', clickHandler)
<!-- your answer ends here -->
