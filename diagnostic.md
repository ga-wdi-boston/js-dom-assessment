## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

1.body > div:nth-child(6)

2.body

3.body > div.header.header-logged-in.true

4.#js-repo-pjax-container > div.container.new-discussion-timeline.experiment-repo-nav

<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

1. Use .find()
2. Use .children()

<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").



<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

Setters_
$('#Barack Obama').val('Donald Trump') would change the string value of the ID Barack Obama to Donald Trump
$('#America').val('China') would change the string value of the id America  America to China.

Getters
$('#Barack Obama').val() would get 'Barack Obama'
$('#Donald Trump').val() would get "Donald Trum'"
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

The DOM(DOCUMENT OBJECT MODEL) acts as the intermediary between clinet and server. It allows developers to see changes made in their code while. It pulls a given document,(independent of language), parses it, and creates an object model of the document in Node Tree Form

## Question 6

Please give two examples of things that are commonly confused for the DOM.

HTML and  source code are often confused for the DOM.

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->

<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

* $(‘div’).on(‘click’, (event)=>
    return item;
* });
