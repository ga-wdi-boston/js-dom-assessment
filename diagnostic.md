## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
.repohead.experiment-repo-nav
.accessibility-aid
.ajax-error-message
.container
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$( "li" ).each(function( index ) {
  console.log( index + ": " + $( this ).text() );
});

$( "li" ).each(function( index ) {
  console.log( index + ": " + $( this ).text() );
});



<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
//I'm trying to go up to the parent ol, then the parent body, then down to the child form. I am running out of time.

$(document).ready(function(){
    $("li").parentsUntil("body");
});
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
These are getters:
$(".btn-two").click(function(){
     var str = $("p:first").text();
     alert(str);

     $(".btn-two").click(function(){
             var str = $("#container").html();
             alert(str);


These are setters:
$("button").click(function(){
        $("body").html("<p>Hello World!</p>");

$(document).ready(function(){

  $("button").click(function(){
      $('input[type="checkbox"]').attr("checked", "checked");
            });
        });

<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM is the Document Object Model. It is what renders our HTML in the browser.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
HTML itself can often be confused for the DOM. The DOM is created from the HTML.
Javascript code can also sometimes be confused with the DOM. Javascript is just a language, but the DOM is where that language does stuff.

<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
//Running out of time

$(document).ready(function(){
    $("li").parentsUntil("body").hide();
});
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$( "div" ).click(function() {
  alert( "Handler for .click() called." );
});
<!-- your answer ends here -->
