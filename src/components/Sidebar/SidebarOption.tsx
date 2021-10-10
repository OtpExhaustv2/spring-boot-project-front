import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

interface Props {
    title: string;
    Icon?: any;
    path: string;
    exact?: boolean;
}

const SidebarOption: FC<Props> = ({title, Icon, path, exact = false}) => {
    return (
        <div className="sidebar__option">
            <NavLink to={path} exact>
                {Icon && <Icon className="sidebar__option__icon"/>}
                {Icon ? <h4>{title}</h4> : <p>{title}</p>}
            </NavLink>
        </div>
    );
};

export default SidebarOption;
