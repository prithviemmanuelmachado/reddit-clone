import style from './style.module.css';

export default function Select(props)
{
    const {options, optionsFor, onChanged} = props;
    return(<>
        <select className={style.select} defaultValue='default' onChange={onChanged}>
            <option value='default'>{optionsFor}</option>
            {options.map(function(optionToBePrinted, index){
                return <option value={optionToBePrinted} key={index}>{optionToBePrinted}</option> 
            })}
        </select>
    </>)
}