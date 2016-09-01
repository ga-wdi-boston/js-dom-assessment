## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
I don't see "selectors" (as in jQuery actually selecting anything) because the
elements are shown as HTML, but if I were to try to select some elements on the
page, I would use:
- $(#facebox);
- $(.container);
- $(div);
- $(.pagehead);
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$("li");
$("ol > li");
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$("li.listerItem").parent().parent().children("form");
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
Getters:
- .html()
- .val()

Setters:
- .html("Text")
- .val("Text")
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM is the document object model. It is a tree structure that is used to
create the render tree. The render tree is used to display/paint the page. The
DOM is not the source code/HTML file, as it is possible (and often likely) that
what is shown on the page is not the same as what is written in the HTML file.
The nodes of the DOM can be used to access elements and change them with
Javascript.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
HTML file
View source
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

<!-- your answer starts here -->
$("li.listerItem").parent().parent().hide();
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$("div").on("click", clickHandlerFunction);
<!-- your answer ends here -->
