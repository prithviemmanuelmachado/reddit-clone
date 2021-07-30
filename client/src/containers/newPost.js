import NewPost from "../component/newpost";
import Title from "../component/title";
import Select from "../component/select";
import './style.css';

export default function NewPostPage(props)
{
    let subreddit = "default";
    const options=[
        'Test',
        'Test1',
        'Test2'];
    function handleChange(event)
    {
        subreddit = event.target.value;
    }
    function getSubreddit()
    {
        return subreddit;
    }
    return<>
        <div className='flex'>
            <div className='leftAlign flexLeft'>
                <Title title='Create a New Post' aligndir='left'/> 
            </div>
            <Select options={options} onChanged={handleChange} optionsFor='Choose a community'/>
        </div>
        <NewPost getSubreddit={getSubreddit}/>
    </>
}
