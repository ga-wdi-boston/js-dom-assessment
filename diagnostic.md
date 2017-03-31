## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
$("js-repo-pjax-container")
$(".edit-link")
$("js-flash-container")
$(".file-wrap")
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$("html.body.ol.*")
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$("li.parent.grandparent.child.form")
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
$('input:text').val(function() {return this.defaultValue;});
$('input:text').val();
$('input:text').html("This is a setter");
$('input:text').html();
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM is a tree like structure where all the items that appear on a web page
each have a place on the tree.  The top node being the 'document'. From here
we can branch out into many branches with each branch having additional branches.
It resides in memory unlike HTML which is a text file used to create the DOM.

<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
That the DOM and HTML are the same.  The DOM parses the HTML and creates an object
model that represents the HTML.

HTML is a text document while the DOM is a memory object that represents the tree
that the HTML describes.
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
$("li.parent.grandparent").hide()
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$( "div" ).click(function() {
  alert( "Handler for .click() called." );
});
<!-- your answer ends here -->
