import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: {}[];

  constructor(private service: UsersService) {  }

  ngOnInit(): void {
    this.service.getUsers().subscribe((data: {}[]) => {
      const sortedUsers = data.sort((a: any, b: any) =>
      a.username.localeCompare(b.username));

      this.users = sortedUsers;
    });
  }
}
