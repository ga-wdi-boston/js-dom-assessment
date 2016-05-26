## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
div
h1
ul
a
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$('OL').find('li')

or you could go all the way to the top to ensure that OL is really the parents and add
.parent() befoe 

or
let allListItems = $('li');
$('OL').find(allListItems)

<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$('.listerItem').parent().find('form')
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->

setter:
$('#ajax-error-message').text('New Error')
$('#ajax-error-message').css('color',red)

getter:
$('#ajax-error-message').html()
$('#ajax-input').val();

<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->

Virtual representation of what the browser interperates the combination of html, css, js etc files as.  It is like a network of piping that fills with data/text/styles when it is told to.

<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->

The DOM is neither a source nor a rendered page.

<!-- your answer ends here -->

## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

<!-- your answer starts here -->

$('li').parent().parent().hide();

<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->

$('div').on('click',clickHandler);

<!-- your answer ends here -->
