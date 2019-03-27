import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member[];
  
  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers()
      .subscribe(members => this.members = members);
  }
  
  // Not sure if we want to use the below code. This would be an admin-only feature. It currently is not compatible with member.ts because it employs 'name' instead of 'firstName' and 'lastName'.

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.memberService.addMember({ name } as Member)
  //     .subscribe(member => {
  //       this.members.push(member);
  //     });
  // }

  delete(member: Member): void {
    this.members = this.members.filter(m => m !== member);
    this.memberService.deleteMember(member).subscribe();
  }

}
