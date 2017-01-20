## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

#readme > article > p:nth-child(1) > a > img
#user-content-jquery-dom-diagnostic
#user-content-prerequisites
#readme > article > div

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

$('li > OL > BODY');
$('li');

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

$('#listerItem').appendTo('form');

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

Getter:                             |         Setter:
$('#id');                           |         $('#id').appendTo('#huh');
let $id = $('#id');                 |         $id.appendTo('#huh');

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

The DOM is everything and nothing.It's a dev tool used to manipulate HTML in the
browser. It's the inspect tool.

## Question 6

Please give two examples of things that are commonly confused for the DOM.

HTML and view source

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

$('li').appendTo('body').hide();

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

$('div').on('click', (event) =>{
  // does something
})
