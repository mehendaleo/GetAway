import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchResultsThunk } from '../store/search';
import './rest.css'

const SearchArea = () => {
    const dispatch = useDispatch();
    const results = useSelector(state => state.search?.locations);
    const [search, setSearch] = useState('');
    const [style, setStyle] = useState({visibility: 'hidden'})

    useEffect(() => {
        if (search !== '') {
            dispatch(getSearchResultsThunk(search));
        }
    }, [dispatch, search])

    //comment

    return (
        <div className='search-parent'>
            <input
                placeholder='Search'
                type='text'
                value={search}
                onChange={e => setSearch(e.target.value)}
                onClick={() => setStyle({visibility: 'visible'})}
                // onBlur={() => setStyle({visibility: 'hidden'})}
                className='search-input'
            />
            <div style={style} className='search-results' onBlur={() => setStyle({visibility: 'hidden'})}>
                {(search !== '') && (results?.map((location, i) => (
                    <a key={i} href={`/locations/${location.id}`} className='search-each-result'>
                        <img src={location?.images[0].image_url} className='search-res-img' alt='search-location'/>
                        <div>
                            {location?.name}
                        </div>
                    </a>
                )))}
            </div>
        </div>
    )
};

export default SearchArea;
