## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
```
#start-of-content
.repository-content
h2
.markdown-body
```
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->

```
$('li');
$('ol').children();
```

<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
```
$('.listerItem').parent().siblings('form');
```

<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->

```
Getter methods:
- .val()
-. text()

Setter methods:
- .text('some text');
- .html('<p>some HTML</p>');
```

<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->

```
The Document Object Model is an API for interacting with elements within an
HTML (or XML) document. It is a tree containing a node for each element in the
document (in an HTML document, this can be HTML tags like <p> and <div>, but
also text nodes within tags (like 'hello' within '<p>hello</p>')). The DOM
lets us select, modify, and add/delete elements in the document using
JavaScript or jQuery.
```

<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->

```
- HTML that someone types into a .html file 
- what you see when you "view source" while looking at a web page

<!-- your answer ends here -->

## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

<!-- your answer starts here -->
```
$('.listerItem').parents('body').hide();
```

<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
```
$('div').on('click', someFunction);
```

<!-- your answer ends here -->
