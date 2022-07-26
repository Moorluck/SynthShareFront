import { Note } from "./note.model";

export interface Loop {
    instrument: number,
    content: Note[][],
    waveForm: string,
    reverb: number,
    chorus: number,
    filter: number
}