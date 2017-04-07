## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
let headLine = $('h1')
let form = $('Form')
let list = $('Ol')
let listItems = $('li')

<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$( "li" ).each(function( index ) {
  return this
})

return $('OL').children
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
let location = $('.listerItem')
$('location') = location.parent().parent()
$('location') = location.children($('form'))

return $('location')

<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
Setters
$.data('key', value)
$.attr('attributeName', value)

getters
$.attr('attributeName')
$.data('value')

<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The dom is the nexus which allows your javascript code to act upon your HTML and CSS. It is an API which makes mutable webpages possible and without which front end web applications would be functionally impossible.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->

<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
const hideBody = function (){
  target = $('li')
  target = target.parent().parent()
  target = target.hide()
}
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$('div').on('click', console.log($('div').text))
<!-- your answer ends here -->
