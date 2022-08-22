import { useState } from 'react';
import Topic from './Topic';
import './App.scss';

const App = () => {

  return (
    <div className="App">
      <aside className="nav">
        <h2>A daily collection of poetry available by topic.</h2>
        <div class="topics">
          <Topic topic="Love"></Topic>
          <Topic topic="Motivation"></Topic>
          <Topic topic="Self-Esteem"></Topic>
          <Topic topic="Reassurance"></Topic>
          <Topic topic="Anxiety"></Topic>
          <Topic topic="Fear"></Topic>
          <Topic topic="Loneliness"></Topic>
          <Topic topic="Jealousy"></Topic>
          <Topic topic="Spiritual"></Topic>
          <Topic topic="Grief"></Topic>
        </div>
      </aside>
      <div class="topbar">
        <div class="topics">
          <h1>24/7 POETRY</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
