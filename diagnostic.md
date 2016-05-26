## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

article.markdown-body
p
h1
ul

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

$('OL').children('li')
$('li').text()


## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

$('li.listerItem').parent().text('form')


## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

Getter:     Setter:
.html()     .html(html string)
.val()      .val(value)


## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

The DOM is like a tree structure which helps not only to visualize the html elements
to get a better sense of their relationship but also how we can access and manipulate
those elements using scripting language.

## Question 6

Please give two examples of things that are commonly confused for the DOM.

Source code
Rendered web page

## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

$('li').parents('OL').prev().hide()


## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

$('div').on('click', handler)
