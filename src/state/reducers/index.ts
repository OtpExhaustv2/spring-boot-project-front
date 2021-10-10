import {combineReducers} from "redux";
import musicReducer from "./music.reducer";
import musicsReducer from "./musics.reducer";

const reducers = combineReducers({
    musics: musicsReducer,
    music: musicReducer
})

export default reducers;

export type State = ReturnType<typeof reducers>;
