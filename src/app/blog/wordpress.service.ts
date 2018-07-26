import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigConstants } from '../appDataConfig';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  wordpressUrl = ConfigConstants.blogUrl;

  constructor(private http: HttpClient) { }

  getPosts(num): Observable<any[]> {
    return this.http.get<any[]>(this.wordpressUrl, {
      params: {
        number: num
      }
    });
  }
}
