# Functions_Implementation_JS
It contains an implementation of 4 Functions in JavaScript, and HTML file for testing the last function.

The Functions:

doOnlyWhen: 
Preform an action only when a specific condition is met, wait for it with a defined interval and not forever.
It receives: a function that should run when the condition is met, a boolean function that preforms the condition test (true means action should run), an interval between checks (in milliseconds, defaults to 1000), the number of times to check before we give up (optional, defaults to 20) and a function (Failure handler) in case condition never met (optional).
It returns nothing.

isVisible:
Check if element is visible.
It recieves: the element to check the state for 
It returns: boolean.

createStyle:
Creates and appends the style element to the header section of the HTML.
It recieves:  the css selector to have the rule for (string) and the CSS rule to be added (string).
It returns nothing.
use: createStyle("h1" , "color:red");

unmask:
It recieves: tow selectors both should be input selectors, first one should be the one we want to listen  to, the second one we should update it value according the user input on the first one.
