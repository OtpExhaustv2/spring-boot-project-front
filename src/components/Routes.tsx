import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Library from "../pages/Library";
import CreatePlaylist from "../pages/CreatePlaylist";
import Playlist from "../pages/Playlist";
import Liked from "../pages/Liked";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";

const Routes = () => {
    return (
        <Router>
            <div className="player">
                <div className="player__body">
                    <Sidebar/>
                    <div className="body">
                        <Navbar/>
                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/profile' exact component={Profile}/>
                            <Route path='/search' exact component={Search}/>
                            <Route path='/library' exact component={Library}/>
                            <Route path='/create-playlist' exact component={CreatePlaylist}/>
                            <Route path='/playlist/:id' component={Playlist}/>
                            <Route path='/liked-titles' exact component={Liked}/>
                            <Redirect to='/'/>
                        </Switch>
                    </div>
                </div>
                <Footer/>
            </div>
        </Router>
    );
};

export default Routes;