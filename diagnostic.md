## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

$('OL')
$('li')
$('H1')
$('Body')


## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

$('OL > li')
$('li')

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

($'li').parent().parent('Form')

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

Getters css() and html()
Setters val() and text()

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

The DOM is a representation of the document (source code) in a tree format.

## Question 6

Please give two examples of things that are commonly confused for the DOM.

html
source code

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

$('li').parent().parent().hide()

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

$('div').on('click', function())
