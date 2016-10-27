## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
I know how to use 'inspect element' in the dev tools but I don't know what
"write four selectors" means.

Do I just write 4 different html tags I found on the page?

<p>, <a>, <h1>, <pre>
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$('OL').children();

or

$('OL').find('li');
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$('#listerItem').parent().parent().find('form');
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
GETTER: .find() .parent()
SETTER: .on() .append()
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM is a heirarchy of elements. The top element is the HTML element, and
everything else is a child of it, for example, the most common children of
the HTML node are head and body. Head and body also have common children, such
as title, div, p, aside, etc.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
HTML text
The view finder.
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
const traverse = function () {
  return $('li').parent.parent.hide();
};
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$().find('div').on('click', function(){})
<!-- your answer ends here -->
