## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
$('#js-repo-pjax-container')
$('#start-of-content')
$('.comtainer-site-footer-container')
$('.facebox')
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$('li') is one
$('ol > li') is another
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$('li').parent().next()
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
Getter methods

$('.someClass').html()
While <em title ="Jon">
$('em').attr('title') returns "Jon"

Setter methods
$('.someClass').html('<p>SomeHtml</p>')
$('em').attr('title','Boom!')
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM is a tree representation of the webpage you are looking at.  It starts with the window/document and a whole and moves through your source code.  It can be traversed like a tree.  Although it contains source code, it is not identical because it has global objects.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
Source code html and view/inspect elements in chrome can be confused for the DOM.
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
$('li').parent().parent().hide()
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$('div').on('click',someFucntion)
<!-- your answer ends here -->
