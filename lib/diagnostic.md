## Question 1

Using `inspect element`, write four selectors found on the main page for this GitHub repo.

<!-- your answer starts here -->
id, class, prefix and role.
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file (also in the `assets` folder), what are two ways
you could return ALL list items (`li`) using jQuery? This is intentionally vague. (Assume starting at the `OL` DOM node).

<!-- your answer starts here -->
.children and .find
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to the `form`
DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$('listerItem').parent $('orderedList').next
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter methods.

<!-- your answer starts here -->
.find() and .parent() are getters .html('set this'), and .text('set text') are setters
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM is a set of conventions for implementing html on the web. It has APIs in browsers to correct some basic coding mistakes so that the browsera know what to show when the code is wrong.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
The DOM is not the source code, it is not a language.
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

<!-- your answer starts here -->
&('listerItem').grandparent $( "form" ).hide();
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$('div').click(function() {
    console.log( "You clicked a div!" );
});
<!-- your answer ends here -->
