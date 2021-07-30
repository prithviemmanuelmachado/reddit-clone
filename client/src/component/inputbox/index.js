import style from './style.module.css';

export default function InputBox(props)
{
    const {placeholder, onChange, rows, cols} = props;
    return<>
        <textarea className={style.textbox} rows={rows} cols={cols} placeholder={placeholder} onChange={onChange}></textarea>
    </>
}