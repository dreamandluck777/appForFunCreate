import { Link } from "react-router-dom";
import { takeByLang } from "../functions/takeByLang";
import { useLangOrTheme } from "../contextReducer/ThemeAndLang";
import { textForHomePage } from "../text/homepage";
import '../styles/homePage.css'

export function MyLink ({text, path , style} : {text: string; path : string; style : string; }) {
return (
    <Link to={path} className={style}>{text}</Link>
)
}

export function MyLinkCont () {
    const {state} = useLangOrTheme();
    return (
        <MyLink  style ={`forLink ${state.theme}`} path='/test' text ={takeByLang(textForHomePage.forStartTest[0],textForHomePage.forStartTest[1],state.lang)} />
    )
}