## Question 1

Using `inspect element`, write four selectors found on the main page for this GitHub repo.

```$("#ajax-error-message").show(function()```
```t=$.ajax({url:$(this).attr("data-url"),data:n})```
```$.hashChange```
```$(document).on ```
## Question 2

Using the diagram in the `README` file (also in the `assets` folder), what are two ways
you could return ALL list items (`li`) using jQuery? This is intentionally vague. (Assume starting at the `OL` DOM node).

``` ```

## Question 3

Write the jQuery code to navigate from one of the list item (`li`) DOM nodes to the `form`
DOM node. (Assume the list item has a class of "listerItem").

```  .parent(li).sibling ```

## Question 4

Give two examples of jQuery getter methods and two examples of jQuery setter methods.

```Getter method is called with no argument, it gets (or reads) the value of the element. return the requested value only for the first element in the selection, with the exception of .text(), which retrieves the values of all the elements.```

```Setter method is called with a value as an argument, it's referred to as a setter because it sets (or assigns) that value. affects all elements in selection```

```They share the some of the same methods to get or set HTML/CSS attributes.```
```attr() - get or set values on HTML attributes```
```val() - to get or set form field values```

## Question 5

In your own words, please answer the following question: WHAT IS THE DOM?

```DOM is an invisible object - is neither the rendered page or the code.
DOM API is compiled from source code which the browser use to render the webpage.```

## Question 6

Please give two examples of things that are commonly confused for the DOM.

```Source Code```
```HTML```


## Question 7

Please write a method that traverses from the lister DOM node (one of the list
item elements) to the body DOM node, then hides it.

<!-- your answer starts here -->

<!-- your answer ends here -->

## Question 8

Use jQuery to register a click handler for clicks inside `div` items.

$("body#div").on("click", function(){
    $( "body#div" ).text( "Hola");
});
