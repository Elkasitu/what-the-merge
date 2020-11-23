// Taken from https://gist.github.com/yckart/6351935
function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

// Create the "button" that links to the mergebot PR status page
var mergebotButton = document.createElement('a');
mergebotButton.href = window.location.href.replace("github.com", "mergebot.odoo.com");
mergebotButton.className = "btn btn-sm position-relative d-none d-md-inline-block";
mergebotButton.innerText = "Check on mergebot"

// Get the element that will act as an anchor for the new button, in this case it's the PR's
// "Edit" button.
var anchor = getElementByXpath("/html/body/div[4]/div/main/div[2]/div/div/div[2]/div[1]/div[1]/div/div/button");


// Finally, insert the button next to the anchor
anchor.parentNode.insertBefore(mergebotButton, anchor.nextSibling);
