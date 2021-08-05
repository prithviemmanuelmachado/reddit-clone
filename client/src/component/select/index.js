import style from './style.module.css';


export default function Select(props)
{
    const {options, optionsFor, onChanged, curSubreddit} = props;
    const optionSubreddit = curSubreddit === '' ? '' : <option value={curSubreddit[0]}>{curSubreddit[1]}</option>
    const defaultSelect = curSubreddit === '' ? 'default' : curSubreddit[0];
    function onChange(event)
    {
        event.target.size = 1;
        event.target.blur();
    }
    function onFocus(event)
    {
        event.target.size = 5;
    }
    function onBlur(event)
    {
        event.target.size = 1;
    }
    return(<>
        <select onFocus={onFocus} onBlur={onBlur} onchange={onChange} className={style.select} defaultValue={defaultSelect} onChange={onChanged}>
            <option value='default'>{optionsFor}</option>
            {optionSubreddit}
            {options.map(function(optionToBePrinted, index){
                return <option value={optionToBePrinted._id} key={index}>{optionToBePrinted.title}</option> 
            })}
        </select>
    </>)
}