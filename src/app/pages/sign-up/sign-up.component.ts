import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form : FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  })

  constructor() { }

  ngOnInit(): void {
  }

}
