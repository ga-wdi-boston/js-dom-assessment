## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
$('.markdown-body')
$('.readme')
$('body')
$('a')

<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$('li')
$('li').parent()
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$('listerItem').parent().find('form');
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

.find()
.parent()

Setters :

.append()
.prepend()

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->

the DOM is the tree-like layout of the HTML elements on a page.  it can be selected and acted upon with jQuery.

<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
HTML code itself
being on a website and viewing the source code of the website itself
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
$(() => {	
 -  $('div').on('click', Register);
  });
<!-- your answer ends here -->
