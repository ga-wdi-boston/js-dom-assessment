## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
body that encompasses all the elements of the page
div class = page head that encomopasses the semantic element of the nav
div class = repository element that holds the repository content
ul class = site footer links that contains the unordered list of the footer
## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$( "ol" ).get() --RAN OUT OF TIME
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
RAN OUT OF TIME
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
$("h1").text() = getter and will display the text
$("h1").text("hello world") = Setter and will set the text
$("p").html() = getter and will display the <p> element
$("p").html("hello world") = getter and will set the content of the <p> element
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM is essentially like a family tree that can be interacted with. It is the way a document is accessed and manipulated. It allows programmers to modify elements or navigate throughout their "tree."
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
knowing the difference between jQuery setters and getters.
Knowing the difference between .html(), .text(), and .val()
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
RAN OUT OF TIME
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$("div").on("click", function {
  console.log("this div has been clicked.")
})
<!-- your answer ends here -->
