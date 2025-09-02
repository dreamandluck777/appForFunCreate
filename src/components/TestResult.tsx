import { useState } from "react";
import { useLangOrTheme } from "../contextReducer/ThemeAndLang";
import { takeByLang } from "../functions/takeByLang";
import { Button } from "./Button";
import { TestBlockForTestpage } from "./TestOption";

interface TestResultProps {
  userAnswers: Record<string, string>;
  questionBlocks: Record<number, string[]>;
  result: "introvert" | "extrovert" | "ambivert" | string;
}

export function TestResult({ userAnswers, questionBlocks, result }: TestResultProps) {
  const { state } = useLangOrTheme();
  const [show, changeShow] = useState<boolean>(true);

  const type = ['Тип личности:', 'Şəxsiyyət tipi', ];

  const blocks = {
    ru: [
      { id: 0, title: "Социальные ситуации" },
      { id: 1, title: "Межличностное поведение" },
      { id: 2, title: "Эмоциональные реакции" },
      { id: 3, title: "Адаптация и стресс" },
    ],
    az: [
      { id: 0, title: "Sosial vəziyyətlər" },
      { id: 1, title: "Şəxslərarası davranış" },
      { id: 2, title: "Emosional reaksiyalar" },
      { id: 3, title: "Adaptasiya və stress" },
    ],
  };

  const title = {
    ru: "Результаты:",
    az: "Nəticələr:",
  };

  const backButton = {
    ru: "Пройти тест заново",
    az: "Testi yenidən vermək",
  };

  if (!show) {
    return <TestBlockForTestpage />;
  }

  return (
    <div>
      <p>{takeByLang(title.ru, title.az, state.lang)}</p>

      {blocks[state.lang].map((block) => {
        const questionsInBlock = questionBlocks[block.id] || [];
        const answeredCount = questionsInBlock.filter((q) => userAnswers[q]).length;

        const answeredText = {
          ru: `ответов из ${questionsInBlock.length}`,
          az: `seçdi ${questionsInBlock.length}-dən`,
        };

        return (
          <p key={block.id}>
            {block.title}: {answeredCount} {takeByLang(answeredText.ru, answeredText.az, state.lang)}
          </p>
        );
      })}
       <div>
          <p><strong>{takeByLang(type[0], type[1], state.lang)}</strong> {result}</p>
       </div>
      <div>
        <Button
          text={takeByLang(backButton.ru, backButton.az, state.lang)}
          func={() => changeShow(false)}
        />
      </div>
    </div>
  );
}
