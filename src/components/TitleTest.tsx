import { useState } from "react";
import { useLangOrTheme } from "../contextReducer/ThemeAndLang";
import { takeByLang } from "../functions/takeByLang";
import { testDescription } from "../text/textDescription";
import type { ForTitleTest } from "../typescriptTypes/typesFonComponents";
import { Button } from "./Button";
import { UlForTestTitle } from "./Nav";
import { TestBlockForTestpage } from "./TestOption";

export function TitleTest ({title,description, children, style} : ForTitleTest) {
return(
    <section className={style}>
        <h1>{title}</h1>
        <p>{description.first}</p>
        <p>{description.second}</p>
        <UlForTestTitle />
        <p>{description.third}</p>
        <p>{description.fourth}</p>
        <p>{description.five}</p>
        {children}
    </section>
)
};

export function TitleTestPage () {
    const {state} = useLangOrTheme();
    const [showComponent, changeShowComponent] = useState<boolean>(false)
    if(showComponent) {
        return <TestBlockForTestpage />
    }

    const textForButton = {
        ru: 'Пройти тест',
        az : 'Testdən keçmək',
    }
    return(
        <TitleTest 
        title={takeByLang(testDescription.title.ru,testDescription.title.az,state.lang)}
        description={takeByLang(testDescription.ru.text, testDescription.az.text, state.lang)}
        style = {`${state.theme}`}
        > 
        <Button 
        text={takeByLang(textForButton.ru,textForButton.az,state.lang)}
        func = {() => changeShowComponent(true)}
        style={`${state.theme}`}
        />
        </TitleTest>
    )
}