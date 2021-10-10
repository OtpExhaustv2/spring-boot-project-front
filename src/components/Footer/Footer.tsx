import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {musicsActionCreators, State} from "../../state";
import {bindActionCreators} from "redux";
import AudioPlayer from "./AudioPlayer";
import Music from "../../models/Music";

const Footer = () => {
    const dispatch = useDispatch();
    const {like} = bindActionCreators(musicsActionCreators, dispatch);
    const music = useSelector((state: State) => state.music);

    return (
        <div className="footer">
            <div className="footer__left">
                <p>Album and song details</p>
            </div>
            <AudioPlayer/>
        </div>
        // <>
        //     {Object.keys(music).length !== 0 &&
        //     <div>
        //         <img src={music.img} alt=""/>
        //         <p>{music.title}</p>
        //         <p>{music.group}</p>
        //         <p onClick={() => like(music)}>
        //             {music.liked ? <i className="fas fa-heart"/> : <i className="far fa-heart"/>}
        //         </p>
        //     </div>
        //     }
        // </>
    );
};

export default Footer;
