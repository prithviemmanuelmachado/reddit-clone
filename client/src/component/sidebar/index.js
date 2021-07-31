import style from './style.module.css';
import { useHistory } from 'react-router-dom';

export default function Sidebar(props)
{
    const History = useHistory();
    const { title, selectoptions } = props;
    console.log("select options  = ", selectoptions);
    function handleClickOption(subredditId)
    {
        if(subredditId)
        {
            return function()
            {
                const testSubredditId='/'+subredditId;
                History.push('/subreddit'+testSubredditId);
            }
        }
    }
    return<>
        <div className={style.sidebar}>
            <p className={style.title}>{title}</p>
            <ul className={style.select}>
                {selectoptions.map(function(optionToBePrinted, index){
                    const url = "/images/"+optionToBePrinted.displayImage
                    return <li className={style.option} key={optionToBePrinted._id} onClick={handleClickOption(optionToBePrinted._id)}>
                        <img src={url} className={style.displayImg} alt=">"/>
                        {optionToBePrinted.title}
                    </li>
                })}
            </ul>
        </div>
    </>
}