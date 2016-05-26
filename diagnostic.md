## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
If I use "inspect" I can see the CSS styles being used. I am seeing more than
four, but here are four:

*,
li,
ol,
.markdown-body,

<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
you can use `$('li')` to get all of the list items.

I think you can also do `.children('li')` will also get the li elements,
because it goes down one level and returns all elements,
but filtered by the argument.
Seperately, you can also use `.find('li')` I think, which is the same as
`.children('li')`, but could go down multiple levels. In this case that is still
just one, but it would work I think.

I looked here: `https://api.jquery.com/category/selectors/basic-css-selectors/`

<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
`.parent().children('form')`
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
`.val()` is a getter method since it has no arguments.
`.text()` is a getter method since it has no arguments.

`.val("my_value")` is a setter method since it has an argument.
`.text("text_example")` is a setter method since it has an argument.

<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->

The DOM is the "Document Object Model". It is an abstraction from the actual
webpage content, which is html. The DOM is built by the browser and is a
tree-like hierarchy that sets the rules for how different elements are related.
You have to work with the DOM to modify the page once it is already in the
browser. The closest we can come to seeing the DOM is the html-like content
that we see when we inspect a page with the developer tools in a browser.

The DOM is somewhere between the html and the rendered page. The browser uses
the html to build the DOM, but it also adds or changes parts of it, especially
to correct errors. The browser then displays a webpage based on its DOM, not
based directly on the html.

<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
I think people often confuse the html or the rendered page for the DOM. See
above for the distinction.

For this I referenced our study on html and DOM.

<!-- your answer ends here -->

## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

<!-- your answer starts here -->
.parent().parent().hide()
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->

`$('div').on('click', function(){};)`

<!-- your answer ends here -->
