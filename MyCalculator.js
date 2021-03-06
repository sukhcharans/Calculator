function getNumbers(){
    const number1 = parseFloat(document.getElementById('num1').value);
    const number2 = parseFloat(document.getElementById('num2').value);
    return number1;
}
buttons.onclick = function(event){
    let target = event.target;
    if(target.tagName != '+' || '-' || '*' || '/' || '='){
        return;
    } 
    else{
        let operator = target.value;
        console.log(operator);
    } 
    
}





