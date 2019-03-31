import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register() {
    
  }

  constructor(
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
  }

  // goBack(): void {
  //   this.location.back();
  // }

}
