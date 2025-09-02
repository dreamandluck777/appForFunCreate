export function Button ({text,func, style, disabled} : {text: string; func?: () => void; style? : string, disabled? : boolean }) {
    return (
        <button onClick={func} className={style} disabled = {disabled}>{text}</button>
    )
}