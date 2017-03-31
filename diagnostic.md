## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

element.style
div
body
html

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

$( "OL" ).children().css();
$( "OL" ).find( "li" ).css();

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

$( ".listerItem" ).parents("form").css();

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

getter
find()
text()

setter
append()
prepend()

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

The DOM is the browser's object-ized representation of a page.

## Question 6

Please give two examples of things that are commonly confused for the DOM.

the html, the "view source" in the browser (which is just the html)

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.


$( ".listerItem" ).parents("body").css()
  then($( "body" ).hide("slow"))


## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

$(() => {
  setAPIOrigin(location, config)
  $('div').on('click', onDivClicks)
})
const onDivClicks = function () {
  event.preventDefault()
  console.log("div item's been clicked man")
  window.open('https://www.amazon.com/b/ref=usbk_surl_books/?node=283155')
}
