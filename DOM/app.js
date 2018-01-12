

let btn = document.createElement('button')
let btnTxt = document.createTextNode("Click Me")
document.body.appendChild(btn);
btn.appendChild(btnTxt);

let boxBtn = document.getElementById("mybutton")
let txtBox = document.getElementById("myTextbox");
let boxTxt = txtBox.firstChild;
console.log(boxTxt);

let myDiv = document.getElementById("myDiv");
myDiv.style.backgroundColor = 'red';
myDiv.style.height = '3em';
myDiv.style.width = '3em';

let para = document.createElement('p')
let paraTxt = document.createTextNode('This is my paragraph text, not too long, not too short, just right!')
document.body.appendChild(para);
para.appendChild(paraTxt);


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