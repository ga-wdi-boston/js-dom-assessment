## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

class
id
crossorigin="anonymous"
async="async"

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).



## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->

<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

Example of jQuery getter methods:
var theHeight = $("#example").height();
var str = $("p:first").text();

Example of jQuery setter methods:
$("#example").height(100);
$("p").text("This is demo text.");

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

The DOM interprets HTML and XML and makes it available to other programs so that
they can manipulate it.

## Question 6

Please give two examples of things that are commonly confused for the DOM.

1.HTML

2.A programming language

## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

<!-- your answer starts here -->

<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

if <div id = "divid">

$( "#divid" ).click(function() {
  alert( "Handler for .click() called." );
});
