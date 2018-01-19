
let $alertButton = $('<button>' + 'Alert' + '</button>').appendTo('body');

$alertButton.click(function(){
    alert('Nice msg');
})

let $input = $('#myInput');

$('button#textInput').click(function(){
    alert(`${$input.val()}`);
})

let $box = $('#box');

$box.css({
    'height' : '5em',
    'width' : '5em',
    'background-color' : 'red',
})

let colors = [ 'blue','green','yellow','orange','purple','brown','black',];

function randomVal(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


$box.mouseover(function(){
let cVal = randomVal(0,colors.length);
$box.css('background-color', colors[cVal]);

})


$box.mouseout(function(){
    $box.css('background-color', 'red');
})

let $myParagraph = $('<p>' + 'This is my paragraph and it changes color when you click it' + '</p>');

$myParagraph.appendTo('body');

$myParagraph.click(function(){
    let cVal = randomVal(0,colors.length);
    $myParagraph.css('color', colors[cVal]);
})

let $spanBtn = $('<button>' + 'Add my Name' + '</button>' );
$spanBtn.appendTo('body');


let $spanDiv = $('<div>' + '</div>');
$spanDiv.appendTo('body');

$spanBtn.click(function(){
let $mySpan = $('<span>' + 'Dustin A Pierson '+ '<span>');
$mySpan.appendTo($spanDiv);

})

let myFriends = ['alysia','joshua','ben','fawn','william','sarah','nathan','hannah','paul','angie',];

let $ulBtn = $('<button>' + 'Make a list' + '</button>');
$ulBtn.appendTo('body');

let $myUl = $('<ul>' + '</ul>');
$myUl.appendTo('body');

$ulBtn.click(function(){
    for (let i = 0; i < myFriends.length; i++){
    
    let $myLi = $('<li>' + `${myFriends[i]}` + '</li>');
    $myLi.appendTo($myUl);
    
    }
    
})

