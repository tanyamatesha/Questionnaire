import React, { useState } from "react"
import { isMobile } from "react-device-detect"
import styled from "styled-components"

import Footer from "./components/Footer"
import Button from "../../components/Button"
import { Paragraph } from "../../components/Paragraph"
import { getQuestionComponent } from "../../components/Quiz/get-question-component"

import { Question as QuesionType } from "../../types"

type QuestionPageProps = {
  questions: QuesionType[]
  setAnswers: (newAnswers: QuesionType[]) => void
  gotoResult: () => void
}

const QuestionPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 1.5rem 1rem;

  @media screen and (min-width: 948px) {    
    padding: 1.75rem;
  }
`

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: auto 0;
    
  @media screen and (min-width: 948px) {    
    margin: auto;
  }
`

const ErrorText = styled.p`
  text-align: center;

  color: red;

  margin-bottom: 2rem;
`

const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;  

  align-items: center;

  margin-bottom: 1.625rem;
  
  @media screen and (min-width: 948px) {  
    flex-direction: row;  

    margin-bottom: 3rem;
  }
`

const H1 = styled.h1`
  font-style: normal;
  font-weight: 300;
  font-size: 2rem;
  line-height: 2.3125rem;

  color: #E0E0E0;
`

const H2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.625rem;

  align-self: end;

  color: #E0E0E0;

  @media screen and (min-width: 948px) {    
    font-size: 1.25rem;
    line-height: 1.4375rem;

    align-self: center;
  }
`

const CurQuestionBox = styled.div`
  display: flex;
  align-items: center;

  margin-right: 0;
  margin-bottom: 2rem;

  @media screen and (min-width: 948px) {    
    margin-right: 2rem;
    margin-bottom: 0;
  }
`

const P = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.1875rem;

  color: #B2D0E8;

  margin-left: 0.25rem;
`

const QuestionPage = ({ questions, gotoResult, setAnswers }: QuestionPageProps) => {
  const [submitted, setSubmitted] = useState(false)
  const [curQuestion, setCurQuestion] = useState(0)

  const question = questions[curQuestion]
  const { headline, description, answer, required, question_type } = question

  const currentQuestion = curQuestion + 1
  const previousQuestion = curQuestion - 1

  const isValid = required && answer && answer?.length === 0

  const isMultipleQuestionType = question_type === "multiple-choice"
  const isTextQuestionType = question_type === "text"

  const completionPercentage = (100 / questions.length * (currentQuestion)).toFixed(0)

  const handleSetAnswers = (newAnswer: string[]) => {
    setAnswers([
      ...questions.map((item, idx) => {
        if (idx === curQuestion) {
          return {
            ...item,
            answer: [...newAnswer],
          }
        } else return item
      }),
    ])
  }
  const handleClickNext = () => {
    setSubmitted(true)
    if (isValid)
      return
    setSubmitted(false)
    if (curQuestion < questions.length - 1) {
      setCurQuestion(currentQuestion)
    }
    else {
      gotoResult()
    }
  }
  const handleClickPrev = () => setCurQuestion(previousQuestion)

  return (
    <QuestionPageContainer>
      <QuestionContainer>
        <HeaderBox>
          <CurQuestionBox>
            <H1>{currentQuestion}</H1>
            <P>{`/${questions.length}`}</P>
          </CurQuestionBox>
          <H2>{headline}</H2>
        </HeaderBox>
        {description && <Paragraph>{description}</Paragraph>}
        {submitted && isValid && (
          <ErrorText>
            {isMultipleQuestionType && "Plase, select at least one option."}
            {isTextQuestionType && "Please, fill the input box."}
          </ErrorText>
        )}
        {getQuestionComponent({ questionData: question, setAnswer: handleSetAnswers })}
        <Button sizing={isMobile ? "stretch" : "lg"} onClick={handleClickNext}>Next</Button>
      </QuestionContainer>
      <Footer
        questions={questions}
        completionPercentage={completionPercentage}
        handleClickNext={handleClickNext}
        currentQuestion={currentQuestion}
        handleClickPrev={handleClickPrev}
        isDisabledLeftIcon={curQuestion <= 0}
      />
    </QuestionPageContainer>
  )
}

export default QuestionPage
