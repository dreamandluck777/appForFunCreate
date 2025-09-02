import { SectionContent } from "../components/Main";
import { Header } from "../mainLayout/Header";
import '../styles/homePage.css'

export function HomePage () {
    return(
        <div className="divWrapperForBlocks">
        <Header />
        <main className="mainWrapper">
        <SectionContent />
        </main>
        </div>
    )
};