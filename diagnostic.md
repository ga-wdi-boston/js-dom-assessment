## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

$('.user-mention')
$('.text-muted')
$('.octicon-tag')
$('.octicon-pulse')

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

$('#OL.children()')
$('#OL.children().#li')


## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

$('.listerItem.parent().form')

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

find() -- getter
children() -- getter
hide() -- setter
position() -- setter


## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

The DOM is an inaccessible portion of code that is built into the browser. It allows you to access certain elements and to change them. This makes your code reactive and not static in the way a page written in solely html or css would be. It allows JS and other languages to interact with your code.

Its a lot like god. Invisible, powerful, yet ever present.

## Question 6

Please give two examples of things that are commonly confused for the DOM.

The development tools in your browser and your actual css and html code.

## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

$('#li.parent().parent().hide())


## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

$('#div').on('click', function(){
});
