## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
$("#a.url.fn")
$("#btn.btn-sm.select-menu-button.js-menu-target.css-truncate")
$("#new-discussion-timeline.experiment-repo-nav")
$("#js-repo-pjax-container")
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$('li')
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$( "li.listerItem" ).parent().sibling("form");
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
$("li.listerItem").html is a getter
$("li.listerItem").html("Listed item") is a setter
$("#loginform").text() is a getter
$("button").class("#redbutton") is a setter (I think, maybe I did this wrong?)
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The Document Object Model, a client side recreating of the website built up of
nodes that JS can use to manipulate what the user sees.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
The HTML is not the DOM.
The developer toolset in Chrome is not the DOM
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->

<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.
$("#test").text()
<!-- your answer starts here -->
$("div")
<!-- your answer ends here -->
