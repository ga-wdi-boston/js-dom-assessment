## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
$(".branch-infobar");
$(".js-select-button");
$("span.right");
$("a.message");
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$("OL").children("li");
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$(".listerItem").parent().children("form");
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
getter methods:
$("h1").text();
$(".listerItem").val();

setter methods:
$("h1").text("Hello I am a header");
$(".listerItem").val(5);

<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM is NOT your HTML code, but is the result of the browser parsing
the HTML code. A visual representation of the DOM can be seen in the browser
Elements panel, but this is not the DOM either. The DOM is like God. You just
have to believe.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
Your HTML code, and View Source
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

<!-- your answer starts here -->
$(".listerItem").parent().parent().hide();
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$("div").on("click", function() {
  console.log("div has been clicked");
})
<!-- your answer ends here -->
