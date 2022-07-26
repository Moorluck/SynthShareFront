import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToneService } from '../synth/services/tone/tone.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ToneService]
})
export class LoginComponent implements OnInit {

  form : FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  })

  constructor(
      private toneService : ToneService,
      private router : Router
        ) { }

  ngOnInit(): void {
  }

  onPlay() {
    this.toneService.start()
      .then(
        () => this.router.navigate(["/synth"])
      )
  }

}
