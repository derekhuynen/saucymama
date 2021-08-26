import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Menu from './Pages/Menu'
import Home from './Pages/Home'
import Header from './Components/Header/Header'
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className="app">

            <Router>
                <Header/>
                <Switch>
                    <Route path="/menu" component={Menu}/>
                    <Route path="/" component={Home}/>
                </Switch>

            </ Router>
        </div>
    );
}

export default App;
