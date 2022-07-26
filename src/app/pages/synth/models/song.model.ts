import { Loop } from "./loop.model";

export interface Song {
    name: string,
    key: string,
    loops: Loop[]
}