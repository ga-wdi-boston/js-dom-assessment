## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
a table row with that would be selected with .js-navigation-item

under that are four <td> cells that have the
.icon
.conten
.message
.age classes

Not sure if this is the answer you were looking for
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$('li').SOMTHING
$('ol > li')
$('ol li')
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
not sure what this question means, do you mean set form equal to li, that would be
somthing like:

$('form').val($('#listerItem'))

OR would it be somthing like this:

$("#listerItem").parent().next().text("puttting somthing in teh form")
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
Getters:

.text()
.val()

Setters:

.text("SOMTHING NEW HERE")
.val("somthing new here")
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
It is the browsers representation of teh code we submit, primarily it structures
the HTML elements in a hierarchial way to visually structure them.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
Our code is not the DOM, the DOM parses our code so it may look similar but it is
different

<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
$("li").parent().parent.hide()
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$("div *").on('click', function(){
  console.log("not sure if the * really will select all children DIVS or do somthign strange!.")
}
)
<!-- your answer ends here -->
