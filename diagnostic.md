## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
$(".modal-backdrop")
$("#ajax-error-message")
$(".facebox")
$("#start-of-content")
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$("OL")
$("OL > li")
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$(".listerItem").parent.siblings("form")
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
Getter:
$("img").width
$("ul").html

Setter:
$("p").removeClass("container")
$("li").addClass("newList")

<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM is an API that's in the browser, and it used for coding interactions and changes (e.g. when the user clicks, change the text-color to yellow). It's a large tree-structure-like object that describes the structure of the content.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
1) The HTML you write
2) What you see when you go to 'View Source'
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
let body = $("li").prev.parent()
body.hide()
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$("div").on('click', function(event){
  console.log("event.target is ", event.target);
});
<!-- your answer ends here -->
