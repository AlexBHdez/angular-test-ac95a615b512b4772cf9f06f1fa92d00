import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

interface Post {
  userId: Number;
  id: Number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  apiURL: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): any {
    return this.http.get<Post>(this.apiURL);
  }
}
