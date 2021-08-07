import PostContainer from '../component/postContainer';
import { Link } from 'react-router-dom';
import Sidebar from '../component/sidebar';
import CreateNewPostMini from '../component/createNewPostMini';
import { useEffect, useState } from 'react';
import './style.css';

async function GetSubreddits(setSubreddits)
{
    await fetch('/subreddit/getFollowedSubreddits').then((res)=>{
        return res.json();
    }).then((data)=>{
        setSubreddits(data);
    }).catch((err)=>{
        console.log(err);
    });
}

async function GetTopSubreddits(setTopSubreddits)
{
    await fetch('/subreddit/getTopSubreddits').then((res)=>{
        return res.json();
    }).then((data)=>{
        setTopSubreddits(data);
    }).catch((err)=>{
        console.log(err);
    });
}


async function GetPosts(setPosts)
{
    await fetch('/posts').then((res)=>{
        return res.json();
    }).then((data)=>{
        setPosts(data);
    }).catch((err)=>{
        console.log(err);
    });
}

export default function Home(props)
{
    const defaultSub = { title : 'Loading', displayImage : 'loading'};
    const [subreddits, setSubreddits] = useState([defaultSub]);
    const [topSubreddits, setTopSubreddits] = useState([defaultSub]);
    const [posts, setPosts] = useState([defaultSub]);
    useEffect(function(){
        GetSubreddits(setSubreddits);
        GetTopSubreddits(setTopSubreddits);
        GetPosts(setPosts);
    }, []);
    
    
    return<>
        <div className='containerMargin'>
            <div className='flex'>
                <div className='flexLeftLarger'>
                    <div className='leftAlign'>
                        <Link to='/newPost' className='link'>
                            <CreateNewPostMini exstyles='small'/>
                        </Link><br/>
                    </div>
                
                    {
                        posts.map(function(post, index){
                            if(index!==0)
                            {
                                return <>
                                    <div key={post._id}>
                                        <PostContainer createdBy={post.createdByUsername} createdOn={post.createdOn} postTitle={post.title} postText={post.text} upvote={post.upVote} downvote={post.downVote} postId={post._id} image={post.imageName}/>
                                    </div>
                                </>
                            }
                        })
                    }
                    
                </div>
                <div className='flexRight'>
                    <Sidebar title='Subreddits you are following' selectoptions={subreddits}/>
                    <Sidebar title='Top Subreddits' selectoptions={topSubreddits}/>
                </div>
            </div>
        </div>
            
    </>
    


    
}