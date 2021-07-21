import PostContainer from '../component/postContainer';
import { Link } from 'react-router-dom';
import Button from '../component/button';
import './style.css';

export default function Home(props)
{
    return<>
        <div className='flex'>
            <div className='flexLeftLarger'>
                <div className='leftAlign'>
                    <Link to='/newPost'>
                        <Button buttonType='button' buttonText='Create a New Post' buttonOrientation='left' buttonSize='slrg' />
                    </Link><br/>
                    <Link to='/subreddit'>
                        <Button buttonType='button' buttonText='Subreddit test' buttonOrientation='left' buttonSize='slrg' />
                    </Link>
                </div>
        
                <PostContainer additionalClass='margins' postTitle='Test Post' postText='Deck the halls with bows of holly, fadlalalala lalala'/>
            </div>
            <div className='flexRight'>

            </div>
        </div>
        
    </>
}