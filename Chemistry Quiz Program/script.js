// creating variables to store the data from each required element.
const quiz = document.getElementById('chem-quiz')
const answerEle = document.querySelectorAll('.answer')
const questionEle = document.getElementById('Question')
const aText = document.getElementById('aText')
const bText = document.getElementById('bText')
const cText = document.getElementById('cText')
const dText = document.getElementById('dText')
const btnSubmit = document.getElementById('submit-quiz')

// creating variables to store the marks earned, and the current question.
var marks = 0;
let currQuestion = 0;

// declaring the array of questions to be prompted to the user.
const quizQuestions = [
    {   
        // QUESTION: 1.
        question: "What is the chemical symbol for Sodium?",
        a: "Pa",
        b: "Na",
        c: "Se",
        d: "Fe",
        correctAns: "b",
    },
    {
        // QUESTION: 2.
        question: "Who is considered the father of the periodic table?",
        a: "Albert Einstein",
        b: "Richard Feynman",
        c: "Dmitri Mendeleev",
        d: "Gottfried Wilhelm Leibniz",
        correctAns: "c",
    },
    {
        // QUESTION: 3.
        question: "What does IUPAC stand for?",
        a: "International Union of Pure and Applied Chemistry",
        b: "International United People Accredited to Chemistry",
        c: "International Unlinked Polonium Acting Concentration",
        d: "None of the above",
        correctAns: "a",
    },
    {   
        // QUESTION: 4.
        question: "The hydroxyl group is represented by which of the following:",
        a: "-OH",
        b: "-COOH",
        c: "-SH",
        d: "-CO2",
        correctAns: "a",
    },
];

// calling the display function to put out the questions and options.
displayQuiz()

// creating a function for the non-selected options.
function nonSelectedAnswers() {

    // a
    answerEle.forEach(answerEle => answerEle.checked = false);
}

// creating a function to display the questions.
function displayQuiz() {

    // calling the function for non-selected function.
    nonSelectedAnswers();

    // creating a variable to store the current question as the current data being analyzed.
    const currData = quizQuestions[currQuestion]

    // outputting the question.
    questionEle.innerText = currData.question

    // outputting the options.
    aText.innerText = currData.a
    bText.innerText = currData.b
    cText.innerText = currData.c
    dText.innerText = currData.d
}

// creating a function to retrieve the selected option. 
function selectedAnswers() {

    // retrieving the id of the checked option.
    let answer; 
    answerEle.forEach(answerEle => {

        if (answerEle.checked) {
            answer = answerEle.id
        }
    });

    // returning the id of the checked option.
    return answer;
}

// listening for the submit button being clicked.
btnSubmit.addEventListener('click', () => {

    // validating the user's response.
    const answer = selectedAnswers()
    if (answer) {

        // incrementing the marks, if the validation was correct.
        if (answer === quizQuestions[currQuestion].correctAns){

            marks++;
        }

        // incrementing the question count.
        currQuestion++

        // ending the quiz if the max question count is reached.
        if (currQuestion === quizQuestions.length){

            alert("You have completed the quiz, your score is: " + ((marks / quizQuestions.length) * 100) + "%");
        }

        // continuing to display.
        else {
            displayQuiz();
        }
    }   
});