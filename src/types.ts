export enum SCREEN_STATUS {
  START_SCREEN, //start screen
  QUESTION_SCREEN, // main question and answer screen
  RESULT_SCREEN, //result screen
}

export interface Questionnaire {
  id: number;
  identifier: string;
  name: string;
  questions: Question[];
}

export interface Question {
  question_type: string;
  identifier: string;
  headline: string;
  description: any;
  required: boolean;
  multiple?: string;
  choices?: Choice[];
  jumps: Jump[];
  multiline?: string;
  answer?: string[];
}

export interface Choice {
  label: string;
  value: string;
  selected: boolean;
}

export interface Jump {
  conditions: Condition[];
  destination: Destination;
}

export interface Condition {
  field: string;
  value: string;
}

export interface Destination {
  id: string;
}
