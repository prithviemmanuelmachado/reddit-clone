import style from './style.module.css';
import { Redirect } from 'react-router-dom';

export default function Sidebar(props)
{
    const { title, selectoptions } = props;
    function handleClickOption(event)
    {
        console.log('testing');
        <Redirect to='/subreddit'/>
    }
    return<>
        <div className={style.sidebar}>
            <p className={style.title}>{title}</p>
            <ul className={style.select}>
                {selectoptions.map(function(optionToBePrinted, index){
                    console.log(optionToBePrinted.displayImg);
                    return <li className={style.option} key={index} onClick={handleClickOption}><img src={optionToBePrinted.displayImg} className={style.displayImg} alt=">"/>{optionToBePrinted.title}</li>
                })}
            </ul>
        </div>
    </>
}