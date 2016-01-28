## Question 1

Using `inspect element`, write four selectors found on the main page for this GitHub repo.

<!-- your answer starts here -->
```
<div class="facebox" id="facebox">
<div class='header header logged in true>
<div id='start-of-content' class='accessability-aid'>
<div id='js-flash-container'>
```
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file (also in the `assets` folder), what are two ways
you could return ALL list items (`li`) using jQuery? This is intentionally vague. (Assume starting at the `OL` DOM node).

<!-- your answer starts here -->
```
$('ol').children(); // moves down one level to find elements
$('ol').find();     // can move down multiple level to find elements
```
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to the `form`
DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->

<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter methods.

<!-- your answer starts here -->
    .find() // getter
    .text() // getter
    .text(text) // sets text
    .css(color) // sets color
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM is a programmable interface, that provides a structured representation of the document
that can be accessed to change and interact with the document structure.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
the HTML that you wrote - not the DOM
when you click on view source - not the DOM
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

<!-- your answer starts here -->
```
   $('li').
   ```
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
```
$('div').click(function() {
    alert("clicked!");
});
```
<!-- your answer ends here -->
