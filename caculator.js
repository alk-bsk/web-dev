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

function countVowel(){
    let sentence = document.getElementById('sentenceId');
    let senValue = sentence.value;

    let aCount= 0;
    let eCount= 0;
    let iCount= 0;
    let oCount= 0;
    let uCount= 0;

    for(let i=0; i< senValue.length; i++ ){

        if(senValue[i] === 'a' || senValue[i] === 'A'){
            aCount = aCount + 1;
        }

        if(senValue[i] === 'e' || senValue[i] === 'E'){
            eCount = eCount + 1;
        }

        if(senValue[i] === 'i' || senValue[i] === 'I'){
            iCount = iCount + 1;
        }

        if(senValue[i] === 'o' || senValue[i] === 'O'){
            oCount = oCount + 1;
        }

        if(senValue[i] === 'u' || senValue[i] === 'U'){
            uCount = uCount + 1;
        }

    }


    let resultP = document.getElementById('result3');
    resultP.innerHTML = `<ul>
        <li>A count: ${aCount}</li>
        <li>E count: ${eCount}</li>
        <li>I count: ${iCount}</li>
        <li>O count: ${oCount}</li>
        <li>U count: ${uCount}</li>
    </ul>`

    //console.log(senValue);
}

function reverseString(){
    let rev = document.getElementById('StringId');
    let revValue = rev.value;
    console.log(revValue);
    let result = '';

    for(let i = revValue.length-1; i>=0; i--){
        result = result + revValue[i];
    }


    let res = document.getElementById('result4');
    res.innerHTML = "Reverse String of "+ revValue +" is: " + result;
}