
const divArray = [];

for(let i = 0 ; i< 10 ; i++){
    const div = document.createElement('div');
    //giving div an class with css properties  on
    div.className +='grid-box';
    divArray.push(div);

}
// here Im adding the css properties to div and finally 
//putting it on document.
for(let i = 0 ; i< 10 ; i++){
    divArray[i].style.height='20px';
    divArray[i].style.width='20px';
    divArray[i].style.color="black";
     document.body.appendChild(divArray[i]);
}





