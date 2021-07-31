import PostContainer from '../component/postContainer';
import { Link } from 'react-router-dom';
import Sidebar from '../component/sidebar';
import CreateNewPostMini from '../component/createNewPostMini';
import { useEffect, useState } from 'react';
import './style.css';

async function GetSubreddits()
{
    let subreddits;
    await fetch('/subreddit').then((res)=>{
        return res.json();
    }).then((data)=>{
        subreddits = data;
    }).catch((err)=>{
        console.log(err);
    });
    
    return subreddits;
}
async function GetPosts()
{
    let posts;
    await fetch('/posts').then((res)=>{
        return res.json();
    }).then((data)=>{
        posts = data;
    }).catch((err)=>{
        console.log(err);
    });
    
    return posts;
}

export default function Home(props)
{
    const defaultSub = { title : 'Loading', displayImage : 'loading'};
    const [subreddits, setSubreddits] = useState([defaultSub]);
    const [topSubreddits, setTopSubreddits] = useState([defaultSub]);
    const [posts, setPosts] = useState([defaultSub]);
    useEffect(function(){
        GetSubreddits().then((data)=>{
            setSubreddits(data);
        });
        GetPosts().then((data)=>{
            setPosts(data);
        });

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
                            console.log("post = ", post);
                            console.log("post image = ", post.imageName);
                            return <>
                                <PostContainer createdBy={post.createdBy} createdOn={post.createdOn} postTitle={post.title} postText={post.text} upvote={post.upVote} downvote={post.downVote} postId={post._id} image={post.imageName}/>
                            </>
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