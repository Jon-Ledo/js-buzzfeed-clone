import { questions } from "../data/questions.js"
import { handleClick } from "./handleClick.js"

export function populateQuestions () {
  const questionDisplay = document.querySelector('#questions')
  const unansweredQuestions = []

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
      answerBlock.addEventListener('click', () => handleClick(question.id, answer.text, unansweredQuestions))


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