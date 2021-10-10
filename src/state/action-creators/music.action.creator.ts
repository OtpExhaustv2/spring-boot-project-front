import Music from "../../models/Music";
import {Dispatch} from "redux";
import {MusicAction} from "../actions/music.action";
import {MusicActionType} from "../action-types/music.action.type";

export const setMusic = (music: Music) => {
    return (dispatch: Dispatch<MusicAction>) => {
        dispatch({
            type: MusicActionType.SET_MUSIC,
            payload: music
        });
    }
}
