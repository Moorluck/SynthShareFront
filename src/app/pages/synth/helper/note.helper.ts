import { NUMBER_OF_NOTES } from "../services/grid/grid.service"

export enum Mode {
    MAJOR = 0, 
    DORIAN = 1,
    PHRYGIAN = 2,
    LYDIAN = 3,
    MIXOLYDIAN = 4,
    MINOR = 5,
    LOCRIAN = 6
}

export enum Key {
    C = 0,
    CSHARP = 1,
    D = 2,
    DSHARP = 3,
    E = 4,
    F = 5,
    FSHARP = 6,
    G = 7,
    GSHARP = 8,
    A = 9,
    ASHARP = 10,
    B = 11
}

export class NoteHelper {
    static notes : string[] = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]

    static steps : number[] = [2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1]

    static getScale(key : Key, mode : Mode) : string[] {
        let note = key
        const scale = []
        scale.push(this.notes[note])
        for (let i = 0; i < 7; i++) {
            note = note + this.steps[i + mode]
            scale.push(this.notes[note])
        }

        let fullScale = [...scale, ...scale.slice(1, scale.length-1)]

        for (let j = 3; j < NUMBER_OF_NOTES/7; j++) {
            fullScale = fullScale.concat(...scale)
        }

        return fullScale
    }

    static getOctaveScale(scale : string[], baseOctave = 2) : string[] {
        let passB = false
        let i = 0
        for (let note of scale) {
            if (passB) {
                baseOctave++
                passB = false
            }
            else {
                if (note === "B") {
                    passB = true
                }
            }
            scale[i] = scale[i] + baseOctave
            i++
        }

        return scale
    }
}