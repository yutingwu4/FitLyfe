import React, { useEffect, useContext } from 'react';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import ClientCard from './components/ClientCard';
import ClientInfo from './components/ClientInfo';
import ClientForm from './components/ClientForm';
import { globalContext } from '../contexts/globalContext';
import { Avatar, AvatarBadge, AvatarGroup, Button } from "@chakra-ui/react"

function App() {
  const { clients, setClients } = useContext(globalContext);
  const fetchData = () => {
    fetch('/api/allTrainees', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        setClients(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const cards = [];

  for (let i = 0; i < clients.length; i++) {
    cards.push(
      <Switch>
        <Route exact path='/'>
            <Link to={'/' + clients[i].firstname + clients[i].lastname + clients[i].clientid}  >
              <button className='btn'>
                <ClientCard
                  key={i}
                  clientid={clients[i].clientid}
                  firstname={clients[i].firstname}
                  lastname={clients[i].lastname}
                  email={clients[i].email}
                />
              </button>
            </Link>
        </Route>

        <Route path={'/' + clients[i].firstname + clients[i].lastname + clients[i].clientid}>
        <div>
          <ClientInfo
          key={i}
          //pass in biometric info
          firstname={clients[i].firstname}
          lastname={clients[i].lastname}
          email={clients[i].email}
          clientid={clients[i].clientid}
           />
        </div>
      </Route>
      </Switch>
    );
  }
  

  return (
    <Router>
        <div className="navbar">
          <p className="navbar__name">FitLyfe</p>
          <Avatar size="xl"/>
        </div>
            <div className="main__route">
              <Link to="/" className="main__link">
                Show Clients
              </Link>
              <Link to="/clientForm" className="main__link">
                Add New Client
              </Link>
            </div>
        <div className="cardContainer">
        {cards}
        </div>
        <Switch>
          <Route exact path="/clientForm">
            <ClientForm />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
