const question = [
    {
        'que': "which of the following is a markup language ?",
        'a': "HTML",
        'b': "css",
        'c': "javaScript",
        'd': "php",
        'correct': "a"
    },
    {
        'que': "when was javaScript launched ?",
        'a': "1996",
        'b': "1995",
        'c': "1994",
        'd': "none of the above",
        'correct': "b"
    },
    {
        'que': "what does css stands for ?",
        'a': "Hypertext Markup Language",
        'b': "Casecading Style Sheet",
        'c': "object oriented Language",
        'd': "None of the above",
        'correct': "b"
    }
]
let index = 0;
let total=question.length;
let right=0, wrong=0;
const quebox = document.getElementById("quebox");
const optionInputs = document.querySelectorAll(".opt");
// const optionInputsA=document.querySelector(".options1");
// const optionInputsB=document.querySelector(".options2");
// const optionInputsC=document.querySelector(".options3");
// const optionInputsD=document.querySelector(".options4");
var data=0;
const loadQuestion = () => {
    if(index==total){
        return endQuiz()
    }
    reset();
    data = question[index]
    // console.log(data)
    quebox.innerText = `${index + 1})${data.que}`

    // optionInputsA.innerText=data.a;
    // optionInputsB.innerText=data.b;
    // optionInputsC.innerText=data.c;
    // optionInputsD.innerText=data.d;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const answer = getAnswer()
    if(answer==data.correct){
        right++;
    }
    else{
        wrong++
    }
    index++;
    loadQuestion();
    return;
}


const getAnswer = () => {
    let ans;
    optionInputs.forEach((input) => {
        if (input.checked) {
            ans=input.value
            // console.log(input.value)
        } 
    })
    return ans;
}

const reset=()=>
{
    optionInputs.forEach((input) => {
        
        input.checked=false;
    })
}

const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <h3>Thank you for playing the Quiz</h3>
    <h2>${right}/${total} are correct</h2>
    `
}
loadQuestion();
