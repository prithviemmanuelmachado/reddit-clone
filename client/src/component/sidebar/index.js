import style from './style.module.css';
import { useHistory } from 'react-router-dom';
import { hostname } from '../../containers/globals';
import { useEffect, useState } from 'react';

export default function Sidebar(props)
{
    const History = useHistory();
    const { title, selectoptions } = props;
    console.log("select options  = ", selectoptions);
    function handleClickOption(subredditId)
    {
        console.log('testing');
        return function()
        {
            const testSubredditId='/'+subredditId;
            History.push('/subreddit'+testSubredditId);
        }
    }
    const [image, setImage] = useState([]);
    const getImage = async () => {
        try{
            const endpoint = hostname+'/subreddit/getImage';
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({image : image})
            };
            
            const response = await fetch(endpoint, requestOptions);
            setImage(response.data.file)

        }
        catch{
            console.log("error");
        }
    };

    useEffect(()=>{
        getImage();
    },[]);

    return<>
        <div className={style.sidebar}>
            <p className={style.title}>{title}</p>
            <ul className={style.select}>
                {selectoptions.map(function(optionToBePrinted, index){
                    
                    return <li className={style.option} key={optionToBePrinted._id} onClick={handleClickOption(optionToBePrinted._id)}>
                        <img src={image} className={style.displayImg} alt=">"/>
                        {optionToBePrinted.title}
                    </li>
                })}
            </ul>
        </div>
    </>
}