import PostContainer from '../component/postContainer';
import { Link } from 'react-router-dom';
import Sidebar from '../component/sidebar';
import CreateNewPostMini from '../component/createNewPostMini';
import './style.css';

import Cadmus from './cadmus logo.png';
import Cyber from './cybersecurity-quiz_1200x675_hero_041318.png';

export default function Home(props)
{
    
    const testsubreddits=[{title : 'sub1', displayImg: Cadmus, subredditId: 'sub1'}, {title : 'sub2', displayImg: Cyber, subredditId: 'sub2'}, {title : 'sub3', displayImg: Cadmus, subredditId: 'sub2'}];
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
                    <Sidebar title='Subreddits you are following' selectoptions={testsubreddits}/>
                    <Sidebar title='Top Subreddits' selectoptions={testTopsubreddits}/>
                </div>
            </div>
        </div>
        
    </>


    
}