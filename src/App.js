import './App.css';
import { Routes, Route } from "react-router"
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ClientsIndex from './pages/ClientsIndex';
import ClientsShow from './pages/ClientsShow';
import NewClients from './pages/NewClients';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" >
          <Route path="" element={<ClientsIndex />}/>
          <Route path=":clientId" element={<ClientsShow />}/>
        </Route>
        <Route path="/new" element={<NewClients />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
