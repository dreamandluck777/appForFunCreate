import { createContext, useContext, useReducer } from "react";
import { type ForContext, type ForAction, type ForState, type Lang, type Theme } from "../typescriptTypes/ContextThemeAndLang";

function changeThemeOrLang (state : ForState, action : ForAction) {
  switch(action.type) {
    case 'changeLang' :
        const selectedUserLang : Lang = state.lang === 'ru' ? 'az' : 'ru'; 
        return {...state,  lang :  selectedUserLang};
    case 'changeTheme' :
        const selectedUserTheme: Theme = state.theme === 'dark' ? 'light' : 'dark';
        return {...state, theme : selectedUserTheme};
  }
};

const initialState : ForState = {
    lang: 'ru',
    theme: 'dark',
};

export const ThemeAndLangContext = createContext<ForContext | null>(null);

export function ContextProviderThemeAndLang ({children} : {children: React.ReactNode}) {
    const [state, dispatch] = useReducer(changeThemeOrLang, initialState);
    return (
        <ThemeAndLangContext.Provider value = {{state,dispatch}}>
            {children}
        </ThemeAndLangContext.Provider>
    )
};

export const useLangOrTheme = () => {
    const value = useContext(ThemeAndLangContext);
    if(!value) {
       throw new Error('')
    };
     const {state,dispatch} = value;
        return {state, dispatch};
};
