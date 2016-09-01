## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
pjax-loader-bar
accessibility-aid
ajax-error-message flash flash-error
container clearfix

<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
.find(li)
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
Two setter methods are .html() and .find()
Two getter methods are .val() and .on()
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The Direct Object Model, otherwise known as the DOM, is a standard programming API
that displays HTML in a tree-like structure, allowing documents to be easily
accessed and manipulated.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
The nodes in the DOM do not represent data structure, but rather objects that have
a function and a specific identity.
The DOM does not specify how objects may be represented in HTML, instead it
specifies how HTML documents are represented as objects.
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

<!-- your answer starts here -->
.(hide)
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
<div id="target">
  Click here
</div>
$( "#target" ).click(function() {
<!-- your answer ends here -->
