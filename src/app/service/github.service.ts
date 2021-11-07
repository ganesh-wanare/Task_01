import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor( private http: HttpClient) { }
  
  getData(): Observable<any> {
    const apiUrl = "https://api.github.com/users";
    return this.http.get<any>(apiUrl)
  }

}
