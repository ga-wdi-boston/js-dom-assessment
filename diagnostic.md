## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
.neponav {

}

body {

}

nav {

}

.container {

}
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$("ol").html('li');
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$(li).up('form');
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
getter - val();   html();
setter - val(value); addClass(value);
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
document object model - structed tree system which connects html to back end, vertical structure
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
DOM isn't source code
DOM is handled in every browser a little diferently
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
   $('li').parent('body',function(){
   this.hide();
   });
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$('div').on('click', function(){});
<!-- your answer ends here -->
