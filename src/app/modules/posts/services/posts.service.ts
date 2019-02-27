import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Ipost } from '../../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  apiURL: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<{}[]> {
    return this.http.get<Ipost[]>(this.apiURL);
  }
}
