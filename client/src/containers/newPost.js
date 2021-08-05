import NewPost from "../component/newpost";
import Title from "../component/title";
import Select from "../component/select";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
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

async function GetSubreddits(setSubreddits)
{
    await fetch('/subreddit/getFollowedSubreddits').then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
        setSubreddits(data);
    }).catch((err)=>{
        console.log(err);
    });
}

export default function NewPostPage(props)
{
    const CurPage = useLocation();
    const curSubredditId = CurPage.pathname.substr(9);
    const curSubreddit = curSubredditId ? curSubredditId.split('&') : '';
    const defaultSub = { title : 'Loading', displayImage : 'loading'};
    const [subreddits, setSubreddits] = useState([defaultSub]);
    const History = useHistory();
    useEffect(()=>{
        IsLoggedIn(History);
        GetSubreddits(setSubreddits);
    },[]);
    let subreddit = curSubredditId ? curSubreddit[0] : 'default';
    function getSubreddit(event)
    {
        return subreddit;
    }
    function handleChange(event)
    {
        subreddit = event.target.value;
        console.log(subreddit);
        event.target.size = 1;
        event.target.blur();
    }
    return<>
        <div className='flex'>
            <div className='leftAlign flexLeft'>
                <Title title='Create a New Post' aligndir='left'/> 
            </div>
            <Select options={subreddits} onChanged={handleChange} curSubreddit={curSubreddit} optionsFor='Choose a community'/>
        </div>
        <NewPost getSubreddit={getSubreddit}/>
    </>
}
