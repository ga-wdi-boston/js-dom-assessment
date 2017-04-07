## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
I'm not sure what the question is asking.  Do you want code to select four
different elements using jQuery?  When I type $() in the console, I get "$ is not
a function" - does this mean that jQuery is not loaded? I see that window.jQuery
is "undefined." Maybe I missed how to load it into a page.  Maybe I haven't had
enough coffee.
$(".container")
$("div")
$("#facebox")
$(".js-touch-events")

<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$("ol").find("li")

<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$(".listerItem").parent().next("form")

<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
$().html() - getter
$().html("foo") setter

<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The document object model which is a tree respresentation of the web page elements.

<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
html source code

<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
$("li").parents("body").hide()

<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$(".div").on("click", function() {
   // action associated with clicking
}

<!-- your answer ends here -->
