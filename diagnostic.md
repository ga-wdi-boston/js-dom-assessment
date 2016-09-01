## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->

body.logged-in

.header /.header-logged-in-true

#start-of-content

#ajax-error-message

<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$('li').each(function(){
  return $(this);
})

return $('ol').find('li');

<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$('.listerItem').parents().find('body').children('form');

I think one could also just do:
$('.listerItem').parents('body').children('form');
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->

Getter methods:
  $('selector').html()
  $('selector').val()

Setter methods:
  $('selector').text("Here's some new text!");
  $('selector').attr('href', 'www.new-link.com')

<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->

The DOM is basically a 'node tree' that is rendered by the browser from the source
code. It is NOT the same as the source code, and it allows elements on the page (or 'nodes') to be accessed and manipulated by JavaScript/jQuery.


<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->

The source code, or the page displayed by the browser. The DOM is neither of these things.

<!-- your answer ends here -->

## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

<!-- your answer starts here -->
$('.listerItem').parents('body').hide();
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$('div').on('click', function() {
  console.log("click registered!");
});
<!-- your answer ends here -->
