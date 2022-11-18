//Test console
console.log('js');


//Start of Button Section

//getElementById selects the button element
const button = document.getElementById('button');

//the function passed through the addEventListener means it will get called 
//everytime the button is clicked
button.addEventListener('click', () => {
//window.open opens up the website and _blank has it open in a new tab
    window.open('https://www.lexus.com/future/RZ', '_blank');
});

//End of Button Section

