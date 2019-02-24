import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

interface Iuser {
  id: Number;
  name: string;
  username: string;
  email: string;
  adress: {
    street: string;
    suite: string;
    city: string;
    zipcode: Number;
    geo: {
      lat: Number;
      lng: Number;
    };
  };
  phone: Number;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiURL: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): any {
    return this.http.get<Iuser>(this.apiURL);
  }
}
