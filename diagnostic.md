## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
document.querySelectorAll( "h1" );
document.querySelectorAll( "ol" );
document.querySelectorAll( "li" );
document.querySelectorAll( "form" );
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
document.querySelectorAll("li");
$('OL').children();
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$('li').parent().parent().children('Form');
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
attr() - get or set values on HTML attributes.
css() - get or set CSS attributes.
addClass() and removeClass() - for adding and removing classes.
val() - to get or set form field values.
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM serves as a standard model to represent documents. This allows
documents to be programatically manipulated rather than just static pages.
The DOM is leveraged by JavaScript to load dynamically based on the user
and other inputs.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
1. The DOM is not a way of percisting objects to XML nor HTML. The
DOM specifies how XML and HTML documents are represented as objects.
2. The DOM is not a specification for a binary, however, programs written in the
same language will be source code compatible across platforms.
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
$('li').parent().parent().hide();
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$("div").children().on("click", function(){
    alert("The paragraph was clicked.");
});
<!-- your answer ends here -->
