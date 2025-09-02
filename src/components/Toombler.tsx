import { useLangOrTheme } from '../contextReducer/ThemeAndLang';
import '../styles/switchToombler.css';


const image = {
  sun : '/sun.png',
  moon : '/moon.png',
  altSun: {ru: 'символ солнца - светлая тема', az: 'Günəş simvolu — işıqlı mövzu',},
  altMoon: { ru: 'символ луны — тёмная тема',  az: 'Ay simvolu — qaranlıq tema', },
}

export const SwitchToombler = () => {
  const { state, dispatch } = useLangOrTheme();
  function changeTheme(theme: 'dark' | 'light') {
    if (state.theme !== theme) {
      dispatch({ type: 'changeTheme'});
    }
  }
  const currentStyle = `imgMoonAndSun`;
  const imgMoon = <img src={ image.moon} alt={image.altMoon[state.lang]} className = {currentStyle}/>;
  const imgSun =  <img src={ image.sun} alt={image.altSun[state.lang]} className = {currentStyle}/>;
  const img = state.theme === 'dark' ? imgMoon : imgSun;
  const labelStyle = state.theme === 'dark' ? 'switch moon' : 'switch sun';; 
  return (
    <label className={labelStyle}>
      {img}
      <input
        type="checkbox"
        checked={state.theme === 'dark'}
        onChange={(e) => changeTheme(e.target.checked ? 'dark' : 'light')}
      />
      <span className="slider round"></span>
    </label>
  );
};