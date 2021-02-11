import React, { useEffect, useContext } from 'react';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import ClientCard from './components/ClientCard';
import ClientInfo from './components/ClientInfo';
import ClientForm from './components/ClientForm';
import { Button } from '@chakra-ui/react';
import { globalContext } from '../contexts/globalContext';

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
          <div>
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
          </div>
        </Route>

        <Route path={'/' + clients[i].firstname + clients[i].lastname + clients[i].clientid}>
        <div>
          <ClientInfo />
        </div>
      </Route>
      </Switch>
    );
  }
  

  return (
    <Router>
      <div>
        {cards}
        <nav>
          <ul>
            <li>
              <Link to="/clientForm">
                <Button>Add New Client</Button>
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/clientForm">
            <ClientForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
