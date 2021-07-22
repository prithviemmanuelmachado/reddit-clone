import style from './style.module.css';
import Title from '../title';
import Upvote from '../upvote';
import Downvote from '../downvote';
import NewComment from '../newComment';
import Comment from '../comments';

export default function PostContainer(props)
{
    const { postTitle, postText, createdBy, createdOn, upvote, downvote} = props;
    
    return<>
        <div className={style.postContainer}>
            <Title title={postTitle} aligndir='left' time={createdOn} by={createdBy}/>
            <p>{postText}</p>
            <Upvote count={upvote}/>
            <Downvote count={downvote}/><br/><br/>
            <NewComment/>
            <br/>
            
            <Comment createdBy='testUser2' createdOn='6/7/2022 20:22' text='Jingel bells jingel bells jingel all the way'/>
        </div>
    </>
}