export type Theme = 'dark' | 'light';
export type Lang = 'ru' | 'az';
export type Action = "changeLang" | 'changeTheme';

export interface ForState {
    theme: Theme;
    lang: Lang;
}

export interface ForAction {
    type: Action;
}

export interface ForContext {
    state : ForState;
    dispatch: React.ActionDispatch<[action: ForAction]>;
}