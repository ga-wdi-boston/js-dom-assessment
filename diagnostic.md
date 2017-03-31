## Question 1

Using `inspect element`, write four selectors found on the main page for this
GitHub repo.

<!--
1.  $('#container site-footer-container')
2.  $('#li')
3.  $('#h1')
4.  $('#div id="readme"') -->

<!--  -->

## Question 2

Using the diagram in the `README` file, what are two ways you could return ALL
list items (`li`) using jQuery? This is intentionally vague. (Assume starting
at the `OL` DOM node).

<!--$("li").first().next();
    $("#OL").children("li");
    -->

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to
the `form` DOM node. (Assume the list item has a class of "listerItem").

<!-- $("li").first().parent().parent().next();-->

<!-- -->

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter
methods.

<!-- 1.  getter:
            $("h1").html();
         setter:
            $( "h1" ).html( "hello world" )
 -->

<!-- 2.  getter:
            $("#h1").text()
         setter:
            let "Cities" = $("h1").val()
syour answer e3nds here -->

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

<!-- The DOM is a model of the expressed code for html/css/js family of files  -->

<!-- It's as wrapper for html/-->

## Question 6
 ('click', function())
Please give two examples of things that are commonly confused for the DOM.

<!-- DOM is not the actual code -->

<!-- DOM is not the website -->

## Question 7

Please write a method that traverses from a list item (`li`) DOM node to the
body DOM node, then hides it.

<!-- your answer starts here -->

<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

<!-- $("div" ('click', function())) -->

<!-- your answer ends here -->
