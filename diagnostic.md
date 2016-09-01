## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
1) Prerequisites - h2 {display: block; -webkit-margin-before: 08.3, etc.
}
2)<li></li> for the list of instructions
3)<h1></h1> for the main header - jQUERY DOM Diagnostic
4)<a href -->link to jQuery DOM github repo

Comfort: 4:
Clarity: 5;

Source: class notes.

<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).


$(#li)
.each(li)??

clarity: 3
comfort: 3
source: https://api.jquery.com/each/



## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$("li.listerItem").find( "form" )...????;
<!-- your answer ends here -->

comfort: 3
clarity: 3
source: https://api.jquery.com/find/

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

Gettter:
.find() & .text()

SEtter:
.html() & .on()

comfort: 3
clarity:3

source:google/notes

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

The DOM is a combination of all of the code that we have written, which is then
used to make a rendering tree for the browser to paint on the screen. It is the
way that code is organized so that an app can be visible on the page.

clarity: 4
comfort: 4
source: class notes


## Question 6

Please give two examples of things that are commonly confused for the DOM.

the HTML we write.
A text editor



## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

<!-- your answer starts here -->

<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->

<!-- your answer ends here -->
