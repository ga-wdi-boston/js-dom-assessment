## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

div id "js-pjax-loader-bar"
class "pjax-loader-bar"
div id "start-of-content"
div id "ajax-error-message"

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

console.log( $( "li" ).get() );


## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").


## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

.text ()
.html ()

.text ("This is a getter")
.html (<p>"This is a getter!"</p>)

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

DOM is a visual representation of the code that I am writing.

## Question 6

Please give two examples of things that are commonly confused for the DOM.

My code
View source in my browser


## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->

<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

$( "#div" ).click();
