import { useLangOrTheme } from "../contextReducer/ThemeAndLang";
import { textForHomePage } from "../text/homepage";
import { testDescription } from "../text/textDescription";
import type { ForUl } from "../typescriptTypes/typesFonComponents";

export function NavContainer ({liArrayRu, liArrayAz ,lang } : ForUl) {
    const liArray = lang === 'ru' ? liArrayRu : liArrayAz;
    return(
            <ul>
             {liArray.map( e => <li key={e.id}>{"option" in e ? e.option : e.text}</li>)}
            </ul>
    )
};

export function NavForHomePage () {
    const {state} = useLangOrTheme()
    return (
        <NavContainer 
        liArrayAz={textForHomePage.options.az}
        liArrayRu={textForHomePage.options.ru}
        lang= {state.lang}
        />
    )
};

export function UlForTestTitle () {
    const {state} = useLangOrTheme()
    return(
    <NavContainer 
    liArrayAz={testDescription.az.liGen}
    liArrayRu={testDescription.ru.liGen}
    lang={state.lang}
    />
    )
}