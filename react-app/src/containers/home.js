import PostContainer from '../component/postContainer';
import { Link } from 'react-router-dom';
import Button from '../component/button';
import Sidebar from '../component/sidebar';
import './style.css';

export default function Home(props)
{
    const testsubreddits=['sub1', 'sub2', 'sub3'];
    const testTopsubreddits=['Topsub1', 'Topsub2', 'Topsub3'];
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
                <Sidebar title='Subreddits you are following' selectoptions={testsubreddits}/>
                <Sidebar title='Top Subreddits' selectoptions={testTopsubreddits}/>
            </div>
        </div>
        
    </>
}