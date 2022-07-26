import { Injectable } from '@angular/core';
import * as Tone from 'tone'
import { NUMBER_OF_INSTRUMENT } from '../grid/grid.service';

@Injectable({
  providedIn: 'root'
})
export class ToneService {

  private _synths : Tone.PolySynth[] = this.initSynth()

  private time : number = 0

  constructor() { }

  initSynth() {
    const synths = []
    for (let i = 0; i < NUMBER_OF_INSTRUMENT; i++) {
      const synth = new Tone.PolySynth(Tone.Synth, {
        oscillator: {
          type: "sine",
          volume: -10
        }
      }).toDestination()
      synths.push(synth)
    }
    return synths
  }

  async start() {
    await Tone.start()
  }

  stop() {
    Tone.Transport.stop()
  }

  startLoop(callback: () => void) {

    Tone.Transport.scheduleRepeat((time) => {
      this.time = time
      callback()
    }, "16n")

    Tone.Transport.start()
  }

  playNote(instrument: number, note: string, beat: number) {
    this._synths[instrument].triggerAttackRelease(note, "16n", this.time)
  }


}
