import style from './style.module.css';

function InputField(props)
{
    const {onChange, type, placeholder, displayname, className} = props;
    const label = displayname ? <label> {displayname}</label> : "";
    const classes = className ? style.inputbox+" "+style[className] : style.inputbox;
    return<>
        <div className={style.inputfield}>
            {label}            
            <input type={type} onChange={onChange} className={classes} placeholder={placeholder}/>
        </div>
    </>
}

export default InputField;