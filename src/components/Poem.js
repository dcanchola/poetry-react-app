import React from 'react';
import ScrollToTop from './ScrollToTop';
import { useLocation, Link } from 'react-router-dom';

function Poem(props, event) {
    const location = useLocation();
    const result = location.state.author;

    return(
        <>
           <div className="loadContent">
                <ScrollToTop />
                <h3><Link to="/">Authors</Link>&nbsp;&nbsp;›&nbsp;&nbsp;<Link to="/poems" state={{ result }}>{location.state.author}</Link>&nbsp;&nbsp;›&nbsp;&nbsp;{location.state.title}</h3>
                <h1 className="name">{location.state.title}</h1>
                <h2 className="author"><Link to="/poems" state={{ result }}>{location.state.author}</Link></h2>
                <section className="lines">
                    <ul>
                        {location.state.lines.map((line, idx) => (
                            <li key={idx}>
                                {line}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    );
}

export default Poem;