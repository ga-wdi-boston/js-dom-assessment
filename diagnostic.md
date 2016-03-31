## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset="utf-8">

    <div role="main" class="main-content">
            <div itemscope="" itemtype="http://schema.org/SoftwareSourceCode">
        <div id="js-repo-pjax-container" data-pjax-container="">

        <div role="main" class="main-content">
                <div itemscope="" itemtype="http://schema.org/SoftwareSourceCode">
            <div id="js-repo-pjax-container" data-pjax-container="">

        <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
          <div class="container repohead-details-container">







## Question 2parent

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

$('.ol').children()

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

$('li').parent().sibling();

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

$( '#header' );
$( 'li' );

setters
$( "p" ).addClass( "myClass yourClass" )
$('.text').val(44)
## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

The DOM is like a tree that is like a frame

## Question 6

Please give two examples of things that are commonly confused for the DOM.

HTML -looks like it but isnt
The Host


## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

$('#book-form').on('submit', function (event)

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- your answer starts here -->

<!-- your answer ends here -->
