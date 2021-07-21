import PostContainer from '../component/postContainer';
import { Link } from 'react-router-dom';
import Title from '../component/title';
import Button from '../component/button';
import './style.css';

export default function Subreddits(props)
{
    return<>
        
        <div className='leftAlign'>
            <Title title='Test Subreddit' aligndir='left'/>
            <Link to='/newPost'>
                <Button buttonType='button' buttonText='Create a New Post' buttonOrientation='left' buttonSize='slrg' />
            </Link>
        </div>
        
        <PostContainer postTitle='Test Post' postText='Deck the halls with bows of holly, fadlalalala lalala'/>
    </>
}