import React from "react"
import { isMobile } from "react-device-detect"
import styled from "styled-components"

import { Question as QuesionType } from "../../../../types"

export type FooterProps = {
  questions: QuesionType[]
  completionPercentage: string
  currentQuestion: number
  isDisabledLeftIcon: boolean
  handleClickNext: () => void
  handleClickPrev: () => void
}

const FooterContainer = styled.div`
	display: flex;
	align-items: flex-end;

	margin: auto 0 0 0;
	justify-content: center;
`

const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ProgressStepBox = styled.div`
	display: flex;
  flex-direction: column;

  margin: 0 0.75rem;

  @media screen and (min-width: 948px) {
    margin: 0 2.5rem;
  }
`

const IconLeftBox = styled.div<{ isDisabledLeftIcon: boolean }>`
	height: fit-content;

	&:hover {
		cursor: pointer;
	}

	&:focus {
		outline: none;
	}

	${props => props.isDisabledLeftIcon && `
		display: none;
	`}
`

const IconRightBox = styled.div`
	height: fit-content;

	&:hover {
		cursor: pointer;
	}

	&:focus {
		outline: none;
	}
`

const ProgressStepItem = styled.div<{ currentQuestion: number }>`
  background: #156FC2;
  
  margin-right: 0.375rem;
  margin-top: 0.375rem;
  
  width: 1rem;
  height: 0.5rem;

	&:nth-of-type(${props => props.currentQuestion}) {
		background: #D3E5F5;
  }
  
  @media screen and (min-width: 948px) {
    width: 1.5rem;
    height: 0.5rem;

    margin-right: 0.5rem;
    margin-top: 0;
  }
`

const ProgressTitle = styled.p`
  font-weight: 300;
  font-size: 0.75rem;
  line-height: 0.875rem;
  
  color: #E2EDF8;

  margin-bottom: 0.375rem;

  @media screen and (min-width: 948px) {
    font-size: 1rem;
    line-height: 1.1875rem;
    
    margin-bottom: 0.5rem;
  }
`

const IconLeftDesktop = () => (
  <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M8.70796 1.29196C8.80108 1.38485 8.87497 1.4952 8.92538 1.61669C8.9758 1.73818 9.00174 1.86842 9.00174 1.99996C9.00174 2.13149 8.9758 2.26173 8.92538 2.38322C8.87497 2.50471 8.80108 2.61506 8.70796 2.70796L3.41396 7.99996L8.70796 13.292C8.80093 13.3849 8.87469 13.4953 8.925 13.6168C8.97532 13.7383 9.00122 13.8685 9.00122 14C9.00122 14.1314 8.97532 14.2616 8.925 14.3831C8.87469 14.5046 8.80093 14.615 8.70796 14.708C8.61498 14.8009 8.5046 14.8747 8.38312 14.925C8.26164 14.9753 8.13144 15.0012 7.99996 15.0012C7.86847 15.0012 7.73827 14.9753 7.61679 14.925C7.49531 14.8747 7.38493 14.8009 7.29196 14.708L1.29196 8.70796C1.19883 8.61506 1.12494 8.50471 1.07453 8.38322C1.02412 8.26173 0.998169 8.13149 0.998169 7.99996C0.998169 7.86842 1.02412 7.73818 1.07453 7.61669C1.12494 7.4952 1.19883 7.38485 1.29196 7.29196L7.29196 1.29196C7.38485 1.19883 7.4952 1.12494 7.61669 1.07453C7.73818 1.02412 7.86842 0.998169 7.99996 0.998169C8.13149 0.998169 8.26173 1.02412 8.38322 1.07453C8.50471 1.12494 8.61507 1.19883 8.70796 1.29196Z" fill="#E9F1F9" />
    <path fillRule="evenodd" clipRule="evenodd" d="M2 8C2 7.73478 2.10536 7.48043 2.29289 7.29289C2.48043 7.10536 2.73478 7 3 7H24C24.2652 7 24.5196 7.10536 24.7071 7.29289C24.8946 7.48043 25 7.73478 25 8C25 8.26522 24.8946 8.51957 24.7071 8.70711C24.5196 8.89464 24.2652 9 24 9H3C2.73478 9 2.48043 8.89464 2.29289 8.70711C2.10536 8.51957 2 8.26522 2 8Z" fill="#E9F1F9" />
  </svg>
)

const IconRightDesktop = () => (
  <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M16.2922 1.29196C16.199 1.38485 16.1252 1.4952 16.0747 1.61669C16.0243 1.73818 15.9984 1.86842 15.9984 1.99996C15.9984 2.13149 16.0243 2.26173 16.0747 2.38322C16.1252 2.50471 16.199 2.61506 16.2922 2.70796L21.5862 7.99996L16.2922 13.292C16.1992 13.3849 16.1254 13.4953 16.0751 13.6168C16.0248 13.7383 15.9989 13.8685 15.9989 14C15.9989 14.1314 16.0248 14.2616 16.0751 14.3831C16.1254 14.5046 16.1992 14.615 16.2922 14.708C16.3851 14.8009 16.4955 14.8747 16.617 14.925C16.7385 14.9753 16.8687 15.0012 17.0002 15.0012C17.1317 15.0012 17.2619 14.9753 17.3833 14.925C17.5048 14.8747 17.6152 14.8009 17.7082 14.708L23.7082 8.70796C23.8013 8.61506 23.8752 8.50471 23.9256 8.38322C23.976 8.26173 24.002 8.13149 24.002 7.99996C24.002 7.86842 23.976 7.73818 23.9256 7.61669C23.8752 7.4952 23.8013 7.38485 23.7082 7.29196L17.7082 1.29196C17.6153 1.19883 17.5049 1.12494 17.3834 1.07453C17.2619 1.02412 17.1317 0.998169 17.0002 0.998169C16.8686 0.998169 16.7384 1.02412 16.6169 1.07453C16.4954 1.12494 16.3851 1.19883 16.2922 1.29196Z" fill="#E9F1F9" />
    <path fillRule="evenodd" clipRule="evenodd" d="M23 8C23 7.73478 22.8946 7.48043 22.7071 7.29289C22.5196 7.10536 22.2652 7 22 7H1C0.734783 7 0.480429 7.10536 0.292892 7.29289C0.105356 7.48043 0 7.73478 0 8C0 8.26522 0.105356 8.51957 0.292892 8.70711C0.480429 8.89464 0.734783 9 1 9H22C22.2652 9 22.5196 8.89464 22.7071 8.70711C22.8946 8.51957 23 8.26522 23 8Z" fill="#E9F1F9" />
  </svg>
)

