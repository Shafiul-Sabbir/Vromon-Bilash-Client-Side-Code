import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import NotFound from './Components/NotFound/NotFound'
import Meubar from './Components/Menubar/Meubar';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import AuthProvider from './Context/AuthProvider';
import Register from './Components/Registering/Register';
import PrivateRoute from './Components/Registering/PrivateRoute/PrivateRoute';
import MyOrders from './Components/Connections/MyOrders/MyOrders';
import ManageAllOrders from './Components/Connections/ManageAllOrders/ManageAllOrders';
import AddANewService from './Components/Connections/AddANewService/AddANewService';
import Offers from './Components/Offers/Offers';
import Gallery from './Components/Gallery/Gallery';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      
     <AuthProvider>
     <Router>
    <Meubar></Meubar>
      <Switch>
        <Route exact path ="/">
          <Home></Home>
        </Route>
        <Route path = "/home">
          <Home></Home>
        </Route>
        <Route path = "/services">
          <Services></Services>
        </Route>
        <PrivateRoute path = "/details/:detailsId">
          <ServiceDetails></ServiceDetails>
        </PrivateRoute>
        <Route path = "/offers">
          <Offers></Offers>
        </Route>
        <Route path = "/gallery">
          <Gallery></Gallery>
        </Route>
        <Route path="/orders">
          <MyOrders></MyOrders>
          </Route>
          <Route path="/allOrders">
          <ManageAllOrders></ManageAllOrders>
          </Route>
          <Route path="/addService">
          <AddANewService></AddANewService>
          </Route>
        <Route path="/register">
            <Register></Register>
        </Route>
        <Route path = "*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
