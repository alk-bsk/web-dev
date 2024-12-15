// let input1 = 10;
// let input2 = 20;

// let result = input1 + input2;

// console.log("Input1: "+ input1 );
// console.log("Input2: "+ input2);
// console.log(input1 + " + " + input2 + " = "+ result);

function calculate(oper){

    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    
    let input1Value = parseInt(input1.value);
    let input2Value = parseInt(input2.value);

    let result = '';

    if(oper === '+' ){
        result = input1Value + input2Value;
    }
    
    if(oper === '-' ){
        result = input1Value - input2Value;
    }

    if(oper === '*' ){
        result = input1Value * input2Value;
    }

    if(oper === '/' ){
        result = input1Value / input2Value;
    }

    let resultInput = document.getElementById("result");
    resultInput.value = result;

}

function addOfnNumber(){
    
    let n = document.getElementById('nId');

    let nValue = parseInt(n.value);
    
    let result = 0;
    //for
    //let i
    //i=1
    //i + 1

    for(let i=1; i<=nValue; i++){
        result = result + i;
    }

    let prob = document.getElementById('problem2');
    prob.innerHTML = "Result: "+result;

}