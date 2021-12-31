import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchResultsThunk } from '../store/search';

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


    console.log(search, results);
    return (
        <div>
            <input
                placeholder='Search'
                type='search'
                value={search}
                onChange={e => setSearch(e.target.value)}
                onClick={() => setStyle({visibility: 'visible'})}
            />
            <div style={style}>
                {(search !== '') && (results?.map((location, i) => (
                    <a key={i} href={`/locations/${location.id}`}>
                        <img src={location?.images[0].image_url}/>
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
