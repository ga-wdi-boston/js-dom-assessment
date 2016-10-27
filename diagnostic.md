## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

.header-logged-in
.site-footer-container
.facebook
.ajax-loader-bar
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

$('ol').find('li');

$('ol').children();

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

$('.listerItem').parent().parent().find('form');


## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->

Getters
.text() - Retrurns the concatenated text contents of all selected elements
.html() - Returns the HTML code inside the first selected element

Setters
.css(<!--css to add-->);
.addClass(<!-- class name in string without "." -->);

<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM is the software object used by the browser to provide scriptability
to HTML documents.  It is a tree like structure containings nodes corresponding
to HTML elements that can be accessed and manipulated by  javascript.
Additionally, it is the API for communicating between user interactions
with the webpage javascript running in the page.  It is not HTML.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
HTML Source Code -
Source code displayed in the browser window when a user views source.
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
```js
$('li').parent().parent().hide();
```
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
```js
$('div').on("click", function(e){
  console.log("You clicked a div!");
  return false;
});
```
<!-- your answer ends here -->
