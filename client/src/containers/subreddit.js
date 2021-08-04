import { useEffect, useState } from 'react';
import PostContainer from '../component/postContainer';
import { Link, useLocation } from 'react-router-dom';
import Title from '../component/title';
import Button from '../component/button';
import SubredditHeader from '../component/subredditHeader';
import CreateNewPostMini from '../component/createNewPostMini';
import './style.css';

export default function Subreddits(props)
{
    //use the Subreddit id here to get the subreddit info
    const CurPage = useLocation();
    const curSubredditId = CurPage.pathname.substr(11);

    const [page, setPage] = useState([]);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id:curSubredditId })
    };

    const getSubreddit = async()=>{
        
        await fetch('/subreddit/getSubreddit', requestOptions).then((res)=>{
            return res.json();
        }).then((data)=>{
            setPage(data[0]);
        });
    }

    useEffect(()=>{
        getSubreddit();
        
    },[]);
    
    const [follow, setFollow] = useState("Follow");
    function handleFollow(event)
    {
        const temp = follow==='Follow'? 'Following' : 'Follow';
        setFollow(temp);
    }

    const backgroundImage = page.backgroundImage;
    const displayImage = page.displayImage;
    const title = page.title;
    return<>
        <div className='containerMargin'>
            <SubredditHeader backgroundImg={backgroundImage} displayImg={displayImage}/>
            
            <div className='leftAlign'>
                <div className='flex'>
                    <div className='flexLeftLarger'>
                        <Title title={title} aligndir='left'/>
                    </div>
                    <div className='flexRight marginTop'>
                        <Button buttonType='button' buttonText={follow} buttonOrientation='left' buttonSize='smid' onClick={handleFollow}/>
                    </div>
                    
                </div>
                <Link to='/newPost' className='link'>
                    <CreateNewPostMini exstyles='large'/>
                </Link><br/>
            </div>
            
            <PostContainer createdBy='testUser' createdOn='12/3/2 13:33' postTitle='Test Post' postText='Deck the halls with bows of holly, fadlalalala lalala' upvote='20' downvote='30'/>
            <PostContainer createdBy='testUser' createdOn='12/3/2 13:33' postTitle='Test Post' postText='Deck the halls with bows of holly, fadlalalala lalala' upvote='20' downvote='30'/>
        </div>
    </>
}