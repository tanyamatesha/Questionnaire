
import React from "react"
import { isMobile } from "react-device-detect"

import Button from "../../components/Button"
import { StartPageContainer, TitleBox, Header, EnterIcon, StypedParagraph } from "../StartPage"

type StartPageProps = {
  gotoStart: () => void
}

const ResultPage: React.FC<StartPageProps> = ({ gotoStart }) => (
  <StartPageContainer>
    <TitleBox>
      <Header>Thank You!</Header>
    </TitleBox>
    <Button sizing={isMobile ? "stretch" : "lg"} onClick={gotoStart}>Let&apos;s start again</Button>
    {!isMobile && <StypedParagraph>focus and press <strong>Enter</strong> <EnterIcon /></StypedParagraph>}
  </StartPageContainer>
)

export default ResultPage

