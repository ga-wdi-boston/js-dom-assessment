## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

1. #user-content-jquery-dom-diagnostic; 2. .anchor;
3.#user-content-prerequisites; 4. #user-content-instructions;


## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

$('li') & $('ol').children('li');


## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

$('.listerItem').parent().children('form');

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

Getter: .val(); .html();

Setter: .val(value); .html(htmlString);

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

DOM is the visual representation of the html(dynamic html);

## Question 6

Please give two examples of things that are commonly confused for the DOM.

1. html can be confused as a DOM;

2. DOM element is different from html element;

## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

//


## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

$('div').on('click', eventHandler);
