export function takeByLang<T, U extends 'ru' | 'az'>(iteam1 : T, iteam2 : T, lang: U) : T {
     const iteamBack = lang === 'ru' ? iteam1 : iteam2;
     return iteamBack;
};