## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- #readme > article
#readme > article > div
#user-content-license
#js-repo-pjax-container -->



## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- $("li").find("*") -->

<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- $(".listerItem"). -->

<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- $("li").show -->

<!-- $("li").()

Setters
$(.target).text("Hola")
$(.target).var-->


## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- It is a tree version of the HTML file, it allows us to access and modify. -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- Source and the HTML file-->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- $("li").onclick(function(){
  $("body").hide( function(){

  });
}); -->

<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- $("div").onclick(function)(){

} );-->
