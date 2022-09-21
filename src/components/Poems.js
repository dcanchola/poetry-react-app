import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import ScrollToTop from './ScrollToTop';
import { useLocation, Link } from 'react-router-dom';

function Poems(props, event) {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [poems, setPoems] = useState(null);

    //Fetch poems based on author
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://poetrydb.org/author/' + location.state.result);
            const data = await response.json();
            const item = data;
            setPoems([item]);
            setLoading(false);
            return item;
        }
        fetchData();
    }, [location.state.result]);

    return(
        <>
        {loading ? 
            <div className="loader">
                <Loader/>
            </div> : 
           <div className="loadContent">
                <ScrollToTop />
                <h3><Link to="/">Authors</Link>&nbsp;&nbsp;›&nbsp;&nbsp;{location.state.result}</h3>
                <h1 className="poet">{location.state.result}</h1>
                <ul>
                    {poems[0].map(poem => (
                        <li key={poem.title}>
                            <Link to="/poem" state={ poem }>{poem.title}&nbsp;&nbsp;<span className="carat">›</span></Link>
                        </li>
                    ))}
                </ul>
            </div>
           }
        </>
    );
}

export default Poems;