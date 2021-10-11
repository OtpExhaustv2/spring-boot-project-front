import React from 'react';
import {useParams} from "react-router-dom";

type Params = {
    slug: string;
    id: string;
}

const Playlist = () => {
    const {id, slug}: Params = useParams();
    return (
        <div>
            {id} - {slug}
        </div>
    );
};

export default Playlist;
