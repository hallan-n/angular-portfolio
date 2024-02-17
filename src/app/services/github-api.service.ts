import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repositorie } from '../models/repositorie';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private API_URL: string = "https://api.github.com/users/hallan-n/repos"
  private resp: Repositorie | any

  constructor(private http: HttpClient) { }

  getRepos(): Observable<Repositorie[]>{
    this.resp = this.http.get<Repositorie>(this.API_URL)
    return this.resp
  }
}
