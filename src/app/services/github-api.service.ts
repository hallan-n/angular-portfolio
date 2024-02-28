import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Repositorie } from '../models/repositorie';
import { Environments as env } from '../environments/environments';


@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private API_URL: string = env.GITHUB_API_URL
  private cache: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  getRepos(): Observable<any> {
    if (this.cache.getValue() != null) {
      return new Observable<any>((observer)=>{
        observer.next(this.cache.getValue())
      })
    }
    
    return this.http.get<Repositorie>(this.API_URL).pipe(
      map((res)=>{
        this.cache.next(res)
        return this.cache.getValue()
      })      
    )
  }
}
