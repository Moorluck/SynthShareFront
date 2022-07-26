import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Key, Mode, NoteHelper } from '../../helper/note.helper';
import { Note } from "../../models/note.model"
import { Song } from '../../models/song.model';
import { GridService } from '../../services/grid/grid.service';
import { ToneService } from '../../services/tone/tone.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [GridService, ToneService]
})
export class GridComponent implements OnInit {

  // Const

  readonly notes = NoteHelper.notes

  // Data

  instrumentSelected : number = 0

  song : Song | undefined

  scale = NoteHelper.getOctaveScale(NoteHelper.getScale(Key.C, Mode.MAJOR)).reverse()

  _currentBeat = 0
  get currentBeat() : number {
    return this._currentBeat
  }
  set currentBeat(nbr : number) {
    this._currentBeat = nbr
  }

  constructor(
    private gridService : GridService, 
    private toneService : ToneService,
    private cdRef : ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log(this.scale)
    this.song = this.gridService.song
    this.toneService.startLoop(
      () => {
        this.updateBeat()
      }
    )
  }

  updateBeat() {
    if (this.currentBeat < 15) {
      this.currentBeat++
    }
    else {
      this.currentBeat = 0
    }

    this.song?.loops.forEach(
      inst => {
        inst.content.forEach(
          (row, note) => row.forEach(
            (n, i) => {
              if (i === this.currentBeat) {
                n.selected = true
                if (n.active && n.selected) {
                  this.toneService.playNote(this.instrumentSelected, this.scale[note], this.currentBeat)
                }
              }
              else {
                n.selected = false
              }

            }
          )
        )
      }
    )

    this.cdRef.detectChanges()
  }

  onButtonClick(note : Note) {
    note.active = !note.active
  }

  onInstrumentSelected(index : number) {
    this.instrumentSelected = index
  }

}
