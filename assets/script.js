var questions= [
  {
    question: 'how many licks does it take to get to the center of the tootsie pop',
    option: [
      'a', 'b', 'c', 'd'
    ],
    answer: 'b'
  },
  {
    question: 'is water good for you',
    option: [
      'a', 'b', 'c', 'd'
    ],
    answer: 'b'
  },
  {
    question: 'is smoking bad for you',
    option: [
      'a', 'b', 'c', 'd'
    ],
    answer: 'b'
  },
]
var questionSection = document.querySelector('.questions-section')
var question = document.querySelector('#question')
var options = document.querySelector('#options')
var count = 0
var startButton = document.querySelector('.quiz-start button')
startButton.addEventListener('click', function(){
  startButton.classList.add('hide')
  questionSection.classList.remove('hide')
  displayQuestion()
})


function displayQuestion(){
  question.textContent= questions[count].question
  for (let i = 1; i < 5; i++) {
    var li = document.querySelector(`#option-${i}`) 
    var button= document.createElement('button')
    button.textContent= questions[count].option[i-1]
    li.appendChild(button)
  }
}
