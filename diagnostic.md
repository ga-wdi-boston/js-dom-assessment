## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
#start-of-content
.position-relative
#ajax-error-message
.logged-in
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$("ol > li")
$("ol li")
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$("ol li").parent().siblings("form")
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
Setter: $("li").text() = "hi", $("li").html() = "<p>hi</p>"
Getter: $("li").text(), $("li").html()
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM (Document Object Model) is an interface for HTML documents that
represents the current status of the website as a tree-like structure. This
tree-like structure allows you to easily navigate through the different
elements, retrieve content, and manipulate the structure itself.
The browser parses through your HTML code and creates the DOM, which can be
visually viewed through the browser inspector tools.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
The DOM is not your HTML code that you wrote and is also not the code you see
in the source code viewed from the browser's "view source" feature.
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
Assuming we use the diagram on the gitHub repo to answer this question,
$("ol li").parent().parent().hide()
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$("div").on("click", function)
<!-- your answer ends here -->
