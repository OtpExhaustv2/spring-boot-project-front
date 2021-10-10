import {Dispatch} from "redux";
import Music from "../../models/Music";
import {MusicsAction} from "../actions/musics.action";
import {MusicsActionType} from "../action-types/musics.action.type";
import {MusicActionType} from "../action-types/music.action.type";
import {MusicAction} from "../actions/music.action";

export const like = (music: Music) => {
    return (dispatch: Dispatch<MusicsAction | MusicAction>) => {
        dispatch({
            type: MusicsActionType.LIKE,
            payload: music
        });
        dispatch({
            type: MusicActionType.SET_MUSIC,
            payload: {...music, liked: !music.liked}
        });
    }
}

