export function disableQuestionBlock (questionId, chosenAnswer) {
  const currentQuestionBlock = document.getElementById(questionId + "-questions")

  Array.from(currentQuestionBlock.children).forEach(block => {
    if (block.children.item(1).innerText !== chosenAnswer) {
      block.style.opacity = "50%"
    }
  })
}