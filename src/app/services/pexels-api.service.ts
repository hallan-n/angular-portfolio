import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PEXELS_API_URL, PEXELS_API_AUTH } from '../environments/environments';


@Injectable({
  providedIn: 'root'
})
export class PexelsApiService {
  private API_URL: string = PEXELS_API_URL
  private resp: any

  constructor(private http: HttpClient) { }
  
  getRepos(): Observable<any[]>{
    this.resp = this.http.get<any>(this.API_URL, {
      headers:{
        Authorization: PEXELS_API_AUTH
      }
    })
    return this.resp
  }
}


