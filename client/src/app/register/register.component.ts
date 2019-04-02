import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerMember: Member = new Member();

  register() {
    this.memberService.register(this.registerMember).subscribe();
    // send registerMember to the service
    // memberService.register(registerMember).subscribe();
  }

  constructor(
    private router: Router,
    private location: Location,
    private memberService : MemberService
  ) { }

  ngOnInit() {
  }

  // goBack(): void {
  //   this.location.back();
  // }

}
