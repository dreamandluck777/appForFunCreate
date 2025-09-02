import { useLangOrTheme } from "../contextReducer/ThemeAndLang";
import { takeByLang } from "../functions/takeByLang";
import { textForHomePage } from "../text/homepage";
import type { ForSection } from "../typescriptTypes/typesFonComponents";

export function Section ({title,description,children} : ForSection) {
  return (
    <section>
        <h1>{title}</h1>
        <p>
          {description.map(e => <span key={e.id}>{e.text}</span>)}
        </p>
        {children}
    </section>
  )
};

export function SectionForHomePage ({children} : {children: React.ReactNode}) {
    const {state} = useLangOrTheme();
    return(
        <Section 
        title={takeByLang(textForHomePage.titleByLang[0], textForHomePage.titleByLang[1], state.lang)}
        description={takeByLang(textForHomePage.description.ru, textForHomePage.description.az, state.lang)}>
            {children}
        </Section>
    )
}