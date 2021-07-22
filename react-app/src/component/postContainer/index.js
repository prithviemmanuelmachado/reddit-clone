import { useState } from 'react';
import style from './style.module.css';
import Title from '../title';
import InputField from '../input';
import Upvote from '../upvote';
import Downvote from '../downvote';
import Button from '../button';

export default function PostContainer(props)
{
    const [comment, setComment] = useState("");
    function handleCommentChange(event)
    {
        setComment(event.target.value);
        console.log(comment);
    }
    function submitComment(event)
    {
        
    }
    const { postTitle, postText, additionalClass, createdBy, createdOn} = props;
    const styles = additionalClass ? style.postContainer+" "+style[additionalClass] : style.postContainer;
    return<>
        <div className={styles}>
            <Title title={postTitle} aligndir='left' time={createdOn} by={createdBy}/>
            <p>{postText}</p>
            <Upvote count='20'/>
            <Downvote count='30'/><br/><br/>
            <InputField onChange={handleCommentChange} type='text' placeholder='Comment here....' displayname='' className='small'/><br/>
            <Button buttonType='button' buttonText='Comment' buttonOrientation='right' buttonSize='smid' onClick={submitComment}/>
            
        </div>
    </>
}