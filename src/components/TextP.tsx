import { useLangOrTheme } from "../contextReducer/ThemeAndLang"
import { takeByLang } from "../functions/takeByLang"
import { textForHomePage } from "../text/homepage";

export function TextTagP ({text} : {text : string}) {
    return(
        <p>{text}</p>
    )
}

export function TextTagPForHomePage () {
    const { state } = useLangOrTheme();
    return(
        <>
        <TextTagP text={takeByLang(textForHomePage.result[0], textForHomePage.result[1],state.lang)}/>
        </>
    )
}