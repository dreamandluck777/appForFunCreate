import { useEffect } from "react"
import { useLangOrTheme } from "./contextReducer/ThemeAndLang"
import { HomePage } from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { TestPageMain } from "./Pages/TestPage";


function App() {
   const {state} = useLangOrTheme();
   useEffect( () => {
    if(state.theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
   }, [state.theme])
  return (
    <>
    <Routes>
    <Route path ='/' element={<HomePage />} />
    <Route path='/test' element={<TestPageMain />} />
   </Routes>
   </>
  )
}

export default App
