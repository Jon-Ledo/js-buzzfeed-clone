import { questions } from "./data/questions.js"
import { answers } from "./data/answers.js"

const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const unansweredQuestions = []
const chosenAnswers = []

function populateQuestions () {
  questions.forEach(question => {
    const titleBlock = document.createElement('div')
    titleBlock.id = question.id
    titleBlock.classList.add('title-block')
    const titleHeading = document.createElement('h2')
    titleHeading.textContent = question.text

    titleBlock.append(titleHeading)
    questionDisplay.append(titleBlock)

    const answersBlock = document.createElement('div')
    answersBlock.id = question.id + "-questions"
    answersBlock.classList.add('answer-options')

    unansweredQuestions.push(question.id)

    question.answers.forEach(answer => {
      const answerBlock = document.createElement('div')
      answerBlock.classList.add('answer-block')
      answerBlock.addEventListener('click', () => handleClick(question.id, answer.text))


      const answerImage = document.createElement('img')
      answerImage.setAttribute('src', answer.image)
      answerImage.setAttribute('alt', answer.alt)

      const answerTitle = document.createElement('h3')
      answerTitle.textContent = answer.text

      const answerInfo = document.createElement('p')
      const imageLink = document.createElement('a')
      imageLink.textContent = `Credit: ${answer.credit}`
      imageLink.setAttribute('href', answer.image)
      const sourceLink = document.createElement('a')
      sourceLink.textContent = 'Unsplash'
      sourceLink.setAttribute('href', 'https://www.unsplash.com')
      answerInfo.append(imageLink, ' from ', sourceLink)


      answerBlock.append(answerImage, answerTitle, answerInfo)
      answersBlock.append(answerBlock)
    })

    questionDisplay.append(answersBlock)
  })
}

populateQuestions()

function handleClick(questionId, chosenAnswer) {
  if (unansweredQuestions.includes(questionId)){
    chosenAnswers.push(chosenAnswer)
  }
  const itemToRemove = unansweredQuestions.indexOf(questionId)

  if (itemToRemove > -1) {
    unansweredQuestions.splice(itemToRemove, 1)
  }

  disableQuestionBlock(questionId, chosenAnswer)
  const lowestquestionId = Math.min(...unansweredQuestions)
  location.href = `#${lowestquestionId}`


  if (!unansweredQuestions.length) {
    // scroll to answer div
    location.href = '#answer'
    showAnswer()
  }
}

function showAnswer() {
  let result
  answers.forEach(answer => {
    if (
      chosenAnswers.includes(answer.combination[0]) + 
      chosenAnswers.includes(answer.combination[1]) + 
      chosenAnswers.includes(answer.combination[2])
    ) {
      result = answer
    } else {
      // first anwser object is default
      result = answers[0]
    }
  })

  const answerBlock = document.createElement('div')
  answerBlock.classList.add('result-block')
  const answerTitle = document.createElement('h3')
  answerTitle.textContent = result.text
  const answerImage = document.createElement('img')
  answerImage.setAttribute('src', result.image)
  answerImage.setAttribute('alt', result.alt)

  answerBlock.append(answerTitle, answerImage)
  answerDisplay.append(answerBlock)


  const allAnswerBlocks = document.querySelectorAll('.answer-block')
  Array.from(allAnswerBlocks).forEach(answerBlock => {
    answerBlock.replaceWith(answerBlock)
  })
}

function disableQuestionBlock (questionId, chosenAnswer) {
  const currentQuestionBlock = document.getElementById(questionId + "-questions")

  Array.from(currentQuestionBlock.children).forEach(block => {
    if (block.children.item(1).innerText !== chosenAnswer) {
      block.style.opacity = "50%"
    }
  })
}