## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

#start-of-content (id)
#js-flash-container (id)
.container site-footer-container (class)

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

1. $("li")
2. $("ol" > "li")

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

$(".listerItem").closest("form")

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

Getter: find(), attr()
Setter: each(), append()

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

The DOM is a structured representation of a webpage IN IT'S CURRENT STATE. This could differ from the source HTML if JavaScript events have manipulated the background color of the page, for example. The DOM allows developers to target various pieces of a web applicatio to trigger changes in styling, animations or other events.

## Question 6

Please give two examples of things that are commonly confused for the DOM.

It is NOT source HTML. It is not a rendered page.

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

$("body").hide()

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

$("div").on('click', function(event){
  console.log("event is ", event);
});
