# Objective
  Let's practice using the fundamentals of CSS!

# Setup
  1. Create a new project folder and connect it to a github repository. Copy the text from this README.md file into it.
  2. Create an index.html file and a styles.css file.
  3. Use the ! emmet shortcut to stub out the page.
  4. In the `<head>`, link the the CSS file to the HTML page.

# Build the HTML Structure
  1. In the body element, create a div with an id of "container"
  2. Add 4 div elements with a class name of "boxes" and a unique id (box1, box2, boxN) inside the container div. Each added div will be a child of the container div and a sibling to each other.
  3. Create an `<h2>`, `<p>`, and `<a>` element inside of each of the 4 div's. Add the following content to the elements:
      * h2: Add a story title in each header
      * p: Add a story description within each paragraph
      * a: Add a link that says "Read More"

# Now, Lets style!
  1. Assign a global font family
      * Here is a list of some Web Safe Fonts: https://www.w3schools.com/cssref/css_websafe_fonts.asp
      * You could also play around with Google Fonts: https://fonts.google.com/
      * **Hint**: use the body selector.
  2. Change the background color for the body element to a light grey color.
  3. Use a multiple selector rule set to center the text for all h2, p, and a elements.
  4. Use an element selector to remove the default underline styles for anchor tags and change the font color:
      * When you refresh your browser you'll notice that the link is not centered like the h2 and p elements. This is because text-align will center the element based on the width assigned to it. If you apply a border to the link tag, you'll see that the link is centered inside the anchor element. The best way to center the link, relative to its parent element, is to enclose it inside of a div element.
  5. Wrap the anchor element inside of a div and give the div a class name of "readme-wrapper":
  6. Replace the a in the multiple selector rule with `.readme-wrapper`
  7. Now refresh and you'll see the link is centered as we expected it
  8. Use a class selector to target the `.boxes` class:
      * Change the display to inline-block
      * add margin
      * add padding
      * add a solid border
      * add a border radius to round the edges of the border
  9. Add a CSS `:hover` selector so that when the link is moused over the cursor changes to a pointer, the font is bold, and text color changes.
  10. Wrap a single word in each paragraph element inside of a span element and assign it a new font color and font weight.
  11. Change the display to block in the class selector named `.boxes`.
  12. When you refresh the page, you'll see each div now takes up the entire row.
  13. Add a width of 20% to each div with the class `.boxes`.
  14. Use an id selector to add a unique background color to each div.
  15. Change the position of the second div to be relative to its parent.
  16. Position the second div so that it is next to the first div.
  17. Change the position to absolute.
  18. Position the second div to the top right corner.
  19. Remove the position styles for the second div.
  20. The second div should now be returned to the normal flow.
  21. Add a new div element as a child inside each of the 4 div elements.
      * We'll use this div to represent an image
  22. Give the new div a class name.
  23. Assign a width, height, and background color to the div.
  24. Position the div so its inline and to the left of the header.

# Styling Specificity
  1. Insert 3 `h1` tags into the html document, give each text for your favorite TV shows.
  2. Apply styling so that all h1’s have a font color of your choice.
  3. Add 2 more h1’s with 2 other TV shows. What immediately happens to their font color when you refresh the html doc?
  4. Give the original 3 h1’s all the same class.
  5. Give the additional 2 h1’s the same class (make it be different than the other 3).
  6. Apply styling by class name, have the first 3 h1’s get a new font color (don’t delete or comment out the original styling). Once you apply a new font color by class, refresh the page and see what it does.
  7. Do the same thing for the added 2 h1’s, give them a different font color by class name.
  8. Take note at what styling applied to a class does to what was already applied to ALL of the elements before.
  9. Rank each TV show you have (so all 5 h1’s), a rank of show1 would be the best. Have the rank be the id of each h1. At this point every h1 should have a class AND an id attribute.
  10. Apply styling using the id of each h1, give each a different color. Refresh the document and see how this type of styling changes what was already applied. Create 3 unordered lists, each with 5 items, have the first list be 5 friend's names, have the next be 5 places you want to travel, and have the last list be your favorite restaurants.
  11. Apply the same steps covered in the directions to play with the specificity of styling on each of these lists.
  12. Wrap each list in a div, give the div a border that is 2 pixels thick, have it be solid and the color be black.

Isn't styling fun? We know it can be tricky and tedious, but the more you practice, the better you'll get at it. After a while, you won't even think about it anymore :)