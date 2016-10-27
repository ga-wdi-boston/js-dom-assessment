## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
$('.header.header-logged-in');
$('div > a');
$('#ajax-error-message');
$('.facebox');
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$('li');
$('ol').children();
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$('li').first().parent().parent().children().last();
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
$(item).val() // Getter
$(item).attr('attribute-name') // Getter
$(item).text('Me text!') // Setter
$(item).html('<p>Your text!?</p>') // Setter
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM is an application interface that is represented by a tree with different
nodes. The DOM provides functionality for programs to interact with a webpage
by selecting different 'elements' (nodes) and various ways to listen for events.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
The HTML of the page. The viewport/web browser.
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
const hideBody = function () {
  let element = $('li').first();
  while (element !== $('body')) {
    element = element.parent();
  }
  element.hide(1000); // Hide over 1 second
}
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$('div').on('click', doStuff);
<!-- your answer ends here -->
