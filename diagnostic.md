## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
$('.container')
$('.js-menu-target')
$('.branch-infobar')
$('.modal-backdrop')


<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$('ol li')
$('body li')
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
 const parent = $(.listerItem).parent()
 parent.siblings('form')
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
Getter Methods.
$('div')
$('body').children()
Setter Methods.
$('div').addClass("myNewClass")
$('body').text("mytext")
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM is a seperate entity from the html/css. It represents the html and css which
lets us manipulate it with javascript. The dom is an api.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
The html and css documents
Source code
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
 $('li').parents('body').hide()
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->

<!-- your answer ends here -->
