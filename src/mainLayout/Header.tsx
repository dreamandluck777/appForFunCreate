
import { ButtonChangeLang } from "../components/SwitchLangButton";
import { ThemeLogick } from "../components/ThemeLogick";
import { SwitchToombler } from "../components/Toombler";
import '../styles/header.css';

export function Header () {
    return(
        <ThemeLogick element={ <header className="headerWrapperMain" />}>
            <div className="divContChangeLang">
            <ButtonChangeLang />
            </div>
            <div>
                <SwitchToombler />
            </div>
        </ThemeLogick>
    )
}