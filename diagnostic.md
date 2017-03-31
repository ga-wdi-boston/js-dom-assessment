## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
.modal-backdrop {

}
.container{

}
.branch-infobar {

}
.file-wrap{

}
The above are all classes for div tags I found on the page
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$('.classNameOfOL').children


$('ol').children
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$('.listenerItem').find('form')
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
.attr() can get and set depending on the number of arguments - 1 argument is a getter
2 arguments makes it a setter

.css() same as above both a getter and setter 1 argument is getter 2 is a setter
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM is a representation of the current webpage in memory. This is a
mechanism that allows for manipulation of single portions of the page without
the entire page having to be sent back.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
Source code - this is the base code that is written and is what is ultimately
loaded into memory to create the DOM

Javascript - again, just code interacting with the DOM but not the DOM itself
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
$('li').parent('body').hide
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$('div').on('click', someFunction)
<!-- your answer ends here -->
