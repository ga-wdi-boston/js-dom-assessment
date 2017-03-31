## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->

$("#start-of-content")

$("#js-repo-pjax-container")

$(".repository-content")

$(".overall-summary")

<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->

1.) You could use the class or id assigned to <li> as your selector.
2.) You could use the class or id assigned to <ol> as your selector.

You could also do the following:

$("li")
or
$("ol")

<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$(.listerItem "li").find("form")
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
Getter:
$('selector').find()
$('selector').text()

Setter:
$('selector').append()
$('selector').prepend()


<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->

The DOM is a tree like representation of your HTML that is created by your browser when it parses and renders it.  Each node  in the DOM is an object that represents part of the document.

<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->

1.) Source
2.) Rendered page

<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
$("li").hide()
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->

$("div").on("click", function() {

})

<!-- your answer ends here -->
