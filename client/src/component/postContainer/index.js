import style from './style.module.css';
import Title from '../title';
import Upvote from '../upvote';
import Downvote from '../downvote';
import NewComment from '../newComment';
import Comment from '../comments';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

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
    const History = useHistory();
    const { postTitle, postText, image, createdBy, createdOn, upvote, downvote, postId} = props;
    
    const [upvotecount, setUpvotecount] = useState("");
    const [downvotecount, setDownvotecount] = useState("");
    useEffect(()=>{
        setUpvotecount(upvote);
        setDownvotecount(downvote);
    },[]);
    
    async function setUpvote()
    {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id : postId, count : upvotecount})
        };
        await fetch('/votes/upvote', requestOptions).then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log(data);
            if(data.isLoggedIn==false)
                History.push('/login');
            else
            {
                if(data.voted=="success")
                    setUpvotecount(upvotecount+1);
                else
                    setUpvotecount(upvotecount-1);
            }    
        }).catch(err=>console.log(err)) ;
    }

    async function setDownvote()
    {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id : postId, count : downvotecount})
        };
        await fetch('/votes/downvote', requestOptions).then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log(data);
            if(data.isLoggedIn==false)
                History.push('/login');
            else
            {
                if(data.voted=="success")
                    setDownvotecount(downvotecount+1);
                else
                    setDownvotecount(downvotecount-1);
            }    
        }).catch(err=>console.log(err)) ;
    }

    const defaultComment ={
        createdBy:"",
        createdOn:"",
        text:"LOADING.....",
        commentId:""
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
            <Upvote count={upvotecount} setvotes={setUpvote}/>
            <Downvote count={downvotecount} setvotes={setDownvote}/><br/><br/>
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