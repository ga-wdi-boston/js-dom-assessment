## Question 1

Using `inspect element`, write four selectors found on the main page for this GitHub repo.

<!-- your answer starts here -->
.pagehead repohead instapaper_ignore readability-menu experiment-repo-nav
.container
header header-logged-in true
div
body
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file (also in the `assets` folder), what are two ways
you could return ALL list items (`li`) using jQuery? This is intentionally vague. (Assume starting at the `OL` DOM node).

<!-- your answer starts here -->
$('ol').childeren();
$('ol').childeren('li');
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to the `form`
DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$('li')parent().sibling('.listerItem');
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter methods.

<!-- your answer starts here -->
Methods
  getter :
            $('.gettermethod');
            $('.gettermethod').parent();
  Setter:
            .css('background-color','red');
            .html('hello world');
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
Document Object Modle is virtualy inbetween the rendered page and the scouce code. We can see a repsentation of this when we use Inspect --> elements
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
The Rendered page and the scource code.
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

<!-- your answer starts here -->
$('body').hide();
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
let numberClicks = 0;
$( "body" ).on( "click", "div", function() {
  numberClicks++; // thought this would be cool for click counter.
});
<!-- your answer ends here -->
