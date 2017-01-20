## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
$('#js-repo-pjax-container > div.container.new-discussion-timeline.experiment-repo-nav > div.repository-content > div:nth-child(9) > div > div')

$('#readme > article')

$('body > div.container.site-footer-container > div')

$('#js-repo-pjax-container > div.container.new-discussion-timeline.experiment-repo-nav > div.repository-content > div:nth-child(9) > div > div > h2')
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$('li')
$('ol li')
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$('.listerItem:parent^2 > form')
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
Getters: .val() and .text()
Setters: .val(value) and .text(value)
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM is created by the browser upon running the source code as a way for javascript and the user to interact with it without changing the source code.

It is represented as a tree with each node of the tree being an HTML element.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
The HTML code that we write is not the DOM, and the code we view inside of the inspector in the browser is not the DOM.
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
$('li:parent^2').hide();
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$('div').on('click', () => {
  // do something
});
<!-- your answer ends here -->
