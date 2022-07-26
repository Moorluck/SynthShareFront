import { Injectable } from '@angular/core';
import { Note } from '../../models/note.model';

export const NUMBER_OF_NOTES = 17

@Injectable({
  providedIn: 'root'
})
export class GridService {

  private _size: number = 16
  set size(size: number) {
    this._size = size
    this.initializeGrid()
  }
  get size() : number {
    return this._size
  }

  grids: Note[][][] = []

  constructor() { 
    this.initializeGrid()
  }

  initializeGrid() {
    this.grids = []
    for (let i = 0; i < this.size; i++) {
      const grid : Note[][] = [] 
      for (let i = 0; i < NUMBER_OF_NOTES; i++) {
        const row : Note[] = []
        for (let i = 0; i < this.size; i++) {
          row.push({
            active: false,
            selected: false
          } as Note)
        }
        grid.push(row)
      }
      this.grids.push(grid)
    }
  }
}
