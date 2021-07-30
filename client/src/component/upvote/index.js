import style from './style.module.css';

export default function Upvote(props)
{
    return<>
        <button className={style.upvote}>▲ </button><p className={style.count}>{props.count}</p>
    </>
}