import {  NavForHomePage } from "./Nav"
import { SectionForHomePage } from "./Section"
import { TextTagPForHomePage } from "./TextP"
import '../styles/homePage.css'
import { useLangOrTheme } from "../contextReducer/ThemeAndLang"
import {  MyLinkCont } from "./Link"

export function SectionContent() {
    const {state} = useLangOrTheme()
    return(
        <div className= {`divWrapperForContent ${state.theme}`}>
            <SectionForHomePage>
            <NavForHomePage />
            <TextTagPForHomePage />
            <MyLinkCont />
            </SectionForHomePage>
        </div>
    )
}