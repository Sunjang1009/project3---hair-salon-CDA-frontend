import './App.css';
import { Routes, Route } from "react-router"
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ClientsIndex from './pages/ClientsIndex';
import ClientsShow from './pages/ClientsShow';
import NewClients from './pages/NewClients';
import NewClientsBootStrap from './pages/NewClientsBootStrap';
import EditClient from './pages/EditClient';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" >
          <Route path="" element={<ClientsIndex />}/>
          <Route path=":clientId">
            <Route path="" element={<ClientsShow />}/>
            <Route path="edit" element={<EditClient />} />
          </Route>
        </Route>
        <Route path="/new" element={<NewClients />} />
        <Route path="/newb" element={<NewClientsBootStrap />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
