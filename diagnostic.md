## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
.text-grey
a.user-mention
img.avatar
article
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
```js
//'starting' at ol
$('ol > li');
$('ol').children();

//other answers that find the li
$('li');
$('body').find('li');
$('body').children('ol').children('li')
```
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$('li').parent().parent().find('form');
$('li').parent().parent().children('form');
$('.listerItem').parent().parent().$('form')
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
```js
//getters
.val()
.html()
.text()
.css('<some property>')
.attr('<some attribute>')

//setters
.val('some text')
.html('some html')
.text('some text')
.css('<some property>', '<some value>')
.attr('<some attribute>', '<some value>')

//this is not a complete list of getters and setters.
```
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM is a recursive tree, represented in the browser by the `document` object.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
html
jQuery objects
source code
document object
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

<!-- your answer starts here -->
```js
$('li').parent().parent().hide();
```
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
```js
  $('div').on('click', () => {

  });
```
<!-- your answer ends here -->
