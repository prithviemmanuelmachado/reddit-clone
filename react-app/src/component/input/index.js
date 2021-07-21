import style from './style.module.css';

function InputField(props)
{
    const {onChange, type, placeholder, displayname} = props;

    return<>
        <div className={style.inputfield}>
            <label> {displayname}</label>
            <input type={type} onChange={onChange} className={style.inputbox} placeholder={placeholder}/>
        </div>
    </>
}

export default InputField;