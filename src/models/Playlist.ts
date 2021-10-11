import Music from "./Music";

export default interface Playlist {
    title: string;
    description: string;
    author: string;
    musics: Music[];
}