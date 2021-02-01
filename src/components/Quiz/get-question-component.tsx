import React from "react"

import { TextArea, TextInput, SingleChoice, MultipleChoice } from "./Questions"

import { Question as QuesionType, Choice } from "../../types"

type Props = {
  questionData: QuesionType
  setAnswer: (newAnswer: string[]) => void
}

export const getQuestionComponent: React.FC<Props> = ({ questionData, setAnswer }) => {
  const { question_type, multiline, multiple, answer, choices, identifier } = questionData

  switch (question_type) {
    case "text":
      const isMultiline = multiline === "true"
      const answeredText = answer && answer[0]

      return (
        isMultiline ?
          <TextArea
            id={identifier}
            onChange={e => {
              setAnswer([e.target.value])
            }}
            value={answeredText || ""}
          />
          :
          <TextInput
            id={identifier}
            value={answeredText || ""}
            onChange={e => {
              setAnswer([e.target.value])
            }}
          />
      )
    case "multiple-choice":
      const isMultiple = multiple === "true"

      return (
        isMultiple ?
          <>
            {choices?.map((item: Choice, idx: number) => {
              const isAnswered = answer && answer.indexOf(item.value) >= 0

              return (
                <div key={idx}>
                  <MultipleChoice
                    id={`${item.value}-${idx}`}
                    name={item.value}
                    label={item.label}
                    checked={isAnswered || false}
                    onChange={e => {
                      if (e.target.checked)
                        setAnswer([
                          ...(answer ? answer : []),
                          item.value,
                        ])
                      else
                        setAnswer([
                          ...(answer
                            ? answer.filter(
                              (questionItem: string) =>
                                questionItem !== item.value
                            )
                            : []),
                        ])
                    }}
                  />
                </div>
              )
            })
            }
          </>
          :
          <>
            {choices?.map((item: Choice, idx: number) => {
              const handleSetAnswer = () => setAnswer([item.value])
              const isAnswered = answer && answer.indexOf(item.value) >= 0

              return (
                <div key={idx}>
                  <SingleChoice
                    id={`${item.value}-${idx}`}
                    checked={isAnswered || false}
                    name={identifier}
                    onChange={handleSetAnswer}
                    label={item.label}
                  />
                </div>
              )
            })}
          </>
      )
    default:
      return <></>
  }
}
