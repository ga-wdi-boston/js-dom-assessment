## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

$('.facebox')
$('#ajax-error-message')
$('.js-flash-container')
$('#start-of-content')

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

$('li');
$('OL li');

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

$('.listerItem').grandparent().nth-child(2);

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

attr();
val();
text();
html();


## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

The DOM is the document object model, which is not an actual file but the result of a browser's sorting of all of the html/css and javascript's programming effect on it.

## Question 6

Please give two examples of things that are commonly confused for the DOM.

inspect elements and view source

## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

$('li').grandparent().hide();

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->

<!-- your answer ends here -->
