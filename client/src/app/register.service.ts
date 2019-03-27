import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

    constructor(private http: HttpClient) { }

    url: string = "http://localhost:3000/register";
    
}
