
var btn = document.querySelector('#btn');

btn.addEventListener('click', function(){
    
    var userInput = parseInt(document.querySelector("#answer").value);
    var result = fibonacci(userInput);
    var resultRecursive = fibonacciRecursive(userInput);
    
    const container = document.querySelector('#container');
    const header  = document.createElement('h3');
    header.style.color = 'blue';
    header.textContent = (result);
    container.appendChild(header);
    
    const header2  = document.createElement('h3');
    header2.style.color = 'red';
    header2.textContent = ('Recursive: ' + resultRecursive);
    console.log(resultRecursive);
    header.appendChild(header2);
    
});

function fibonacci(userInput){
    
    var sequence = [0, 1]
    
    for(var i = 2; i < userInput + 1; i++){
        
        sequence.push(sequence[i - 2] + sequence[i -1]);
        
    }
    return sequence[userInput];
   
}

function fibonacciRecursive(userInput){
    
    if (userInput < 2){
        return userInput;
    }
    
    return fibonacciRecursive(userInput - 1) + fibonacciRecursive (userInput - 2);
    
}

