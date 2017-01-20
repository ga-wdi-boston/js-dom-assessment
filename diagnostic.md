## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
- `.repository-content`
- `.overall-summary`
- `.commits`
- `.numbers-summary`
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

```js
$('li');
// OR
$( 'ol' ).children();
```

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

```js
$('.listItem').closest('form');
```

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

```js
// Getters
.attr(), .val()
// Setters
.val('something'), .attr('src', './img/pic.js')
```

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

The DOM is a tree-like object that is constructed by the browser fom HTML and rendered to display the page. It can be interacted with using javascript.

## Question 6

Please give two examples of things that are commonly confused for the DOM.

- HTML source code
- Javascript

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

```js
$('li').parents('body').hide();
```

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

```js
$('div').on('click', () => {
  // do something
});
```
