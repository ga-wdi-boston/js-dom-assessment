## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

.is-copy-enabled
.logged-in
.repository-content
.commit-tease

all from class

<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
select $('OL') using jQuery
give the OL a class and use jQuery to call that class if there were lots of lists
and you wanted to select this particular list

<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$('.listerItem').parent().parent().form;

<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
.attr() .add() setter
.html() .css() getter
although they can do both getter and setter methods

<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
An origanizational model of a document's structure-- the heirarchy of how
the relate and interact with eachother.

<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
HTML document is not the DOM
JavaScript is not the DOM

<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
$('li').parent().parent().hide('li');

<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$('div').click(function()){
  $('div').hide();
};

<!-- your answer ends here -->
