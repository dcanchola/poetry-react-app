import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import Feature from './Feature';
import Author from './Author';
import ScrollToTop from './ScrollToTop';
import { Link } from 'react-router-dom';


function Collection(props, event) {
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(true);
    const [featuredAuth, setFeaturedAuth] = useState(null);
    const [featuredPoem, setFeaturedPoem] = useState(null);

    useEffect(() => {
        //Fetch all author names
        async function fetchData() {
            const response = await fetch('https://poetrydb.org/author');
            const data = await response.json();
            const item = data;
            setResults([item]);
            return item;
        }

        //Fetch a random featured author 
        fetchData()
            .then((result) => {
                const featAuth = result.authors[Math.floor(Math.random()*result.authors.length)];
                setFeaturedAuth(featAuth);
                const poem = fetch('https://poetrydb.org/author/' + featAuth); 
                return poem;
            })
            .then((result) => {
                const data = result.json();
                return data;
            })
            .then((result) => {
                const featPoem = result[Math.floor(Math.random()*result.length)];
                setFeaturedPoem(featPoem);
                setLoading(false);
            });

    }, []);

    return (
        <>
            {loading ? 
            <div className="loader">
                <Loader/>
            </div> : 
            <div className="loadContent">
                <ScrollToTop />
                <section className="header">
                    <Link to="/poem" state={{ ...featuredPoem }}>
                        <Feature author={featuredAuth} {...featuredPoem}></Feature>
                    </Link>
                </section>
                <section className="authors">
                    <h1 id="authorList">Authors</h1>
                    <ul>
                    {results[0].authors.map(result => (
                        <li key={result}>
                            <Link to="/poems" state={{ result }}>
                                <Author name={result}></Author>
                            </Link>
                        </li>
                    ))}
                    </ul>
                </section>
            </div>
            }
        </>
    );
}

export default Collection;