const IconLeftMobile = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M14.7823 6.22034C14.8522 6.29001 14.9076 6.37277 14.9454 6.46389C14.9832 6.55501 15.0027 6.65269 15.0027 6.75134C15.0027 6.84999 14.9832 6.94767 14.9454 7.03879C14.9076 7.12991 14.8522 7.21267 14.7823 7.28234L10.8118 11.2513L14.7823 15.2203C14.8521 15.2901 14.9074 15.3729 14.9451 15.464C14.9829 15.5551 15.0023 15.6527 15.0023 15.7513C15.0023 15.85 14.9829 15.9476 14.9451 16.0387C14.9074 16.1298 14.8521 16.2126 14.7823 16.2823C14.7126 16.3521 14.6298 16.4074 14.5387 16.4451C14.4476 16.4829 14.35 16.5023 14.2513 16.5023C14.1527 16.5023 14.0551 16.4829 13.964 16.4451C13.8729 16.4074 13.7901 16.3521 13.7203 16.2823L9.22034 11.7823C9.1505 11.7127 9.09508 11.6299 9.05727 11.5388C9.01946 11.4477 9 11.35 9 11.2513C9 11.1527 9.01946 11.055 9.05727 10.9639C9.09508 10.8728 9.1505 10.79 9.22034 10.7203L13.7203 6.22034C13.79 6.1505 13.8728 6.09508 13.9639 6.05727C14.055 6.01946 14.1527 6 14.2513 6C14.35 6 14.4477 6.01946 14.5388 6.05727C14.6299 6.09508 14.7127 6.1505 14.7823 6.22034Z" fill="#E9F1F9" />
  </svg>
)

const IconRightMobile = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M9.21766 6.22034C9.14781 6.29001 9.0924 6.37277 9.05459 6.46389C9.01678 6.55501 8.99732 6.65269 8.99732 6.75134C8.99732 6.84999 9.01678 6.94767 9.05459 7.03879C9.0924 7.12991 9.14781 7.21267 9.21766 7.28234L13.1882 11.2513L9.21766 15.2203C9.14793 15.2901 9.09261 15.3729 9.05487 15.464C9.01714 15.5551 8.99771 15.6527 8.99771 15.7513C8.99771 15.85 9.01714 15.9476 9.05487 16.0387C9.09261 16.1298 9.14793 16.2126 9.21766 16.2823C9.28739 16.3521 9.37017 16.4074 9.46128 16.4451C9.55239 16.4829 9.65004 16.5023 9.74866 16.5023C9.84728 16.5023 9.94493 16.4829 10.036 16.4451C10.1271 16.4074 10.2099 16.3521 10.2797 16.2823L14.7797 11.7823C14.8495 11.7127 14.9049 11.6299 14.9427 11.5388C14.9805 11.4477 15 11.35 15 11.2513C15 11.1527 14.9805 11.055 14.9427 10.9639C14.9049 10.8728 14.8495 10.79 14.7797 10.7203L10.2797 6.22034C10.21 6.1505 10.1272 6.09508 10.0361 6.05727C9.94499 6.01946 9.84731 6 9.74866 6C9.65001 6 9.55233 6.01946 9.46121 6.05727C9.37009 6.09508 9.28733 6.1505 9.21766 6.22034Z" fill="#E9F1F9" />
  </svg>

)

const Footer: React.FC<FooterProps> = ({
  questions,
  currentQuestion,
  completionPercentage,
  isDisabledLeftIcon,
  handleClickNext,
  handleClickPrev
}) => (
    <FooterContainer>
      <IconLeftBox
        role="button"
        tabIndex={0}
        isDisabledLeftIcon={isDisabledLeftIcon}
        onClick={handleClickPrev}
      >
        {isMobile ? <IconLeftMobile /> : <IconLeftDesktop />}
      </IconLeftBox>
      <ProgressStepBox>
        <ProgressTitle>{completionPercentage}% complited</ProgressTitle>
        <FlexRow>
          {questions.map(question => (
            <ProgressStepItem key={question.identifier} currentQuestion={currentQuestion} />
          ))}
        </FlexRow>
      </ProgressStepBox>
      <IconRightBox
        role="button"
        tabIndex={0}
        onClick={handleClickNext}
      >
        {isMobile ? <IconRightMobile /> : <IconRightDesktop />}
      </IconRightBox>
    </FooterContainer>
  )

export default Footer
