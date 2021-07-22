import PostContainer from '../component/postContainer';
import { Link } from 'react-router-dom';
import Button from '../component/button';
import Sidebar from '../component/sidebar';
import CreateNewPostMini from '../component/createNewPostMini';
import './style.css';

import Cadmus from './cadmus logo.png';
import Cyber from './cybersecurity-quiz_1200x675_hero_041318.png';

export default function Home(props)
{
    const testsubreddits=[{title : 'sub1', displayImg: Cadmus}, {title : 'sub2', displayImg: Cyber}, {title : 'sub3', displayImg: Cadmus}];
    const testTopsubreddits=[{title : 'Topsub1', displayImg: Cyber}, {title : 'Topsub2', displayImg: Cadmus}, {title : 'Topsub3', displayImg: Cyber}];
    return<>
        <div className='containerMargin'>
            <div className='flex'>
                <div className='flexLeftLarger'>
                    <div className='leftAlign'>
                        <Link to='/newPost' className='link'>
                            <CreateNewPostMini exstyles='small'/>
                        </Link><br/>
                        <Link to='/subreddit'>
                            <Button buttonType='button' buttonText='Subreddit test' buttonOrientation='left' buttonSize='slrg' />
                        </Link>
                    </div>
            
                    <PostContainer additionalClass='margins' createdBy='testUser' createdOn='12/3/2 13:33' postTitle='Test Post' postText='Deck the halls with bows of holly, fadlalalala lalala' />
                </div>
                <div className='flexRight'>
                    <Sidebar title='Subreddits you are following' selectoptions={testsubreddits}/>
                    <Sidebar title='Top Subreddits' selectoptions={testTopsubreddits}/>
                </div>
            </div>
        </div>
        
    </>
}