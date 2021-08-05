import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
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
    const History = useHistory();

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
            setPage(data);
        });
    }

    const [posts, setPosts] = useState([]);
    const getPosts = async()=>{
        
        await fetch('/subreddit/getPosts', requestOptions).then((res)=>{
            return res.json();
        }).then((data)=>{
            setPosts(data);
        });
    }
    const [follow, setFollow] = useState("");
    async function isFollowing()
    {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id : curSubredditId})
        };
        await fetch('/follow/isFollowing', requestOptions).then((res)=>{
            return res.json();
        }).then((data)=>{
            const isFollowing = data.isFollowing?"Following":"Follow";
            setFollow(isFollowing);
        }).catch(err=>console.log(err));
    }

    useEffect(()=>{
        getSubreddit();
        isFollowing();
        getPosts();
        
    },[]);
    async function handleFollow(event)
    {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id : curSubredditId})
        };
        await fetch('/follow', requestOptions).then((res)=>{
            return res.json();
        }).then((data)=>{
            if(data.isLoggedIn===false)
                History.push('/login');
            else
            {
                if(data.isFollowing===true)
                    setFollow("Following");
                else
                    setFollow("Follow");
            }
        }).catch(err=>console.log(err));
    }
    const link = '/newPost/'+curSubredditId+'&'+page.title;
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
                <Link to={link} className='link'>
                    <CreateNewPostMini exstyles='large'/>
                </Link><br/>
            </div>
            {console.log(posts)}
            
            {posts.map((post, index)=>{
                return<>
                    <div key={post._id}>
                        <PostContainer createdBy={post.createdByUsername} createdOn={post.createdOn} postTitle={post.title} postText={post.text} upvote={post.upVote} downvote={post.downVote} image={post.imageName} postId={post._id} />
                    </div>
                </>
            })}
        </div>
    </>
}