import { Component, Input, OnInit } from '@angular/core';
import { Note } from "../../models/note.model"
import { GridService } from '../../services/grid/grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [GridService]
})
export class GridComponent implements OnInit {

  instrumentSelected : number = 0

  grids : Note[][][] = []

  size : number = 0

  constructor(private gridService : GridService) { }

  ngOnInit(): void {
    this.grids = this.gridService.grids
    this.size = this.grids[0][0].length
  }

  onButtonMouseOver(note : Note) {
    note.selected = !note.selected
  }

  onButtonClick(note : Note) {
    note.active = !note.active
  }

  onInstrumentSelected(index : number) {
    this.instrumentSelected = index
  }

}
