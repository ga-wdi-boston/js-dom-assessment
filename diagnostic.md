## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
#start of content
#js-flash-container
.accessibility-aid
.repository-content
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$( "li" ).get()
$("ol").map(function(element){ return element })
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
I'm not sure that I understand the question, but I am answering as if I needed to pass a value from one of the list items to the form.

$("form") = $(".listerItem").get(index)
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
val method
$("#id").val()   <--gets a value
$("#id").val("some words") <--sets a value

html method
$( "div" ).html()  <--gets the html
$( "div" ).html("<div class="someName">Lorem ipsum <a href=#>this is a link</a> some more text</div>")

the above text sets the html.


<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM is the object (web page) that is instanted with all the code files that make
up a web page. Developers can interact with this object to dynamically
change its attributes based on the user's interaction with the page.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->

<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->

<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->

<!-- your answer ends here -->
