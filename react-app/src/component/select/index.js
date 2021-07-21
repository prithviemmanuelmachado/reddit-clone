import style from './style.module.css';

export default function Select(props)
{
    const {options, optionsFor} = props;
    return(<>
        <select className={style.select}>
            <option value='default' selected>{optionsFor}</option>
            {options.map(function(optionToBePrinted, index){
                return <option value={optionToBePrinted} key={index}>{optionToBePrinted}</option> 
            })}
        </select>
    </>)
}