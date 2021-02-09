import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ClientInfo from './components/ClientInfo';
import ClientCard from './components/ClientCard';

function App() {
  const cards = [];
  for (let i = 0; i < 3; i++) {
    cards.push(
      <div key={`card_${i}`}>
        <ClientCard />
      </div>
    );
  }
  return <div>{cards}</div>;
}

export default App;
