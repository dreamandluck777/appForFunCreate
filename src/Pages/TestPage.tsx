import { TestMainPage } from "../components/TestPage";
import { Header } from "../mainLayout/Header";
import '../styles/styleForTestPage.css'

export function TestPageMain () {
    return( 
        <div className="divWrapper">
        <Header />
        <main>
        <TestMainPage />
        </main>
        </div>
    )
}