import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Photos } from '../models/photo'
import { PEXELS_API_URL, PEXELS_API_AUTH } from '../environments/environments';


@Injectable({
  providedIn: 'root'
})
export class PexelsApiService {
  private API_URL: string = PEXELS_API_URL
  private cache: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }
  
  getRepos(): Observable<Photos>{
    if (this.cache.getValue() != null) {
      return new Observable<any>(
        (observer) => {
          observer.next(this.cache.getValue())
        }
      )
    }

    return this.http.get<Photos>(this.API_URL, {
      headers:{
        Authorization: PEXELS_API_AUTH
      }
    }).pipe(
      map((res) => {
        this.cache.next(res)
        return this.cache.getValue()
      })
    )
  }
}


