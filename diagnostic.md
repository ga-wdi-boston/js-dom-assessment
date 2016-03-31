## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
$(".header header-logged-in true").find("").first()
$(".container clearfix").find("").first()


<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$("#LI").find("")
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
not sure
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->

getters -
$( '#header' );
$( 'li' );

setters -
$( document.body.children[0] );
$( [ window, document ] );

<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
the DOM is a document object model - it's like a tree with a trunk, branches, sub branches and leaves.

by selecting branches or leaves and applying javascript, you can manipulate them on the browser.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
the HTML and javascript

<!-- your answer ends here -->

## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

<!-- your answer starts here -->
not sure.
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$( "#header-search scoped-search site-scoped-search js-site-search" ).click(function() {
  alert( "Handler for .click() called." );
});

<!-- your answer ends here -->
