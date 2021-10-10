import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {musicsActionCreators, State} from "../../state";
import {bindActionCreators} from "redux";
import AudioPlayer from "./AudioPlayer";
import Music from "../../models/Music";

const Footer = () => {
    //const dispatch = useDispatch();
    const [isLiked, setIsLiked] = useState(false);
    // const {like} = bindActionCreators(musicsActionCreators, dispatch);
    // const music = useSelector((state: State) => state.music);

    return (
        <div className="footer">
            <div className="footer__left">
                <div className="song">
                    <img
                        src="https://picsum.photos/150/150"
                        alt=""/>
                    <div className="song-details">
                        <h3>My Universe</h3>
                        <p> Coldplay, BTS</p>
                    </div>
                    <div className={`favorite ${isLiked && 'active'}`} onClick={() => setIsLiked(n => !n)}><i
                        className="far fa-heart"/></div>
                </div>
            </div>
            <AudioPlayer/>
        </div>
    );
};

export default Footer;
