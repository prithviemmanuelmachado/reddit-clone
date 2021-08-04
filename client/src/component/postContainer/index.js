import style from './style.module.css';
import Title from '../title';
import Upvote from '../upvote';
import Downvote from '../downvote';
import NewComment from '../newComment';
import Comment from '../comments';
import { useEffect, useState } from 'react';

async function getCommets(id, setComments)
{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id : id})
    };
    await fetch('/comments/get', requestOptions).then((res)=>{
        return res.json();
    }).then((data)=>{
        setComments(data);
    });
}

export default function PostContainer(props)
{
    const { postTitle, postText, image, createdBy, createdOn, upvote, downvote, postId} = props;
    console.log("postId inside = ", postId);
    const defaultComment ={
        createdBy:"",
        createdOn:"",
        text:"LOADING.....",
        commentId:"11100101010101"
    };
    const [comments, setComments] = useState([defaultComment]);
    
    useEffect(function(){
        getCommets(postId, setComments);
    },[]);    

    const createdOnArray = createdOn ? createdOn.split("T"):"";
    const time = createdOnArray[1] ? createdOnArray[1].split("."):"";
    const createdOnMod = createdOnArray[0]+" | "+time[0];
    const imgUrl = '/images/'+image;
    let img;
    if(image!=='none')
        img = <>
            <img src={imgUrl} className={style.img} alt="..."/><br/><br/>
        </>;
    return<>
        <div className={style.postContainer} key={postId}>
            <Title title={postTitle} aligndir='left' time={createdOnMod} by={createdBy}/>
            <p>{postText}</p><br/>
            {img}
            <Upvote count={upvote}/>
            <Downvote count={downvote}/><br/><br/>
            <NewComment postId={postId}/>
            <br/>
            {comments.map(function(object, index){
                return<>
                    <div key={object._id} >
                        <Comment createdBy={object.createdByUsername} createdOn={object.createdOn} text={object.text} commentId={object._id}/>
                    </div>
                </>
            })}
        </div>
    </>
}