import {MusicActionType} from "../action-types/music.action.type";
import Music from "../../models/Music";

interface SetMusic {
    type: MusicActionType.SET_MUSIC,
    payload: Music
}

export type MusicAction = SetMusic;
