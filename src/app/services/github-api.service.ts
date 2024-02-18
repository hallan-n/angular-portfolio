import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repositorie } from '../models/repositorie';
import { GITHUB_API_URL } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private API_URL: string = GITHUB_API_URL
  private resp: Repositorie | any

  constructor(private http: HttpClient) { }

  getRepos(): Observable<Repositorie[]>{
    this.resp = this.http.get<Repositorie>(this.API_URL)
    return this.resp
  }
}
