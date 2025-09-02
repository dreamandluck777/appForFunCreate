import { useReducer, useState } from "react";
import { useLangOrTheme } from "../contextReducer/ThemeAndLang";
import { reducerChangeTestBlocks } from "../forReducer/functionChangeQuestions";
import { takeByLang } from "../functions/takeByLang";
import { testQuestions } from "../text/testQuestions";
import { Button } from "./Button";
import type {
  FormQuestionsProps,
  TestBlocksProps,
  TestQProps,
} from "../typescriptTypes/typesFonComponents";
import { TestResult } from "./TestResult";
import { calculateAnswers } from "../functions/writeYourType";


export function FormQuestions({
  questions,
  userAnswers,
  setUserAnswers,
}: FormQuestionsProps) {
  function setUserAnswere(question: string, answere: string) {
    setUserAnswers((prev) => ({ ...prev, [question]: answere }));
  }

  return (
    <div>
      {questions.map((q) => (
        <div key={q.id}>
          <p>{q.question}</p>
          {q.answers.map((a) => (
            <label key={a.value}>
              <input
                type="radio"
                name={`question-${q.id}`}
                checked={userAnswers[q.question] === a.label}
                onChange={() => setUserAnswere(q.question, a.label)}
              />
              <span>{a.label}</span>
            </label>
          ))}
        </div>
      ))}
    </div>
  );
}

export function TestBlocks({
  title,
  questions,
  userAnswers,
  setUserAnswers,
}: TestBlocksProps) {
  return (
    <div className="divWrapperForQuestions">
      <h2>{title}</h2>
      <FormQuestions
        questions={questions}
        userAnswers={userAnswers}
        setUserAnswers={setUserAnswers}
      />
    </div>
  );
}

export function TestQFirst({ userAnswers, setUserAnswers }: TestQProps) {
  const { state } = useLangOrTheme();
  return (
    <TestBlocks
      questions={takeByLang(
        testQuestions.firstSectionQuestions.ru,
        testQuestions.firstSectionQuestions.az,
        state.lang
      )}
      title={takeByLang(
        testQuestions.sectionsTitle.ru[0],
        testQuestions.sectionsTitle.az[0],
        state.lang
      )}
      userAnswers={userAnswers}
      setUserAnswers={setUserAnswers}
    />
  );
}

export function TestQSecond({ userAnswers, setUserAnswers }: TestQProps) {
  const { state } = useLangOrTheme();
  return (
    <TestBlocks
      questions={takeByLang(
        testQuestions.secondSectionQuestions.ru,
        testQuestions.secondSectionQuestions.az,
        state.lang
      )}
      title={takeByLang(
        testQuestions.sectionsTitle.ru[1],
        testQuestions.sectionsTitle.az[1],
        state.lang
      )}
      userAnswers={userAnswers}
      setUserAnswers={setUserAnswers}
    />
  );
}

export function TestQThird({ userAnswers, setUserAnswers }: TestQProps) {
  const { state } = useLangOrTheme();
  return (
    <TestBlocks
      questions={takeByLang(
        testQuestions.thirdSectionQuestions.ru,
        testQuestions.thirdSectionQuestions.az,
        state.lang
      )}
      title={takeByLang(
        testQuestions.sectionsTitle.ru[2],
        testQuestions.sectionsTitle.az[2],
        state.lang
      )}
      userAnswers={userAnswers}
      setUserAnswers={setUserAnswers}
    />
  );
}

export function TestQFourth({ userAnswers, setUserAnswers }: TestQProps) {
  const { state } = useLangOrTheme();
  return (
    <TestBlocks
      questions={takeByLang(
        testQuestions.fourthSectionQuestions.ru,
        testQuestions.fourthSectionQuestions.az,
        state.lang
      )}
      title={takeByLang(
        testQuestions.sectionsTitle.ru[3],
        testQuestions.sectionsTitle.az[3],
        state.lang
      )}
      userAnswers={userAnswers}
      setUserAnswers={setUserAnswers}
    />
  );
}

export function TestBlockForTestpage() {
 const [show,changeShow] = useState<boolean>(true)
  const { state } = useLangOrTheme();
  const [currentIndex, dispatch] = useReducer(reducerChangeTestBlocks, 0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<"introvert" | "extrovert" | "ambivert" | string | null>(null);


  const componentsArray = [
    <TestQFirst key="first" userAnswers={userAnswers} setUserAnswers={setUserAnswers} />,
    <TestQSecond key="second" userAnswers={userAnswers} setUserAnswers={setUserAnswers} />,
    <TestQThird key="third" userAnswers={userAnswers} setUserAnswers={setUserAnswers} />,
    <TestQFourth key="fourth" userAnswers={userAnswers} setUserAnswers={setUserAnswers} />,
  ];

  const textForButton = {
    ru: ["Далее", "Назад", "Пропустить"],
    az: ["İrəli", "Geri", "Keç"],
    results: ["Посмотреть результаты", "Nəticələrə bax"],
  };

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === componentsArray.length - 1;

  const questionBlocks = {
    0: testQuestions.firstSectionQuestions[state.lang].map(q => q.question), 
    1: testQuestions.secondSectionQuestions[state.lang].map(q => q.question), 
    2: testQuestions.thirdSectionQuestions[state.lang].map(q => q.question), 
    3: testQuestions.fourthSectionQuestions[state.lang].map(q => q.question), 
};

if (!show) {
  const finalResult = result ?? "No result";
  return (
    <TestResult 
      userAnswers={userAnswers}
      questionBlocks={questionBlocks}
      result={finalResult}
    />
  );
}
 

  return (
    <div className={`divTestOption ${state.theme}`}>
      {componentsArray[currentIndex]}
        <div>
        <Button
          text={takeByLang(textForButton.ru[1], textForButton.az[1], state.lang)}
          func={() =>
            dispatch({ type: "prevBlock", arrayLength: componentsArray.length - 1 })
          }
          disabled={isFirst}
        />
        <Button
          text={takeByLang(textForButton.ru[2], textForButton.az[2], state.lang)}
          func={() =>
            dispatch({ type: "skipBlock", arrayLength: componentsArray.length - 1 })
          }
          disabled={isLast}
        />
        <Button
          text={takeByLang(textForButton.ru[0], textForButton.az[0], state.lang)}
          func={() =>
            dispatch({ type: "changeBlock", arrayLength: componentsArray.length - 1 })
          }
          disabled={isLast}
        />
      {isLast && (
          <Button 
          text= {takeByLang(textForButton.results[0], textForButton.results[1], state.lang)} 
          func={() => {
            changeShow(false)
            const showType =  calculateAnswers(userAnswers, state.lang);
            setResult(showType)
          }
          }
          />
      )}
       </div>
    </div>
  );
}
