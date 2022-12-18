const puzzleBoard=document.getElementById('puzzle');
const solveButton=document.getElementById('solve-button');
const submission=[];
const squares=81;

for(let i=0;i<squares;i++)
{
    const inputElement=document.createElement('input')
    inputElement.setAttribute('type','number')
    inputElement.setAttribute('min',1)
    inputElement.setAttribute('max',9)
    puzzleBoard.appendChild(inputElement)
}

const joinValues=()=>{
    const inputs=document.querySelectorAll('input')
    
    inputs.forEach(input => {
        if(input.value){
            submission.push(input.value)
        }
        else{
            submission.push('.')
        }
    });
    console.log(submission)
}

solveButton.addEventListener('click',joinValues)