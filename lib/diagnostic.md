## Question 1

Using `inspect element`, write four selectors found on the main page for this GitHub repo.

<!-- your answer starts here -->
$(.markdown-body entry-content')
$('.branch-infobar')
$('h1')
$('.overall-summary')
</a>
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file (also in the `assets` folder), what are two ways
you could return ALL list items (`li`) using jQuery? This is intentionally vague. (Assume starting at the `OL` DOM node).

<!-- your answer starts here -->
$('ol').children()
$('.ol').each()
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to the `form`
DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$('listerItem').parent().next()
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter methods.

<!-- your answer starts here -->
Getter methods: .text() and .html()<!-- your answer ends here -->
Setter methods: .text('hello world') and .html('hello world')
## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM is the infrastructure with which you interact live to make changes to the content of your code. Imagine it as a tree and it becomes much simpler. Using jQuery code, you are able to traverse up and down the tree and make changes to the DOM.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
// - HTML code you have written.
// - The 'view source' page on any given website.
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

<!-- your answer starts here -->
$('listerItem').parentsUntil('body').hide()
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$('div').click()

$('div').on('click', '')
<!-- your answer ends here -->
