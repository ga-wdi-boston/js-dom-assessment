## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

.header
.js-site-search-form
#start-of-content
.site-footer-container


## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

$('li').[do something]
$('OL').children().[do something]

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

$(''.listerItem').parent().sibling('Form')

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

getter methods
$('.someClass').html()
$('.someClass').css('color')

setter methods
$('.someClass').html('text or html')
$('.someClass').css('color', 'blue')

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

The DOM is the document object model, used to represent the hiearchy of html elements in a webpage, to allow for manipulation of that hierarchy.

## Question 6

Please give two examples of things that are commonly confused for the DOM.

1. The DOM is not the source html
2. The DOM is not the webpage you see in your browser

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

$('li').parent().parent().hide()

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

$('div').children().on('click',function() {
  console.log('clicked children of divs')
}
