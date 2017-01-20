## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
$('#js-repo-pjax-container > div.container.new-discussion-timeline.experiment-repo-nav > div.repository-content > div.overall-summary > div > div > ul > li.commits > a')

$('#js-repo-pjax-container > div.container.new-discussion-timeline.experiment-repo-nav > div.repository-content > div.file-navigation.in-mid-page > div.select-menu.branch-select-menu.js-menu-container.js-select-menu.float-left > button')

$('#js-repo-pjax-container > div.pagehead.repohead.instapaper_ignore.readability-menu.experiment-repo-nav > div:nth-child(2) > nav > a:nth-child(7)')

$('#js-repo-pjax-container > div.container.new-discussion-timeline.experiment-repo-nav > div.repository-content > div.commit-tease.js-details-container.Details')
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$('ol > li').on()
$('ol').get('li')
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->

<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
$('#div').on()
$('li').on()

$('#div').on(setter)
$('li').on(setter)
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM is the place that translate document files from the server before it get displayed on the client side.
you can accsess those files and update them from DOM
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
its looks like your html but its not.

<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
$('li').prev('body')
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$('div').on('click'())
<!-- your answer ends here -->
