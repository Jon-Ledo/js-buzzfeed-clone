import { answers } from "../data/answers.js"
import { handleClick } from "./handleClick.js"

export function showAnswer(chosenAnswers) {
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

  const answerDisplay = document.querySelector('#answer')
  const answerBlock = document.createElement('div')
  answerBlock.classList.add('result-block')
  const answerTitle = document.createElement('h3')
  answerTitle.textContent = result.text
  const answerImage = document.createElement('img')
  answerImage.setAttribute('src', result.image)
  answerImage.setAttribute('alt', result.alt)

  answerBlock.append(answerTitle, answerImage)
  answerDisplay.append(answerBlock)
  

  const allResultBlocks = document.querySelectorAll('.result-block')
  allResultBlocks.forEach((resultBlock, index) => {
    if (index > 0) {
      answerDisplay.removeChild(resultBlock)
    }
  })
}