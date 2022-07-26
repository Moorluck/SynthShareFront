import { Injectable } from '@angular/core';
import { Loop } from '../../models/loop.model';
import { Note } from '../../models/note.model';
import { Song } from '../../models/song.model';

export const NUMBER_OF_NOTES = 22
export const NUMBER_OF_INSTRUMENT = 16

@Injectable({
  providedIn: 'root'
})
export class GridService {

  song : Song = this.initializeSong()

  constructor() { 
  }

  initializeSong() : Song {
    const loops : Loop[] = []
    for (let j = 0; j < NUMBER_OF_INSTRUMENT; j++) {
      const grid : Note[][] = [] 
      for (let i = 0; i < NUMBER_OF_NOTES; i++) {
        const row : Note[] = []
        for (let i = 0; i < NUMBER_OF_INSTRUMENT; i++) {
          row.push({
            active: false,
            selected: false
          } as Note)
        }
        grid.push(row)
      }
      loops.push({
        instrument: j,
        content: grid,
        waveForm: "sine",
        reverb: 0,
        chorus: 0,
        filter: 0
      } as Loop)
    }

    return {
      name: "",
      key: "C",
      loops: loops
    } as Song
  }
}
