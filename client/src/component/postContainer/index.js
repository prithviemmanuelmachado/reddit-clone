import style from './style.module.css';
import Title from '../title';
import Upvote from '../upvote';
import Downvote from '../downvote';
import NewComment from '../newComment';
import Comment from '../comments';

export default function PostContainer(props)
{
    const { postTitle, postText, image, createdBy, createdOn, upvote, downvote, postId} = props;
    const createdOnArray = createdOn ? createdOn.split("T"):"";
    const time = createdOnArray[1] ? createdOnArray[1].split("."):"";
    const createdOnMod = createdOnArray[0]+" | "+time[0];
    const imgUrl = '/images/'+image;
    let img;
    if(image!='none')
        img = <>
            <img src={imgUrl} className={style.img} /><br/><br/>
        </>;
    function submitComment()
    {
        return function()
        {
            //post new comment here based on commentId
        }
    }
    
    return<>
        <div className={style.postContainer} key={postId}>
            <Title title={postTitle} aligndir='left' time={createdOnMod} by={createdBy}/>
            <p>{postText}</p><br/>
            {img}
            <Upvote count={upvote}/>
            <Downvote count={downvote}/><br/><br/>
            <NewComment submitComment={submitComment} />
            <br/>
            
            <Comment createdBy='testUser2' createdOn='6/7/2022 20:22' text='Jingel bells jingel bells jingel all the way' commentId=''/>
        </div>
    </>
}