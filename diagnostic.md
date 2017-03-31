## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
class = repository-content
id = ajax-error-message
id=cyeBlackMaskLayer
class=facebox

<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
The each function iterates over a jQuery object, executing a function for each matched element
$( "ol li" ).each(function( index ) {
  console.log( index + ": " + $( this ).text() );
});
<!-- your answer ends here -->


## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
Unsure and ran out of time
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

When these methods are called with no argument, it is referred to as a getters, because it gets (or reads) the value of the element. When these methods are called with a value as an argument, it's referred to as a setter because it sets (or assigns) that value:

Setter:
document.getElementById('ex').innerHTML = 'hello'
$("p:first").text("This is another demo text.")

Getter:
document.getElementById('ex').innerHTML()
var str = $("p:first").text()

<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

It defines the logical structure of documents and the way a document is accessed and manipulated. The HTML you write is parsed by the browser and turned into the DOM. Also Javascript can manipulate the DOM. Mozilla gives a succinct defniniton as follows "It provides a structured representation of the document and it defines a way that the structure can be accessed from programs so that they can change the document structure, style and content"

<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
1) Looking at the HTML source of a web page is not the same thing as looking at the DOM.
2)
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
$("body").hide()

<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$('#div').on('click', function() {
    console.log('click triggered')
})
<!-- your answer ends here -->
