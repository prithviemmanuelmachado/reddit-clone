import style from './style.module.css';
import Upvote from '../upvote';
import Downvote from '../downvote';
import NewComment from '../newComment';
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

export default function Comment(props)
{
    const { createdBy, createdOn, text, commentId} = props;

    const createdOnArray = createdOn ? createdOn.split("T"):"";
    const time = createdOnArray[1] ? createdOnArray[1].split("."):"";
    const createdOnMod = createdOnArray[0]+" | "+time[0];

    const defaultComment ={
        createdBy:"",
        createdOn:"",
        subCommentText:"LOADING....."
    };
    const [comments, setComments] = useState([defaultComment]);

    useEffect(function(){
        getCommets(commentId, setComments);
    },[]);
    const commentTitle = ""+createdBy+"\t Created on : "+createdOnMod;
    return<>
        <div className={style.comment}>
            <div className={style.commentTitle}>
                {commentTitle}
            </div><br/>
            <div className={style.text}>
                {text}<br/><br/>
                <Upvote count='26'/>
                <Downvote count='18' />
                <NewComment postId={commentId}/>
                {comments.map(function(object, index){
                    const subcreatedOnArray = object.createdOn ? object.createdOn.split("T"):"";
                    const subtime = subcreatedOnArray[1] ? subcreatedOnArray[1].split("."):"";
                    const subcreatedOnMod = createdOnArray[0]+" | "+subtime[0];
                    const subCommentTitle = ""+object.createdByUsername+"\t Created on : "+subcreatedOnMod;
                    return<>
                        
                        <div className={style.comment} key={index}>
                            <div className={style.commentTitle} >
                                {subCommentTitle}
                            </div><br/>
                            <div className={style.text}>
                                {object.text}<br/>
                                <Upvote count='26'/>
                                <Downvote count='18'/>
                            </div>
                            
                        </div>
                    </>
                })
                }
            </div>
                
        </div>
    </>   
        
}