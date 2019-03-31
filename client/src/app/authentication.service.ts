import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentMemberSubject: BehaviorSubject<Member>;
  public currentMember: Observable<Member>;

  constructor(private http: HttpClient) {
    this.currentMemberSubject = new BehaviorSubject<Member>(JSON.parse(localStorage.getItem('currentMember')));
    this.currentMember = this.currentMemberSubject.asObservable();
  }

  public get currentMemberValue(): Member {
    return this.currentMemberSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${config.apiUrl}/members/authenticate`, { username, password })
      .pipe(map(member => {
        // login successful if there's a jwt token in the response
        if (member && member.token) {
          // store member details and jwt token in local storage to keep member logged in between page refreshes
          localStorage.setItem('currentMember', JSON.stringify(member));
          this.currentMemberSubject.next(member);
        }

        return member;
      }))
  }

  logout() {
    // remove member from local storage to log member out
    localStorage.removeItem('currentMember');
    this.currentMemberSubject.next(null);
  }
}
