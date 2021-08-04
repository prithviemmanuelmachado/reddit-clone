import NewPost from "../component/newpost";
import Title from "../component/title";
import Select from "../component/select";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import './style.css';

async function IsLoggedIn(History)
{
    await fetch('/verify').then((res)=>{
        return res.json();
    }).then((data)=>{
        if(data.isLoggedIn===false)
            History.push('/login');
    });
}

export default function NewPostPage(props)
{
    const History = useHistory();
    useEffect(()=>{
        IsLoggedIn(History);
    },[]);
    let subreddit = "default";
    const options=[
        'Test',
        'Test1',
        'Test2'];
    function handleChange(event)
    {
        subreddit = event.target.value;
    }
    function getSubreddit()
    {
        return subreddit;
    }
    return<>
        <div className='flex'>
            <div className='leftAlign flexLeft'>
                <Title title='Create a New Post' aligndir='left'/> 
            </div>
            <Select options={options} onChanged={handleChange} optionsFor='Choose a community'/>
        </div>
        <NewPost getSubreddit={getSubreddit}/>
    </>
}
