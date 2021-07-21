import style from './style.module.css';
import Title from '../title';
import Upvote from '../upvote';
import Downvote from '../downvote';

export default function PostContainer(props)
{
    const { postTitle, postText} = props;
    return<>
        <div className={style.postContainer}>
            <Title title={postTitle} aligndir='left' time='2/3/39 13:09'/>
            <p>{postText}</p>
            <Upvote count='20'/>
            <Downvote count='30'/>
        </div>
    </>
}