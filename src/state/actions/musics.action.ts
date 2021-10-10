import {MusicsActionType} from "../action-types/musics.action.type";
import Music from "../../models/Music";

interface LikeAction {
    type: MusicsActionType.LIKE,
    payload: Music
}

export type MusicsAction = LikeAction;
