import { useEffect, useRef } from "react";
import { useLangOrTheme } from "../contextReducer/ThemeAndLang";
import type { ForLogickTheme } from "../typescriptTypes/typesForLogicTheme";
import React from "react";

export function ThemeLogick ({element, children} : ForLogickTheme) {
    const {state} = useLangOrTheme();
      const someElement = useRef<HTMLElement | null> (null);
  useEffect(() => {
  if(state.theme === 'dark') {
    someElement.current?.setAttribute('data-theme' , 'dark');
  } else {
    someElement.current?.setAttribute('data-theme', 'light');
  }
  }, [state.theme])
   const elementWithRef = React.cloneElement(element, {ref : someElement,  children}, )
  return(
    <>
    {elementWithRef}
    </>
  )
}