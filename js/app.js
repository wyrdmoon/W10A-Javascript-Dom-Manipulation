//query Selector
var firstPTag = document.querySelector('p');
firstPTag.innerHTML = "This is the first p tag";

//query SelectorAll
var allPtags = document.querySelectorAll('p');
for(var i=0; i<allPtags.length; i++) {
    allPtags[i].innerHTML = "These are p tags";
}
//get elements by Id
var header = document.getElementById('title');
header.innerHTML ="OOOOOH LOOK I CHANGED IT!";

//get elements by class name
var bestPTags = document.getElementsByClassName('best-p-class');
for(var i=0; i<allPtags.length; i++) {
    allPtags[i].innerHTML = "I am a fantastic p tag";
}

//get elements by tag name
var bestImgTags = document.getElementsByTagName ('best-img-element');
for(var i=0; i<bestImgTags.length; i++) {
    allImgTags[i].innerHTML = "This is Wolverine";
}
// create element
var newElement = document.createElement('div');
var parentElement = document.getElementsByTagName('div');
// create text node
var para = document.createElement("p");
var t = document.createTextNode("This here is a text node.");
para.appendChild(t);
//remove child
var list = document.getElementById("second-p-tag");
list.removeChild(list.childNodes[0]);
//classlist add remove and toggle
var header = document.getElementById('second tag');
header.classList.add('big-new-class');

var header = document.getElementById('third-p-tag');
header.classList.remove('big-new-class');


