import style from './style.module.css';

export default function Upvote(props)
{
    const { count, setvotes } = props;
    return<>
        <button className={style.upvote} onClick={setvotes}>▲ </button><p className={style.count}>{count}</p>
    </>
}