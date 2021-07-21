import style from './style.module.css';

export default function SearchBar(props)
{
    const {onChange, placeholder} = props;

    return<>
            <input type='text' onChange={onChange} className={style.searchbar} placeholder={placeholder}/>
    </>
}