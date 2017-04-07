## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!-- your answer starts here -->
'.author' = the name of the gitHub author of this page (pjliddy)
'.header-logo-invertocat' = the gitHub cat logo in the header
'.markdown-body h1' = the top level heading in the READ ME content
(jQuery DOM Diagnostic)
'.markdown-body h2:first-of-type = first subheading (Prerequisites)
<!-- your answer ends here -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!-- your answer starts here -->
$('li') or $('ol').children() will return all the `<li>` elements in the diagram
<!-- your answer ends here -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- your answer starts here -->
$('li').closest('body').find('form')
<!-- your answer ends here -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- your answer starts here -->
**jQuery Getters**
$('#element-id').text() -- gets the text of element with id=element-id
$('#input-id').val() -- gets the value of input with id=input-id

**jQuery Setters**
$('#element-id').text('Lorem Ipsum') -- sets the text of id=element-id
$('#element-id').html('<p>Lorem Ipsum</p>'') -- sets the html of id=element-id
<!-- your answer ends here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- your answer starts here -->
The DOM is an API that represents the structure and content of an HTML document as a node tree. DOM nodes can be created, deleted, traversed and manipulated using JavaScript (jQuery in particular).
<!-- your answer ends here -->

## Question 6

Please give two examples of things that are commonly confused for the DOM.

<!-- your answer starts here -->
The source html code and what is shown in the browswer's dev tools are commonly confused for the DOM itself.
<!-- your answer ends here -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->
$('li').closest('body').hide()
<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->
$('div').on('click', function handleClick(){
  console.log("I am a div. I have been clicked.")
})

<!-- your answer ends here -->
