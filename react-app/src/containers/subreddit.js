import { useState } from 'react';
import PostContainer from '../component/postContainer';
import { Link } from 'react-router-dom';
import Title from '../component/title';
import Button from '../component/button';
import SubredditHeader from '../component/subredditHeader';
import CreateNewPostMini from '../component/createNewPostMini';
import './style.css';

import Cadmus from './cadmus logo.png';
import Cyber from './cybersecurity-quiz_1200x675_hero_041318.png'

export default function Subreddits(props)
{
    const [follow, setFollow] = useState("Follow");
    function handleFollow(event)
    {
        const temp = follow==='Follow'? 'Following' : 'Follow';
        setFollow(temp);
        console.log(follow);
    }
    return<>
        <div className='containerMargin'>
            <SubredditHeader backgroundImg={Cyber} displayImg={Cadmus}/>
            
            <div className='leftAlign'>
                <div className='flex'>
                    <div className='flexLeftLarger'>
                        <Title title='Test Subreddit' aligndir='left'/>
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