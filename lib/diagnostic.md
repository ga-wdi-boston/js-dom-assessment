## Question 1

Using `inspect element`, write four selectors found on the main page for this GitHub repo.

<!-- your answer starts here -->
#js-repo-pjax-container
#readme
#body
div
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file (also in the `assets` folder), what are two ways
you could return ALL list items (`li`) using jQuery? This is intentionally vague. (Assume starting at the `OL` DOM node).

<!-- your answer starts here -->
$('#ol').children()
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to the `form`
DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$('#li').parent().sibling().last()
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter methods.

<!-- your answer starts here -->
Getter =
.get()
.html()

Setter =
.text('text here')
.val(value)
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?
The DOM is an interface created from HTML, and what your browser uses to render
the page. It can be used to edit a website on your end, without changing the
actual HTML of the page.

<!-- your answer starts here -->

<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
View source and the code displayed in developer tools (just a visual representation).
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

<!-- your answer starts here -->
$('#li').parent().parent().hide()
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$('#div').click(.hide())
<!-- your answer ends here -->
