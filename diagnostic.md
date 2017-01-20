## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
div
#js-repo-pjax-container > div.container.new-discussion-timeline.experiment-repo-nav > div.modal-backdrop.js-touch-events

span
#js-repo-pjax-container > div.container.new-discussion-timeline.experiment-repo-nav > div.repository-content > div.repository-meta.js-details-container.Details > span

ul
body > div.header.header-logged-in.true > div > ul.header-nav.float-left

button
#js-repo-pjax-container > div.container.new-discussion-timeline.experiment-repo-nav > div.repository-content > div.repository-meta.js-details-container.Details > span > button


<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$("ol").children();
$("ol li").each();

<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$("li.listerItem").parent().parent().children("form");
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
Getter
.html()
E.g. $("#sample").html() gets the html from id sample

.text()
E.g. $("#sample").text() gets the texts from id sample

Setter
.css(propName, value);
E.g. $("#sample").css('color', 'red') makes the text from id sample red

.height(value);
E.g. $("#sample").height(30); gives the sample element a height of 30.

<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM is a representation of the HTML.  It is made of nodes and can be used by jQuery to traverse through the browser's HTML code.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
It can be confused as the source code

<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
$("li").parent("body").hide();
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$("div").on('click', function() {
    $(this).preventDefault();
});
<!-- your answer ends here -->
