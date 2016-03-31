## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->

$("p") selects every <p> element on page
$("h1") '' <h1> ''
$("div") '' <div> ''
$("span") '' <span> ''




<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->

$('ol').children();
$('ol').find('li'); to first li
$('ol').sibling() to navigate to sibling of the firs li


<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$('li').find('.listeritem');

<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
setter
$('input[name=username]').val('BenBlahBlah');
the .val is the setter, setting the value of the input
$('p').text('yahoo');
sets all p text to yahoo

getter
$('p')
the getter method gets all <p>
$( '.classy' )
gets all elements with the class of classy


<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->

The DOM is where the the code you write is modeled into something you can read and manipulate, the space in between your source code and the final page a client displays as a web page. It's the playground in between what the browser displays and what we code. It's like god, but a little harder to understand.
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
the source code you write

the jquery you code into the console
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

<!-- your answer starts here -->

<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->

<!-- your answer ends here -->
