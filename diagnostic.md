## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
$('#js-pjax-loader-bar')
$('.select-menu-modal-holder dropdown-menu-content js-menu-content')
$('.select-menu branch-select-menu js-menu-container js-select-menu float-left')
$('.commit-tease js-details-container Details')
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$('li')
$('ol li')

Reference: http://stackoverflow.com/questions/14061554/how-to-select-all-li-in-an-ul-with-a-classname-nav
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$('.listerItem').on('click', function () {
  $('form').select()
})
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
Getter methods: .val(), .find()
Setter methods: .val(), .html()
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM is an object that visually represents and describes the structure of our content.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
A page of HTML is not the DOM. View source is also not the DOM
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
$('li').on('click', function () {
  $('body').hide()
})
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$('div').on('click', function () {
  console.log('You clicked inside a div item!')
})
<!-- your answer ends here -->
