## Question 1

Comfort: 2
Clarity: 2
I used google, and google, and google, because google
Not super comfy with using jquery in dev tools, but I think i understand using it in
html.

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
<div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>
<div id="start-of-content" class="accessibility-aid"></div>
<div class="facebox" id="facebox" style="display:none;">
<div class="container site-footer-container">
Why can't I do $$('css-selectors')? Am I missing a step?
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
var count = $('OL').children();
and then you would call count, I believe.
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$('ListerItem').parent.find().form  ??
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
getters:
$( "h1" ).html();
$('h2').width();
setters:
$( "h1" ).html()( "hello world" );
$('h2').text()('title');

Are these backwards
<!-- your answer ends here -->RUNNING OUT OF TIME!

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->

<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->

<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->

<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->

<!-- your answer ends here -->
