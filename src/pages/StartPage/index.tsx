import React from "react"
import { isMobile } from "react-device-detect"
import styled from "styled-components"

import Button from "../../components/Button"
import { Paragraph } from "../../components/Paragraph"


type StartPageProps = {
  onStart: () => void
}

export const StartPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1rem; 
`

export const TitleBox = styled.div`
  display: flex;
  margin-bottom: 7.5rem;
  align-items: center;
  flex: 1 1 0;

  svg {
    width: 3.5rem;
    height: 1.625rem;
  }
  
  @media screen and (min-width: 948px) {
    flex: 0 1 0;

    svg {
      width: 10.5rem;
      height: 4.875rem; 
    }
  }

`

export const Header = styled.h1`
  font-style: normal;
  font-weight: 300;
  font-size: 2rem;
  line-height: 2.3125rem;

  color: #C0D7ED;

  margin: 0;
  margin-right: 0.75rem;

  @media screen and (min-width: 948px) {
    font-size: 4.5rem;
    line-height: 5.25rem;

    margin-right: 2rem;
  }
`

export const StypedParagraph = styled(Paragraph)`
  font-weight: 300;
`

export const EnterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.66666C14.1633 2.66668 14.3209 2.72663 14.4429 2.83513C14.5649 2.94364 14.6429 3.09316 14.662 3.25532L14.6667 3.33332V7.66666C14.6667 8.26337 14.4381 8.83742 14.028 9.27079C13.6178 9.70417 13.0571 9.96392 12.4613 9.99666L12.3333 9.99999H3.60999L5.80466 12.1953C5.91945 12.3101 5.9884 12.4629 5.99859 12.6249C6.00877 12.7869 5.9595 12.9471 5.85999 13.0753L5.80466 13.138C5.68987 13.2528 5.53713 13.3217 5.37512 13.3319C5.2131 13.3421 5.05293 13.2928 4.92466 13.1933L4.862 13.138L1.52866 9.80466C1.50531 9.78138 1.4837 9.75643 1.46399 9.72999L1.41666 9.65666L1.38066 9.58066L1.35733 9.51066L1.34066 9.43266L1.33599 9.39266L1.33333 9.33332L1.33533 9.28332L1.34666 9.19932L1.36666 9.12532L1.39599 9.05132L1.43066 8.98599L1.47333 8.92466L1.52866 8.86199L4.862 5.52866C4.98197 5.40909 5.14295 5.33967 5.31225 5.3345C5.48155 5.32933 5.64647 5.3888 5.77351 5.50082C5.90056 5.61284 5.9802 5.76902 5.99626 5.93764C6.01232 6.10625 5.9636 6.27466 5.85999 6.40866L5.80466 6.47132L3.60999 8.66666H12.3333C12.5818 8.66666 12.8214 8.57415 13.0054 8.40716C13.1894 8.24016 13.3046 8.01064 13.3287 7.76332L13.3333 7.66666V3.33332C13.3333 3.15651 13.4036 2.98694 13.5286 2.86192C13.6536 2.73689 13.8232 2.66666 14 2.66666Z" fill="#E8E8E8" />
  </svg>
)

const SwichIcon = () => (
  <svg width="168" height="78" viewBox="0 0 168 78" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1.5" y="4.5" width="165" height="70" rx="35" fill="#328BDD" stroke="#8FC0ED" strokeWidth="3" />
    <circle cx="129" cy="39" r="37.5" fill="#BEDAF3" stroke="#F1F8FF" strokeWidth="3" />
  </svg>

)

const StartPage: React.FC<StartPageProps> = ({ onStart }) => (
  <StartPageContainer>
    <TitleBox>
      <Header>insurance</Header>
      <SwichIcon />
    </TitleBox>
    <Button sizing={isMobile ? "stretch" : "lg"} onClick={onStart}>Let&apos;s do it</Button>
    {!isMobile && <StypedParagraph>focus and press <strong>Enter</strong> <EnterIcon /></StypedParagraph>}
  </StartPageContainer>
)

export default StartPage
