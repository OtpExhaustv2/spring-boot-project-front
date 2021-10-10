import Music from "../../models/Music";
import {MusicsAction} from "../actions/musics.action";
import {MusicsActionType} from "../action-types/musics.action.type";

const initialState: Music[] = [
    {title: "A-Wall", group: "Loverboy", liked: false, img: "https://images.genius.com/0ec805a8db56aa972072136259122fe5.500x500x1.jpg"},
    {title: "Je n'ai plus peur de me souvenir", group: "Guizmo", liked: false, img: "https://i.ytimg.com/vi/voKhA6XSWtE/maxresdefault.jpg"},
];

const reducer = (state = initialState, action: MusicsAction) => {
    switch (action.type) {
        case MusicsActionType.LIKE:
            return state.map((music) => {
                if (music.title === action.payload.title) {
                    return {...music, liked: !music.liked};
                }
                return music;
            })
        default:
            return state;
    }
}

export default reducer;
