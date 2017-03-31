## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->

-   `div`
-   `.commit-tease`
-   `#js-flash-container`
-   `button`

<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->

```js
$('ol').children()
$('ol').find('li')
```

<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->

```js
$('.listerItem').parent().siblings('form')
```

<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->

-   Getters: `.text()`, `.css('color')`
-   Setters: `.text("text")`, `.css('color', 'blue')`
    <!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->

The DOM is the document object model. It is a representation of the source code that the browser renders and can be interacted with using javascript.

<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->

-   People think it's the source HTML code that gets written
-   People think it's a programming language

<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->

I'm confused why you wouldn't just select the body in this scenario.  But if you had to go from li --> body, I think this would work:

```js
$('li').parents('body').hide()
```

<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->

```js
$('div').on('click', () => console.log('You clicked a div'))
```

<!-- your answer ends here -->
