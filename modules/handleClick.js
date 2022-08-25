import { disableQuestionBlock } from "./disableQuestionBlock.js"
import { showAnswer } from "./showAnswer.js"

export function handleClick(questionId, chosenAnswer, unansweredQuestions) {
  const chosenAnswers = []

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
    showAnswer(chosenAnswers)
    // scroll to answer div
    location.href = '#answer'
  }
}