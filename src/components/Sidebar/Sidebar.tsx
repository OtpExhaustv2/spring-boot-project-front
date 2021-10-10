import React from 'react';
import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AddBoxIcon from '@material-ui/icons/AddBox';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {NavLink} from 'react-router-dom';
import PlaylistOption from "./PlaylistOption";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <NavLink to="/" exact>
                <img className="sidebar__logo"
                     src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                     alt="spotify icon"/>
            </NavLink>

            <SidebarOption title="Accueil" Icon={HomeIcon} path="/" exact/>
            <SidebarOption title="Rechercher" Icon={SearchIcon} path="/search"/>
            <SidebarOption title="Bibliothèque" Icon={LibraryMusicIcon} path="/library"/>
            <br/>
            <SidebarOption title="Créer une playlist" Icon={AddBoxIcon} path="/create-playlist"/>
            <SidebarOption title="Titres likés" Icon={FavoriteIcon} path="/liked-titles"/>
            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>
            <div className="playlists">
                <PlaylistOption title="Hip Hop" path="/playlist/hip-hop"/>
                <PlaylistOption title="RnB" path="/playlist/rnb"/>
                <PlaylistOption title="Rock" path="/playlist/rock"/>
                <PlaylistOption title="Rock" path="/playlist/rock"/>
                <PlaylistOption title="Rock" path="/playlist/rock"/>
                <PlaylistOption title="Rock" path="/playlist/rock"/>
                <PlaylistOption title="Rock" path="/playlist/rock"/>
                <PlaylistOption title="Rock" path="/playlist/rock"/>
                <PlaylistOption title="Rock" path="/playlist/rock"/>
                <PlaylistOption title="Rock" path="/playlist/rock"/>
                <PlaylistOption title="Rock" path="/playlist/rock"/>
                <PlaylistOption title="Rock" path="/playlist/rock"/>
                <PlaylistOption title="Rock" path="/playlist/rock"/>
                <PlaylistOption title="Rock" path="/playlist/rock"/>
                <PlaylistOption title="Rock" path="/playlist/rock"/>
                <PlaylistOption title="Rock" path="/playlist/rock"/>
                <PlaylistOption title="Rock" path="/playlist/rock"/>
                <PlaylistOption title="Rock" path="/playlist/rock"/>
                <PlaylistOption title="Rock" path="/playlist/rock"/>
            </div>
        </aside>
    );
};

export default Sidebar;
