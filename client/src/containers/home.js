import PostContainer from '../component/postContainer';
import { Link } from 'react-router-dom';
import Sidebar from '../component/sidebar';
import {hostname} from './globals';
import CreateNewPostMini from '../component/createNewPostMini';
import { useEffect, useState } from 'react';
import './style.css';

import Cadmus from './cadmus logo.png';
import Cyber from './cybersecurity-quiz_1200x675_hero_041318.png';

async function GetSubreddits()
{
    let subreddits;
    const endpoint = hostname+'/subreddit';
    await fetch(endpoint).then((res)=>{
        return res.json();
    }).then((data)=>{
        subreddits = data;
    }).catch((err)=>{
        console.log(err);
    });
    
    return subreddits;
}

export default function Home(props)
{
    const defaultSub = { title : 'Loading', displayImage : Cyber};
    const [subreddits, setSubreddits] = useState([defaultSub]);
    useEffect(function(){
        GetSubreddits().then((data)=>{
            setSubreddits(data);
        });
    }, []);
    
    const testTopsubreddits=[{title : 'Topsub1', displayImg: Cyber, subredditId: 'Topsub1'}, {title : 'Topsub2', displayImg: Cadmus, subredditId: 'Topsub2'}, {title : 'Topsub3', displayImg: Cyber, subredditId: 'Topsub3'}];
    return<>
        <div className='containerMargin'>
            <div className='flex'>
                <div className='flexLeftLarger'>
                    <div className='leftAlign'>
                        <Link to='/newPost' className='link'>
                            <CreateNewPostMini exstyles='small'/>
                        </Link><br/>
                    </div>
                
                    <PostContainer createdBy='testUser' createdOn='12/3/2 13:33' postTitle='Test Post' postText='Deck the halls with bows of holly, fadlalalala lalala' upvote='20' downvote='30'/>
                    <PostContainer createdBy='testUser' createdOn='12/3/2 13:33' postTitle='Test Post' postText='Deck the halls with bows of holly, fadlalalala lalala' upvote='20' downvote='30'/>
                    <PostContainer createdBy='testUser' createdOn='12/3/2 13:33' postTitle='Test Post' postText='Deck the halls with bows of holly, fadlalalala lalala' upvote='20' downvote='30'/>
                </div>
                <div className='flexRight'>
                    <Sidebar title='Subreddits you are following' selectoptions={subreddits}/>
                    <Sidebar title='Top Subreddits' selectoptions={testTopsubreddits}/>
                </div>
            </div>
        </div>
            
    </>
    


    
}