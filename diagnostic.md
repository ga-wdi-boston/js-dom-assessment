## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

$(".logged-in");
$("#start-of-content");
$("#js-repo-pjax-container");
$(".container");

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

$("li");
$("ol").children("#listeritem");

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

$("#listerItem").prev().next("form");

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

Getters: .text(), .css()
Setters: .text(parameters), .css(parameters)

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

The DOM is a standard for representing and interacting with HTML and other documents. It is traversable due to its tree structure (we can move up and down the branches of the tree to nodes and move to any connecting nodes). The DOM can be modifed by javascript and the browser, e.g., the browser can fix simple errors in your HTML, modify the DOM, then output a representation of the DOM to your browser window. The DOM is not something you interacting with directly.

## Question 6

Please give two examples of things that are commonly confused for the DOM.

1. The HTML you write in your html files.
2. The HTML you see when you view the source of a web site.

## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

$("#listerItem").parent().parent().hide();

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

$("div").on('click',() => console.log('clickyclicky'));
