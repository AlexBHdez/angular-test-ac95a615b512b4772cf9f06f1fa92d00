import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Iuser } from '../../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiURL: string = 'https://jsonplaceholder.typicode.com/users';

  users: Observable<{}[]>;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<{}[]> {
    this.users = this.http.get<Iuser[]>(this.apiURL);

    return this.users;
  }

  newUser(user: {}): void {
    this.http.post(this.apiURL, user)
    .subscribe((response: {}) => {
      console.log(response);
    });
  }
}
