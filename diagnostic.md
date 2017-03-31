## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
$('H1')
$('Form')
$('ol li:first')
$('ol li:last')
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$('ol li')
$('ol').find('li')
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$('.listerItem).parent().parent().children('Form')
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
Getter:
$('#content').css('background-color')
$('#firstHeading').css('font-size')
Setter:
$('#content').css('background-color', 'blue')
$('#firstHeading').css('font-size', '14px')
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
It is a tree structure of that treats each node as an object of the document.
Although it is very similar to the HTML source code, they are not the same,
as the DOM can be manipulated through methods such as jquery. I would say it is
important because of its ability to be interacted with and make use of certain
capabilities such as listeners to execute some intended functions.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
The HTML source code and view source.

<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
$('li').parent('ol').parent('body').hide()
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
* $('div').on('click', function() {
                console.log('The Steelers have more championships than the Patriots.')
                })
<!-- your answer ends here -->
