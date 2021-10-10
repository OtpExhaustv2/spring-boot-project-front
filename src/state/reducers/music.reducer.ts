import Music from "../../models/Music";
import {MusicAction} from "../actions/music.action";
import {MusicActionType} from "../action-types/music.action.type";

const initialState = {} as Music;

const reducer = (state = initialState, action: MusicAction) => {
    switch (action.type) {
        case MusicActionType.SET_MUSIC:
            return action.payload;
        default:
            return state;
    }
}

export default reducer;
