import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

interface Props {
    title: string;
    path: string;
    exact?: boolean;
}

const PlaylistOption: FC<Props> = ({title, path, exact = false}) => {
    return (
        <div className="sidebar__playlist">
            <NavLink to={path} exact>
                <p>{title}</p>
            </NavLink>
        </div>
    );
};

export default PlaylistOption;
