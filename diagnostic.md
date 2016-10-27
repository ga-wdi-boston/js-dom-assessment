## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
$('#js-flash-container')
$(".header header-logged-in true")
$('#ajax-error-message')
$('#start-of-content')
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$('li').forEach(e => return e);
or pissibly
let list = $('OL');
for(let item in list)
{
  return item;
}
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$('.listerItem').parent().parent().$('form')
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
getter:
$('someTag').text;
$('someTag').html;

setter:
$('someTag').html('<someHTML>Words</someHTML>');
$('someTag').append('some words');

<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM, or Document Object Model, is the interpretation of html, css, javascript, etc, made by a web browser. The contents of the DOM can be viewed, more or less, using a browser's dev tools.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
The html written by the developer and the page source code are often confused with the DOM. However, since they have not yet reached their final state as interpreted by a browser they are not the sum of what will be the DOM.
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
$('li').parent().parent().hide();
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$('div').on('click', registerClick());
<!-- your answer ends here -->
