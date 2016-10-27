## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.
<!-- your answer starts here -->
$("repository-content")
$("#start-of-conten't, #js-flash-container")
$("p")
$("p:last")

<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$("li")
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
let str = $("p").text();
$("p").text("set all text to this")
let class = $(.class)
$('.class').addClass('.newclass').removeClass('.class');

<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM is a visual representation of a resource or page that includes the html and any
changes/updates made by the code that interacts with it.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
The DOM is sometimes incorrectly thought of as being the html of a document and
also what you see when you view the source code.
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
$('li').parent();
$(document.body).hide();
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$( "div" ).click(function() ;
<!-- your answer ends here -->
