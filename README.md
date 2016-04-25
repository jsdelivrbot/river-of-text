# River of Text

A plugin for creating scrolling text inside of div or frame on your page.  

How to use:  

1. set an id of 'river-container' on the element you want to display text.  
- you may have to set a z-index on the container to make sure you don't overlap other elements  
- inspect the code if you want to know/change the styling that gets set on the container.
-know that this works by appending p tags to your page  

2.  src the script (WIP)  

3. call the function createRiver() like so:  
``` js
createRiver(minFontSize, maxFontSize, userColor, containerWidth, containerHeight, codeStrings)
```  
- the arguments represent minimum font, max font, text color, width of the animate container, the height of the animate container, and an array of values to display as text.  
- If you don't provide args, or the right kind of arg, it will default to some other values. If you include arguments, enter something for all 6 of them!  

### Fun Fact  

This is nothing but vanilla javascript. I am not entirely sure if this is a good thing or a bad thing. 
