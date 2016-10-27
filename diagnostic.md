## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

$('a')
$('h3')
$('img')
$('p')


## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

$('ol').children();
$('li').siblings();

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

$('.listerItem').parentUtil('form');

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

Getter methods -
.css() - Returns the css property of the selected node.
.html() - Returns the html tag of the selected node.

Setter methods -
.text() - When passed a parameter, it sets the parameter text to the selected
          node.
.css() - When passed a parameter, it sets the parameter css property to the
         selected node.


## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

DOM, or Document Object Model is a visual representation of the HTML page.
It is useful for accessing and manupulating the nodes using javascript.


## Question 6

Please give two examples of things that are commonly confused for the DOM.

DOM is not the visual code
It is not the HTML although it looks like HTML?


## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

$('li').parents().hide();

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

$('div').on(click, function() {

});
