

let btn = document.createElement('button');
let btnTxt = document.createTextNode("Click Me");
document.body.appendChild(btn);
btn.appendChild(btnTxt);

let boxBtn = document.getElementById("mybutton")
let txtBox = document.getElementById("myTextbox");
let boxTxt = txtBox.val();
console.log(boxTxt);

let myDiv = document.getElementById("myDiv");
myDiv.style.backgroundColor = 'red';
myDiv.style.height = '3em';
myDiv.style.width = '3em';

let para = document.createElement('p')
let paraTxt = document.createTextNode('This is my paragraph text, not too long, not too short, just right!');
document.body.appendChild(para);
para.appendChild(paraTxt);

let emptyDiv = document.createElement('div');
document.body.appendChild(emptyDiv);
let divBtn = document.createElement('button');
let divBtnTxt = document.createTextNode('Make Span');
document.body.appendChild(divBtn);
divBtn.appendChild(divBtnTxt);

let ulBtn = document.getElementById("ulBtn");
let fList = document.getElementById("fList");

btn.addEventListener('click', function () {
    alert('What a Nice Message');
});

boxBtn.addEventListener('click', function () {
    alert(boxTxt);
});

myDiv.addEventListener('mouseenter', function () {
    myDiv.style.backgroundColor = 'black';

})

myDiv.addEventListener('mouseleave', function () {
    myDiv.style.backgroundColor = 'red';

})

//para.addEventListener('click', function(){
//  para.style.color = 'red';
//})

para.addEventListener('click', function () {
    let colors = [
        {
            color: 'blue',
        },
        {
            color: 'orange',
        },
        {
            color: 'purple',
        },
        {
            color: 'red',
        },
        {
            color: 'green',
        },

    ]

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    let x = getRandomInt(5);
    para.style.color = colors[x].color

})

divBtn.addEventListener('click', function () {
    let mySpan = document.createElement('span');
    let mySpanTxt = document.createTextNode(' Dustin A Pierson ');
    emptyDiv.appendChild(mySpan);
    mySpan.appendChild(mySpanTxt);


})
ulBtn.addEventListener('click', function () {
    let family = [' alysia ', ' joshua ', ' william ', ' katie ', ' rachel ', ' paul ', ' angie ', ' christy ', ' nathan ', ' hannah '];
    

    for (let x = 0; x < family.length; x++) {
        let li = document.createElement('li')
        let liTxt = document.createTextNode(family[x])
        fList.appendChild(li);
        li.appendChild(liTxt);

    }

});