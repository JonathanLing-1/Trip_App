import './App.css';
import Header from './components/Header';
import { Router } from '@reach/router';
import CreateUser from './views/user/CreateUser';
import EditUser from './views/user/CreateUser';
import ViewUser from './views/user/CreateUser';
import Dashboard from './views/Dashboard';
import InfoPage from './views/InfoPage';
import CreateTrip from "./views/trip/CreateTrip";
import DisplayAllTrips from "./views/trip/DisplayAllTrips";
import DisplayTrip from "./views/trip/DisplayOneTrip";
import EditTrip from "./views/trip/EditTrip";
import LogReg from "./views/LogReg";



function App() {
  return (
    <>
    <Header></Header>
    <Dashboard path ="/"/>
      <Router>
        <CreateUser path="/user/create"/>
        <ViewUser path="/user/view/:id"/>
        <EditUser path="/user/edit/:id"/>

        <CreateTrip path="/trip/create"/>
        <DisplayAllTrips path="/trip/display/all"/>
        <DisplayTrip path="/trip/display/:id"/>
        <EditTrip path="/trip/display/:id/edit"/>

        <InfoPage path="/info"/>
        <LogReg path="/user/login"></LogReg>
      </Router>
    </>
  );
}

export default App;
