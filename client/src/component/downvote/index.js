import style from './style.module.css';

export default function Downvote(props)
{
    const { count, setvotes } = props;
    return<>
        <button className={style.downvote} onClick={setvotes}>▼ </button><p className={style.count}>{count}</p>
    </>
}