## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
#js-repo-pjax-container, .repository-content, #js-flash-container, .gr__github_com
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$("li").each() ? 
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
html() - to get or set the HTML content.
text() - to get or set plain text content.
val() - to get or set form field values.
attr() - get or set values on HTML attributes.

The difference between "get" and "set" is this:

$( "h1" ).html( "hello world" );  this sets all h1 elements to "hello world"
$( "h1" ).html();  this gets the html of the first element
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM is a model of the html of a page that represents all elements of the page as nodes
on a "tree". It resembles a family tree, as nested elements are "children" nodes
of the "parents" nodes they're nested under.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
The HTML you write is not the DOM.
When you "view source" you're not looking at the DOM
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
$("li").hide("body")
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$("div")on.(click, _____)
<!-- your answer ends here -->
