import { useLangOrTheme } from "../contextReducer/ThemeAndLang";
import '../styles/forButtonSwitchLang.css'

const forButton: { id: number; text: string }[] = [
    { id: 1, text: 'rus' },
    { id: 2, text: 'aze' },
];

export const ButtonChangeLang = () => {
    const { state, dispatch } = useLangOrTheme();

    function handleLang(lang: 'ru' | 'az') {
        if (state.lang !== lang) {
            dispatch({ type: 'changeLang' });
        }
    }

    const buttons = forButton.map(e => {
        const langCode = e.text === 'rus' ? 'ru' : 'az';
        return (
            <button
                key={e.id}
                className={state.lang === langCode ? 'buttonInHeader' : 'buttonInHeader noneActive'}
                onClick={() => handleLang(langCode)}
            >
                {e.text}
            </button>
        );
    });

    return <>{buttons}</>;
};
