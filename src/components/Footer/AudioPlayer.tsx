import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
// import ShuffleIcon from '@material-ui/icons/Shuffle';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
// import RepeatIcon from '@material-ui/icons/Repeat';
// import PauseCircleButton from '@material-ui/icons/PauseCircleOutline';

const AudioPlayer = () => {
        const [isPlaying, setIsPlaying] = useState(false);
        const [shuffle, setShuffle] = useState(false);
        const [loop, setLoop] = useState(false);

        const [duration, setDuration] = useState(0);
        const [currentTime, setCurrentTime] = useState(0);

        const audioPlayer = useRef() as MutableRefObject<HTMLAudioElement>;
        const progressBar = useRef() as MutableRefObject<HTMLInputElement>;
        const progressVolume = useRef() as MutableRefObject<HTMLInputElement>;
        const animationRef = useRef() as MutableRefObject<FrameRequestCallback>;

        const onLoadedMetadata = () => {
            if (audioPlayer.current) {
                const seconds = Math.floor(audioPlayer.current.duration);
                setDuration(seconds);
                progressBar.current.max = String(seconds);
            }
        }

        useEffect(() => {
            progressVolume.current.style.setProperty('--seek-before-width', `${(Number(progressVolume.current.value) * 100)}%`);
        }, [progressVolume?.current]);

        useEffect(() => {
            if (!loop && currentTime == duration) {
                setIsPlaying(false);
            }
        }, [currentTime]);

        const calculateTime = (secs: number) => {
            const minutes = Math.floor(secs / 60);
            const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
            const seconds = Math.floor(secs % 60);
            const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
            return `${returnedMinutes}:${returnedSeconds}`;
        }

        const togglePlayPause = () => {
            const prevValue = isPlaying;
            setIsPlaying(!prevValue);
            if (!prevValue) {
                audioPlayer.current.play();
                // @ts-ignore
                animationRef.current = requestAnimationFrame(whilePlaying)
            } else {
                audioPlayer.current.pause();
                cancelAnimationFrame(Number(animationRef.current));
            }
        }

        const whilePlaying = () => {
            progressBar.current.value = String(audioPlayer.current.currentTime);
            changePlayerCurrentTime();
            // @ts-ignore
            animationRef.current = requestAnimationFrame(whilePlaying);
        }

        const changeRange = () => {
            audioPlayer.current.currentTime = Number(progressBar.current.value);
            changePlayerCurrentTime();
        }

        const changePlayerCurrentTime = () => {
            progressBar.current.style.setProperty('--seek-before-width', `${Number(progressBar.current.value) / duration * 100}%`)
            setCurrentTime(Number(progressBar.current.value));
        }

        const changeVolume = () => {
            audioPlayer.current.volume = Number(progressVolume.current.value);
            progressVolume.current.style.setProperty('--seek-before-width', `${Number(progressVolume.current.value) * 100}%`);
        }

        return (
            <>
                <div className="footer__center">
                    <div className="footer__player">
                        <audio ref={audioPlayer}
                               src={`${process.env.PUBLIC_URL}/songs/acdc-back-in-black-official-video.mp3`}
                               preload="metadata" loop={loop} onLoadedMetadata={onLoadedMetadata}/>

                        <button className={`shuffle ${shuffle ? 'active' : ''}`} onClick={() => setShuffle(n => !n)}><i
                            className="fas fa-random"/></button>
                        <button className="forward-backward"><i className="fas fa-step-backward"/></button>
                        <button className="play-pause" onClick={togglePlayPause}>
                            {isPlaying ? <i className="fas fa-pause pause"/> : <i className="fas fa-play play"/>}
                        </button>
                        <button className="forward-backward"><i className="fas fa-step-forward"/></button>
                        <button className={`loop ${loop ? 'active' : ''}`} onClick={() => setLoop(n => !n)}><i
                            className="fas fa-undo-alt"/></button>
                    </div>

                    <div className="footer__timer">
                        <div className="current-time">{calculateTime(currentTime)}</div>
                        <div>
                            <input type="range" className="progress-bar" defaultValue="0" ref={progressBar}
                                   onChange={changeRange}/>
                        </div>
                        <div className="duration">{(!isNaN(duration) && duration) && calculateTime(duration)}</div>
                    </div>
                </div>
                <div className="footer__right">
                    <input type="range" onChange={changeVolume} ref={progressVolume} min="0" max="1" step="0.01"
                           defaultValue="0.1"/>
                </div>
            </>
        );
    }
;

export default AudioPlayer;

{/*<ShuffleIcon className={`footer__icon ${shuffle && 'active'}`} onClick={() => setShuffle(n => !n)}/>*/
}
{/*<SkipPreviousIcon className="footer__icon"/>*/
}
{/*{!isPlaying ? <PlayCircleOutlineIcon className="footer__icon play" onClick={togglePlayPause}/> :*/
}
{/*    <PauseCircleButton className="footer__icon" onClick={togglePlayPause}/>}*/
}
{/*<SkipNextIcon className="footer__icon"/>*/
}
{/*<RepeatIcon className="footer__icon" onClick={() => setLoop(n => !n)}/>*/
}
