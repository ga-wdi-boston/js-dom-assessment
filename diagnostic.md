## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
1. div class = "container-site-footer-container"
2. div id = "start-of-content"
3. div id = "js-flash-container"
4. div id = "ajax-error-message"
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
.find(li)
.children(ol)
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
(I wasn't sure about what this question was asking, so I just gave it a guess):
.listerItem {
$(someJqueryHere)
}
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
getters:
1. .html()
2. find
setters:
1. .addClass()
2. .val()
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM, or Document Object Model, is a model of representing an HTML document
that a browser renders. It is represented with a tree diagram that has `nodes`,
(tree  `branches`) that represent each element in the HTML document. We can
access and change these nodes using javascript (`traversing the DOM`).
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
The DOM is NOT your index.html. It is also not a set of data structures.
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
(I know this syntax is wrong...)
$.hide{(#listerItem)
}
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
.click(div)
<!-- your answer ends here -->

FOR ANSWERS: I used google, the MDN, my class notes, fundamentals pre-coursework.
COMFORT: 3
CLARITY: 3
