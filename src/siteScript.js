// Site JavaScript Functionality:
// Variables:
// Grabbing all the elements that have the class attribute of menuOption.
let menuOptions = document.querySelectorAll(".menuOption");

// Functions:
// When called, changes the element color dependant on whether the mouse is hovering over it:
function hover_over_tab(_element, _isHovering)
{
    // Retrieves the menu option's tab visual and text as well as assigning the pointer value to cursor:
    const tab = _element.children[0];
    const text = _element.children[_element.children.length-1];
    _element.style.cursor = "pointer";

    // Style changes are applied dependant on whether the user is hovering over the element:
    if(_isHovering)
    {
        // When hovering: enlarge the tab and change the colour of the text:
        tab.style.fontSize = "5px";
        text.style.color = "rgb(123, 224, 255)";
    }
    else
    {
        // When not hovering: reset both menuOption tab and text:
        tab.style.fontSize = "3px";
        text.style.color = "rgb(255, 255, 255)";
    };
};

// Hovering over menu option tabs:
// Assigning event listeners to all tabs:
menuOptions.forEach((mOption) =>
{
    // Listening for mouse entering and leaving the element:
    mOption.addEventListener("mouseenter", function ()  {hover_over_tab(mOption, true)}, false);
    mOption.addEventListener("mouseleave", function ()  {hover_over_tab(mOption, false)}, false);
});