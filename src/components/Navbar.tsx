import React, {useEffect, useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';

const Navbar = () => {
    const history = useHistory();
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const content = document.querySelector(".body") as HTMLBodyElement;
        const handleScroll = (e: any) => {
            setScroll(e?.target?.scrollTop > 30);
        }
        content.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`navbar ${scroll ? 'revealed' : ''}`}>
            {history.location.search}
            <div className="links">
                <div className="left">
                    <button onClick={history.goBack}>
                        <i className="fas fa-chevron-left"/>
                    </button>
                    <button onClick={history.goForward}>
                        <i className="fas fa-chevron-right"/>
                    </button>
                </div>
                <div className="right">
                    <NavLink exact to='/profile' activeClassName="active">
                        Sébastien Van Vreckem
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
