## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
span
.commit-author-section
.text-gray
.float-right
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$('ol').children();
$('li');
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$('.listerItem').parent().parent().child('Form');
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
Getter Methods:
1. Using .text() with empty parenthesis: $('h1').text();
2. Use .val() with empthy parenthesis: $('#searchBar').val();

Setter Methods:
1. Using .text() with contents in the parenthesis: $('h1').text('New H1');
2. Use .val() with contents in the parenthesis: $('#searchBar').val("New search");
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM (Document Object Model) is basically a tree-like map of your HTML where
each element is a separate node.  The DOM can be traversed/searched/modified by
JavaScript and jQuery.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
1. HTML
2. View Source
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
I'm assuming we're supposed to be using the diagram in the readme again.
$('li').parent().parent().hide();
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$('div').on('click', function() {
  alert("You clicked a div!");
});
<!-- your answer ends here -->
