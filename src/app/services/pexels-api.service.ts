import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PexelsApiService {
  private API_URL: string = "https://api.pexels.com/v1/search?per_page=79&query=code"
  private resp: any

  constructor(private http: HttpClient) { }
  
  getRepos(): Observable<any[]>{
    this.resp = this.http.get<any>(this.API_URL, {
      headers:{
        Authorization: "UPrnDgoSFYRwT3Ssv2Tse9k68LzXNzRDGhmf7kr8ag8brBDYRe5OCMy5"
      }
    })
    return this.resp
  }
}


