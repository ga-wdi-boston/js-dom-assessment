## Question 1

Using `inspect element`, write four selectors found on the main page for this GitHub repo.

<!-- your answer starts here -->
.mega-octicon.octicon-mark-github
.avatar
.branch-infobar
.file-navigation.in-mid-page

<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file (also in the `assets` folder), what are two ways
you could return ALL list items (`li`) using jQuery? This is intentionally vague. (Assume starting at the `OL` DOM node).

<!-- your answer starts here -->
$('OL').children();
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to the `form`
DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
($'.listerItem').parent().next();
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter methods.

<!-- your answer starts here -->
getter:
.text()
.attr();

setter:
.text('new text');
.css('property','value')
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM (document object model) is an object that is compiled from the source
code and serves as a model of the elements that go into making the page,
including html, css, and javascript. it is created by the browser on page load
and can be depicted as a tree.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
1) the page itself is not the DOM - that's just a copy of the site provided by
  the server
2) The 'inspect element' option in the devtools tab is not the DOM - that's a
  visual representation of the DOM
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

<!-- your answer starts here -->
var body = $(lister).parent().parent();
body.hide();
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$('div').on('click')
<!-- your answer ends here -->
