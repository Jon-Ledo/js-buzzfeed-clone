const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const questions = [
  {
    id: 0,
    text: "Pick a vacation destination:",
    answers: [
      {
        text: 'New York',
        image: "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        alt: "Photo of the empire state building during day time",
        credit: "Ben Dumond"
      },
      {
        text: 'Toronto',
        image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
        alt: "Photo from a helicopter tour over downtown Toronto, during sunset",
        credit: "Mwangi Gatheca"
      },
      {
        text: 'Paris',
        image: "https://images.unsplash.com/photo-1568684333877-4d39f2c871c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        alt: "Photo of the Eiffel tower lit up in Paris France",
        credit: "Alex Azabache"
      },
      {
        text: 'London',
        image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        alt: "Photo of Parliament and Big Ben",
        credit: "Marcin Nowak"
      }
    ]
  },

  {
    id: 1,
    text: "Pick some food:",
    answers: [
      {
        text: "Pizza",
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "pizza with herbs mushrooms",
        credit: "Vitalii Chernopyskyi"
      },
      {
        text: "Salad",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Vegan salad bowl",
        credit: "Anna Pelzer"
      },
      {
        text: "BBQ",
        image: "https://images.unsplash.com/photo-1628294896516-344152572ee8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Beef skewer with onion, peppers, Indian curry style ",
        credit: "Dolores Preciado"
      },
      {
        text: "Ice Cream",
        image: "https://images.unsplash.com/photo-1587563974073-6dabdbbadac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        alt: "closeup of blue and pink icecream cone",
        credit: "La Albuquerque"
      }
    ]
  },
  {
    id: 2,
    text: "Pick a home:",
    answers: [
      {
        text: "Condo",
        image: "https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Photo of condos overlooking large pool and garden",
        credit: "Paul Szewczyk"
      },
      {
        text: "Modern",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        alt: "modern designed home",
        credit: "R ARCHITECTURE"
      },
      {
        text: "House",
        image: "https://images.unsplash.com/photo-1593604340846-4fbe9763a8f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        alt: "simple hosue with a patio deck and trees",
        credit: "Birgit Loit"
      },
      {
        text: "Cabin in Nature",
        image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "wooden cabin in the woods",
        credit: "Olivier Guillard"
      }
    ]
  }
]

const answers = [
  {
    combination: ["New York", "Pizza", "Condo" ],
    text: "Blue Cheese",
    image: "https://images.unsplash.com/photo-1626957341926-98752fc2ba90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "photo of blue cheese",
    credit: "Towfiqu barbhuiya"
  },
  {
    combination: ["Toronto", "Salad", "House" ],
    text: "Cheddar",
    image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "photo of cheddar cheese",
    credit: "Önder Örtel"
  },
  {
    combination: ["Paris", "BBQ", "House" ],
    text: "Brie",
    image: "https://images.unsplash.com/photo-1588350492670-e2f4a16a4fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    alt: "photo of brie cheese next to slices of bread",
    credit: "iam_os"
  },
  {
    combination: ["London", "Pizza", "Condo" ],
    text: "Mozarella Balls",
    image: "https://images.unsplash.com/photo-1600455575515-715819f9ac39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    alt: "photo of mozarella balls in a bowl",
    credit: "serjan midili"
  }

]

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