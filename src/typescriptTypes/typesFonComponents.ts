import type { Lang } from "./ContextThemeAndLang";

type LiArrayItem = 
  { id: number; option: string }[] 
  | { id: number; text: string }[];

export interface ForUl {
    liArrayRu : LiArrayItem;
    liArrayAz : LiArrayItem;
    lang : Lang
}

export interface ForSection {
    title : string;
    description : {id: number, text : string} []; 
    children : React.ReactNode;
}

export interface ForStringAndChildren {
    text :string;
    children: React.ReactNode;
}

export interface ForTitleTest {
  title: string;
  style? : string;
  description: {
    first: string;
    second: string;
    third: string;
    fourth: string;
    five: string;
  };
  children? : React.ReactNode;
}

export interface FormQuestionsProps {
  questions: {
    id: string | number;
    question: string;
    answers: {
      value: string | number;
      label: string;
    }[];
  }[];
  userAnswers: Record<string, string>;
  setUserAnswers: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

export interface TestBlocksProps {
  title: string;
  questions: {
    id: string | number;
    question: string;
    answers: {
      value: string | number;
      label: string;
    }[];
  }[];
  userAnswers: Record<string, string>;
  setUserAnswers: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

export interface TestQProps {
  userAnswers: Record<string, string>;
  setUserAnswers: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

