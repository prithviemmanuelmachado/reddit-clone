import style from './style.module.css';
import { useHistory } from 'react-router-dom';

export default function Sidebar(props)
{
    const History = useHistory();
    const { title, selectoptions } = props;
    function handleClickOption(subredditId)
    {
        console.log('testing');
        return function()
        {
            //redirect based on subredditId Here
            const testSubredditId='/'+subredditId;
            History.push('/subreddit'+testSubredditId);
        }
    }
    return<>
        <div className={style.sidebar}>
            <p className={style.title}>{title}</p>
            <ul className={style.select}>
                {selectoptions.map(function(optionToBePrinted, index){
                    
                    return <li className={style.option} key={index} onClick={handleClickOption(optionToBePrinted.subredditId)}>
                        <img src={optionToBePrinted.displayImg} className={style.displayImg} alt=">"/>
                        {optionToBePrinted.title}
                    </li>
                })}
            </ul>
        </div>
    </>
}