## Question 1

Using `inspect element`, write four selectors found on the main page for this GitHub repo.

<!-- your answer starts here -->
```html
#js-repo-pjax-container
#ajax-error-message
#js-flash-container
#start-of-content
```
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file (also in the `assets` folder), what are two ways
you could return ALL list items (`li`) using jQuery? This is intentionally vague. (Assume starting at the `OL` DOM node).

<!-- your answer starts here -->
```html
$("ol").children("li");
```
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to the `form`
DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
```html
$("li.listerItem").siblings("FORM");
```
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter methods.

<!-- your answer starts here -->
Getters: .val(); .find;
Setters: .html('someHTMLstring'); .val(someValue);
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
It is an object representing the structure of the content of a web page
in the form of a tree. It is neither the original HTML from the server
nor is it the rendered web page itself. Rather, it is somewhere in between, and
is used by the browser to render the web page. It can be manipulated by jQuery,
and thus may be different from the original HTML received from the server
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
(1) The original HTML sent by the server, and (2) the rendered web page itself.
The DOM is neither of these.
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

<!-- your answer starts here -->
```html
$('li.listerItem').parent().parent().hide();
```
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
'''html
$('div').on('click', function(){
  console.log('You clicked!');
});
'''
<!-- your answer ends here -->
