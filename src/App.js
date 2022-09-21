import React from 'react';
import Collection from './components/Collection';
import Poems from './components/Poems';
import Poem from './components/Poem';
import './App.scss';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {

  return (
    <Router>
      <div className="App">
        <section className="container">
            <header>
              <Link to="/"><h1 id="title">247 POETRY</h1></Link>
            </header>
            <div className="bar">
              &nbsp;
            </div>

            {/* Fixed sidebar content */}
            <section className="sidebar">
              <div className="sidebar-container">
                <h1 id="tagline">Need a poem? Access your favorite poetry with 247.</h1>
                <h2>247 hosts a collection of poetry<br></br>from the <a href="https://poetrydb.org/index.html" target="_blank" rel="noreferrer">PoetryDB</a> database.</h2>
                {/*<Search />*/}
              </div>
            </section>

            {/* Scrollable content */}
            <section className="container-inner">
                <section className="home">
                    <Routes>
                        <Route path="/" element={ <Collection /> } />
                    </Routes>
                </section>
                <section className="poems">
                    <article>
                      <Routes>
                          <Route path="/poems" element={ <Poems /> } />
                      </Routes>
                    </article>
                </section>
                <section className="poem">
                    <article>
                      <Routes>
                          <Route path="/poem" element={ <Poem /> } />
                      </Routes>
                    </article>
                </section> 
            </section>
        </section>
      </div>
    </Router>
  );
}

export default App;
