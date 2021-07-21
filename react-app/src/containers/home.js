import PostContainer from '../component/postContainer';
import { Link } from 'react-router-dom';
import Button from '../component/button';
import './style.css';

export default function Home(props)
{
    return<>
        <div className='btnLeft'>
            <Link to='/newPost'>
                <Button buttonType='button' buttonText='Create a New Post' buttonOrientation='left' buttonSize='slrg' />
            </Link>
        </div>
        
        <PostContainer postTitle='Test Post' postText='Deck the halls with bows of holly, fadlalalala lalala'/>
    </>
}