import React, { useState, useEffect } from "react"

import StartPage from "./pages/StartPage"
import QuestionPage from "./pages/QuestionPage"
import ResultPage from "./pages/ResultPage"

import questionsJson from "./questionnaire.json"
import { SCREEN_STATUS, Question } from "./types"

import * as AppContainer from "./styles"

const App = () => {
  const [questions, setQuestions] = useState<Question[]>([])
  const [curScreen, setCurScreen] = useState<SCREEN_STATUS>(SCREEN_STATUS.START_SCREEN)

  const initAnswerData = () => {
    setQuestions([
      ...questionsJson.questionnaire.questions.map((item) => {
        return {
          ...item,
          answer: [],
        }
      }),
    ])
  }

  useEffect(() => {
    initAnswerData()
  }, [])

  const handleSetAnswers = (newAnswers: Question[]) => setQuestions([...newAnswers])
  const handleOnStart = () => setCurScreen(SCREEN_STATUS.QUESTION_SCREEN)
  const handleGotoResult = () => setCurScreen(SCREEN_STATUS.RESULT_SCREEN)
  const handleGotoStart = () => {
    setCurScreen(SCREEN_STATUS.START_SCREEN)
    initAnswerData()
  }

  return (
    <AppContainer.Box>
      {curScreen === SCREEN_STATUS.START_SCREEN && (
        <StartPage
          onStart={handleOnStart}
        />
      )}
      {curScreen === SCREEN_STATUS.QUESTION_SCREEN && (
        <QuestionPage
          questions={questions}
          setAnswers={handleSetAnswers}
          gotoResult={handleGotoResult}
        />
      )}
      {curScreen === SCREEN_STATUS.RESULT_SCREEN && (
        <ResultPage
          gotoStart={handleGotoStart}
        />
      )}
    </AppContainer.Box>
  )
}

export default App
