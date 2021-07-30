import style from './style.module.css';

export default function Downvote(props)
{
    return<>
        <button className={style.downvote}>▼ </button><p className={style.count}>{props.count}</p>
    </>
}